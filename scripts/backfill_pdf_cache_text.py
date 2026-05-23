#!/usr/bin/env python3
"""Backfill text extraction for PDF caches in ~/Claude/research_cache/.

Consumer-side workaround for `brandon-behring/research_toolkit#11` (Add PDF
text extraction to cache_source.py). Iterates the cache metadata; for any
entry with content_type=application/pdf AND extraction_status=raw_only,
runs `pdftotext` (poppler-utils) on the blob, writes the result to
text_path, and flips extraction_status to "ok" in the metadata JSON.

Idempotent: skips entries already at extraction_status=ok.

Delete this script after research_toolkit#11 lands upstream and the toolkit
handles PDFs natively.

Usage:
    python ~/guides/scripts/backfill_pdf_cache_text.py [--dry-run]
"""
from __future__ import annotations

import argparse
import json
import shutil
import subprocess
import sys
from pathlib import Path

CACHE_ROOT = Path.home() / "Claude" / "research_cache"
META_DIR = CACHE_ROOT / "metadata" / "sha256"
BLOBS_DIR = CACHE_ROOT / "blobs" / "sha256"
TEXT_DIR = CACHE_ROOT / "text" / "sha256"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--dry-run", action="store_true", help="report what would change without writing")
    args = parser.parse_args()

    if not shutil.which("pdftotext"):
        print("ERROR: pdftotext not found on PATH. Install poppler-utils (brew install poppler).", file=sys.stderr)
        return 1

    if not META_DIR.is_dir():
        print(f"ERROR: cache metadata dir not found: {META_DIR}", file=sys.stderr)
        return 1

    candidates: list[tuple[Path, dict]] = []
    skipped_ok = 0
    skipped_nonpdf = 0
    for meta_path in sorted(META_DIR.glob("*.json")):
        try:
            data = json.loads(meta_path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError) as exc:
            print(f"WARN: could not read {meta_path.name}: {exc}", file=sys.stderr)
            continue
        if data.get("content_type") != "application/pdf":
            skipped_nonpdf += 1
            continue
        if data.get("extraction_status") == "ok":
            skipped_ok += 1
            continue
        if data.get("extraction_status") not in ("raw_only", None):
            print(f"INFO: {meta_path.name} extraction_status={data.get('extraction_status')!r} (not raw_only); skipping")
            continue
        candidates.append((meta_path, data))

    print(f"PDF caches needing extraction: {len(candidates)}")
    print(f"PDF caches already extracted (ok): {skipped_ok}")
    print(f"Non-PDF caches skipped: {skipped_nonpdf}")

    if args.dry_run:
        for meta_path, data in candidates:
            print(f"  WOULD extract: {meta_path.stem}  url={data.get('source_url', '?')}")
        return 0

    ok = 0
    failed = 0
    for meta_path, data in candidates:
        sha = meta_path.stem
        blob_path = BLOBS_DIR / sha
        text_path = TEXT_DIR / f"{sha}.txt"
        if not blob_path.is_file():
            print(f"WARN: blob missing for {sha}: {blob_path}", file=sys.stderr)
            failed += 1
            continue
        TEXT_DIR.mkdir(parents=True, exist_ok=True)
        try:
            # pdftotext <blob> <text_path>; use -layout for better structure preservation
            proc = subprocess.run(
                ["pdftotext", "-layout", str(blob_path), str(text_path)],
                check=False,
                capture_output=True,
                text=True,
                timeout=120,
            )
            if proc.returncode != 0:
                print(f"WARN: pdftotext failed for {sha}: {proc.stderr.strip()[:200]}", file=sys.stderr)
                failed += 1
                continue
            if not text_path.is_file() or text_path.stat().st_size == 0:
                print(f"WARN: pdftotext produced no output for {sha}", file=sys.stderr)
                # Flag as failed but don't write empty file
                if text_path.is_file():
                    text_path.unlink()
                failed += 1
                continue
        except subprocess.TimeoutExpired:
            print(f"WARN: pdftotext timed out for {sha} (>120s)", file=sys.stderr)
            failed += 1
            continue

        data["extraction_status"] = "ok"
        meta_path.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
        print(f"OK: {sha[:16]}...  {text_path.stat().st_size} bytes extracted  ({data.get('source_url', '?')})")
        ok += 1

    print(f"\nDone. extracted={ok}, failed={failed}, skipped_already_ok={skipped_ok}")
    return 0 if failed == 0 else 2


if __name__ == "__main__":
    sys.exit(main())
