#!/usr/bin/env python3
"""Validate the research dossiers under docs/research/ with research_toolkit validators.

Wires up the upstream `research_toolkit` strict-live validators (no vendored copy) as a
push-time integrity gate for the dossier corpus. For each dossier it runs the deterministic,
offline validators; v1-era dossiers (no evidence_ledger.yml) get the schema-agnostic
cross_stage check only, since the strict-live validators would false-fail on their shape.

Two integrity tiers:
  * default      — offline validators safe for CI (no cache reads, no network):
                   bib_ledger, evidence_ledger, claim_graph, gather_trace, cross_stage.
  * --with-cache — also runs the cache-dependent validators (cache_manifest,
                   pre_selection_manifest, verify_citations) which read the local blob cache
                   at ~/Claude/research_cache. Local use only; the cache is not committed.

The toolkit is located via --toolkit, else $RESEARCH_TOOLKIT, else ~/Claude/research_toolkit.

Note: evidence_ledger validation is offline-safe while all evidence is extraction_method:
paraphrase. If verbatim_match evidence is added later, evidence_ledger.py will read cached
text spans and must move to the --with-cache tier (file a consumer:guides upstream ask for a
--skip-anchor-io flag).

Usage:
    python scripts/research_lint.py [--toolkit PATH] [--with-cache] [--strict]
"""
from __future__ import annotations

import argparse
import os
import subprocess
import sys
from datetime import date
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_RESEARCH_DIR = REPO_ROOT / "docs" / "research"
CACHE_ROOT = Path.home() / "Claude" / "research_cache"

# Offline file validators (relative path within a dossier -> validators module). CI-safe.
OFFLINE_FILE_VALIDATORS = (
    ("bib_ledger.yml", "bib_ledger"),
    ("evidence_ledger.yml", "evidence_ledger"),
    ("claim_graph.jsonl", "claim_graph"),
    ("gather_trace.yml", "gather_trace"),
)
# Cache-dependent file validators (only with --with-cache and only when the blob cache exists).
CACHE_FILE_VALIDATORS = (
    ("cache_manifest.yml", "cache_manifest"),
    ("agent_index/pre_selection_manifest.yml", "pre_selection_manifest"),
)


def _toolkit_path(arg: str | None) -> Path:
    raw = arg or os.environ.get("RESEARCH_TOOLKIT") or str(Path.home() / "Claude" / "research_toolkit")
    return Path(raw).expanduser().resolve()


def _run(label: str, cmd: list[str], env: dict[str, str]) -> bool:
    """Run one validator; print OK/FAIL; echo the stderr tail on failure. True iff it passed."""
    proc = subprocess.run(cmd, env=env, capture_output=True, text=True)
    if proc.returncode == 0:
        print(f"  OK   {label}")
        return True
    print(f"  FAIL {label} (exit {proc.returncode})")
    for line in (proc.stderr or proc.stdout or "").strip().splitlines()[-8:]:
        print(f"         {line}")
    return False


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--toolkit", help="path to a research_toolkit checkout "
                        "(default: $RESEARCH_TOOLKIT or ~/Claude/research_toolkit)")
    parser.add_argument("--research-dir", default=str(DEFAULT_RESEARCH_DIR),
                        help="dossier root (default: docs/research)")
    parser.add_argument("--with-cache", action="store_true",
                        help="also run cache-dependent validators (needs ~/Claude/research_cache; local only)")
    parser.add_argument("--strict", action="store_true",
                        help="promote cross_stage soft warnings (orphan/dangling refs) to errors")
    args = parser.parse_args()

    toolkit = _toolkit_path(args.toolkit)
    if not (toolkit / "validators" / "__init__.py").is_file():
        print(f"ERROR: research_toolkit validators not found under {toolkit}. "
              f"Pass --toolkit or set RESEARCH_TOOLKIT.", file=sys.stderr)
        return 2

    research_dir = Path(args.research_dir).expanduser().resolve()
    if not research_dir.is_dir():
        print(f"ERROR: research dir not found: {research_dir}", file=sys.stderr)
        return 2

    env = dict(os.environ)
    env["PYTHONPATH"] = str(toolkit) + (os.pathsep + env["PYTHONPATH"] if env.get("PYTHONPATH") else "")

    with_cache = args.with_cache
    if with_cache and not CACHE_ROOT.is_dir():
        print(f"NOTE: --with-cache given but {CACHE_ROOT} not found; "
              f"skipping cache-dependent validators.", file=sys.stderr)
        with_cache = False

    dossiers = sorted(p for p in research_dir.iterdir() if p.is_dir())
    if not dossiers:
        print(f"ERROR: no dossiers found under {research_dir}", file=sys.stderr)
        return 2

    failures = 0
    for dossier in dossiers:
        is_v22 = (dossier / "evidence_ledger.yml").is_file()
        print(f"### {dossier.name} ({'v2.2 strict-live' if is_v22 else 'v1-era'})")

        if is_v22:
            for filename, module in OFFLINE_FILE_VALIDATORS:
                target = dossier / filename
                if not target.is_file():
                    print(f"  SKIP {module} (no {filename})")
                    continue
                if not _run(module, [sys.executable, "-m", f"validators.{module}", str(target)], env):
                    failures += 1

        # cross_stage runs for every dossier (schema-agnostic; keys on bib_ledger).
        cross_cmd = [sys.executable, "-m", "validators.cross_stage", str(dossier)]
        if args.strict:
            cross_cmd.append("--strict")
        if not _run("cross_stage", cross_cmd, env):
            failures += 1

        if with_cache and is_v22:
            for filename, module in CACHE_FILE_VALIDATORS:
                target = dossier / filename
                if not target.is_file():
                    print(f"  SKIP {module} (no {filename})")
                    continue
                if not _run(module, [sys.executable, "-m", f"validators.{module}", str(target)], env):
                    failures += 1
            verify = toolkit / "scripts" / "verify_citations.py"
            if verify.is_file():
                cmd = [sys.executable, str(verify), str(dossier), "--today", date.today().isoformat()]
                if not _run("verify_citations", cmd, env):
                    failures += 1

    print()
    print(f"research-lint ({'offline + cache' if with_cache else 'offline'}): "
          f"{len(dossiers)} dossier(s) checked, {failures} failure(s).")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
