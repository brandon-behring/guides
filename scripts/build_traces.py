#!/usr/bin/env python3
"""build_traces.py — offline next-token logit dump for the /lab/sampling demo.

Runs a small language model (gpt2) ONCE, locally, and writes the top-K
(token, logit) pairs for a few curated prompts to src/data/sampling_traces.json.
The committed JSON is the only thing that ships — the model is never served, so
the live site stays a static Cloudflare Pages deploy with no inference backend.

Run it with an environment that has torch + transformers, e.g. the course_learning
venv:

    ~/course_learning/.venv/bin/python3 scripts/build_traces.py

If torch / transformers / the model download are unavailable, it falls back to a
hand-authored *illustrative* distribution (clearly labelled "model": "illustrative")
so the demo still builds and teaches the identical reshaping math. Swap in a real
dump later by re-running this in an environment that has the deps.

NEVER fails silently: it prints whether it took the REAL or FALLBACK path and exits 0
either way (a missing model must not break the site build).
"""
from __future__ import annotations

import datetime as _dt
import json
import sys
from pathlib import Path

MODEL_NAME = "gpt2"
TOP_K = 50

# Curated (empirically, against gpt2) so the sliders visibly change the shape,
# spanning a near-deterministic peak -> two-way race -> medium -> flat tail.
#   "Thank you very"               -> " much"   ~99%
#   "Water is made of hydrogen and"-> " oxygen" ~46% / " helium" ~28%
#   "The opposite of hot is"       -> " cold"   ~16%
#   "My favorite color is"         -> diffuse, long tail
PROMPTS = [
    "Thank you very",
    "Water is made of hydrogen and",
    "The opposite of hot is",
    "My favorite color is",
]

OUT_PATH = Path(__file__).resolve().parent.parent / "src" / "data" / "sampling_traces.json"


def real_dump() -> list[dict]:
    """Dump real top-K next-token logits from gpt2. Raises on any failure."""
    import torch
    from transformers import AutoModelForCausalLM, AutoTokenizer

    tok = AutoTokenizer.from_pretrained(MODEL_NAME)
    model = AutoModelForCausalLM.from_pretrained(MODEL_NAME)
    model.eval()

    prompts_out: list[dict] = []
    for prompt in PROMPTS:
        enc = tok(prompt, return_tensors="pt")
        with torch.no_grad():
            logits = model(**enc).logits[0, -1]  # final-position next-token logits
        top = torch.topk(logits, TOP_K)
        rows = [
            {"token": tok.decode([int(idx)]), "logit": round(float(val), 4)}
            for val, idx in zip(top.values, top.indices)
        ]
        prompts_out.append({"prompt": prompt, "logits": rows})
    return prompts_out


def fallback_dump() -> list[dict]:
    """Hand-authored, plausible distributions (peaked -> flat). Clearly labelled."""

    def rows(pairs: list[tuple[str, float]]) -> list[dict]:
        return [{"token": t, "logit": l} for t, l in pairs]

    return [
        {"prompt": "Thank you very", "logits": rows([
            (" much", 18.0), (" Much", 8.5), (",", 7.9), (" very", 7.4),
            (" little", 7.0), (" well", 6.6), (" good", 6.1), (" hard", 5.7),
            (" soon", 5.2), (" often", 4.8), (" highly", 4.3), (" deeply", 3.9),
            (" warmly", 3.4), (" kindly", 3.0), (" truly", 2.6), (" so", 2.2),
        ])},
        {"prompt": "Water is made of hydrogen and", "logits": rows([
            (" oxygen", 15.2), (" helium", 14.7), (" carbon", 12.4), (" methane", 12.0),
            (" nitrogen", 11.6), (" hydrogen", 11.0), (" water", 10.4), (" oxygen", 9.9),
            (" sodium", 9.3), (" sulphur", 8.7), (" sulfur", 8.2), (" gas", 7.6),
            (" salt", 7.0), (" iron", 6.4), (" calcium", 5.8), (" argon", 5.2),
        ])},
        {"prompt": "The opposite of hot is", "logits": rows([
            (" cold", 13.6), (" the", 12.3), (" a", 12.0), (" hot", 11.6),
            (" warm", 11.2), (" not", 10.7), (" cool", 10.2), (" cooler", 9.6),
            (" colder", 9.0), (" heat", 8.4), (" temperature", 7.8), (" dry", 7.2),
            (" wet", 6.6), (" freezing", 6.0), (" ice", 5.4), (" so", 4.8),
        ])},
        {"prompt": "My favorite color is", "logits": rows([
            (" the", 13.2), (" blue", 12.4), (" a", 12.0), (" black", 11.6),
            (" red", 11.5), (" pink", 11.3), (" green", 11.0), (" white", 10.7),
            (" purple", 10.3), (" yellow", 9.9), (" orange", 9.4), (" gold", 8.9),
            (" brown", 8.3), (" gray", 7.7), (" dark", 7.1), (" light", 6.5),
        ])},
    ]


def main() -> int:
    today = _dt.date.today().isoformat()
    try:
        prompts = real_dump()
        model_label = MODEL_NAME
        path = "REAL"
    except Exception as exc:  # noqa: BLE001 — fall back on ANY failure, but say so loudly
        print(f"WARN: real dump failed ({type(exc).__name__}: {exc}).", file=sys.stderr)
        print("WARN: writing FALLBACK illustrative distribution instead.", file=sys.stderr)
        prompts = fallback_dump()
        model_label = "illustrative"
        path = "FALLBACK"

    payload = {"model": model_label, "generated": today, "prompts": prompts}
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(
        json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"
    )

    print(f"OK [{path}]: wrote {len(prompts)} prompts (model={model_label}) -> {OUT_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
