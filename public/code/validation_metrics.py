"""Illustrate frozen-versus-revised rule validation on fictional labels.

The supplied CSV is synthetic. The revised-rule scores are in-sample if the
same labels informed the revisions; only the frozen rules illustrate an
out-of-sample check.
"""

from __future__ import annotations

from csv import DictReader
from pathlib import Path


DATA_FILE = Path(__file__).with_name("synthetic_validation.csv")


def confusion(truth: list[int], predicted: list[int]) -> dict[str, float | int]:
    """Count binary classification outcomes, including undefined rates."""
    if len(truth) != len(predicted) or not truth:
        raise ValueError("truth and predicted must have the same nonzero length")
    if set(truth + predicted) - {0, 1}:
        raise ValueError("labels must be zero or one")

    tp = sum(t == 1 and p == 1 for t, p in zip(truth, predicted))
    fp = sum(t == 0 and p == 1 for t, p in zip(truth, predicted))
    fn = sum(t == 1 and p == 0 for t, p in zip(truth, predicted))
    tn = sum(t == 0 and p == 0 for t, p in zip(truth, predicted))
    n = tp + fp + fn + tn
    return {
        "n": n,
        "accuracy": (tp + tn) / n,
        "tp": tp,
        "fp": fp,
        "fn": fn,
        "tn": tn,
        "precision": tp / (tp + fp) if tp + fp else float("nan"),
        "recall": tp / (tp + fn) if tp + fn else float("nan"),
    }


def main() -> None:
    with DATA_FILE.open(newline="", encoding="utf-8") as source:
        rows = list(DictReader(source))

    ids = [row["case_id"] for row in rows]
    if len(ids) != len(set(ids)):
        raise ValueError("each synthetic case must appear once")
    truth = [int(row["hand_label"]) for row in rows]

    for label, column in (("Frozen rules", "frozen_rule"), ("Revised rules", "revised_rule")):
        predicted = [int(row[column]) for row in rows]
        result = confusion(truth, predicted)
        print(f"{label}: {result['n']} cases")
        print(
            f"  accuracy={result['accuracy']:.1%}, FP={result['fp']}, "
            f"FN={result['fn']}, precision={result['precision']:.1%}, "
            f"recall={result['recall']:.1%}"
        )


if __name__ == "__main__":
    main()
