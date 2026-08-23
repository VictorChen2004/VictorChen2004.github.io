#!/usr/bin/env python3
"""Create a public CV copy that removes CGPA while retaining Major GPA."""

from __future__ import annotations

import argparse
from pathlib import Path

from docx import Document


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("input_docx", type=Path)
    parser.add_argument("output_docx", type=Path)
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    document = Document(args.input_docx)
    replacement_count = 0

    for paragraph in document.paragraphs:
        if not paragraph.text.startswith("Cumulative GPA:"):
            continue
        if "Major GPA:" not in paragraph.text:
            raise ValueError("The GPA paragraph does not contain Major GPA.")

        runs = list(paragraph.runs)
        major_run_index = next(
            index for index, run in enumerate(runs) if "Major GPA:" in run.text
        )

        for run in runs[:major_run_index]:
            paragraph._p.remove(run._r)

        major_run = runs[major_run_index]
        major_run.text = major_run.text.replace(", Major GPA:", "Major GPA:")
        replacement_count += 1

    if replacement_count != 1:
        raise ValueError(
            f"Expected exactly one CGPA paragraph, found {replacement_count}."
        )

    args.output_docx.parent.mkdir(parents=True, exist_ok=True)
    document.save(args.output_docx)


if __name__ == "__main__":
    main()
