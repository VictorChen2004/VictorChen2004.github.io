"""Export teaching-only ECO2011 PDFs without the private instructor introduction.

The source presentation contains a 36-page progressive personal introduction
(physical pages 2–37); its reading counterpart has seven introduction pages
(physical pages 2–8). Keep the cover and every subsequent teaching page.
"""

from __future__ import annotations

import argparse
from pathlib import Path

from pypdf import PdfReader, PdfWriter


def export(source: Path, destination: Path, introduction_end: int, expected: int) -> None:
    reader = PdfReader(source)
    if len(reader.pages) != expected:
        raise ValueError(f"Expected {expected} pages in {source}, found {len(reader.pages)}")

    writer = PdfWriter()
    writer.add_page(reader.pages[0])
    for page in reader.pages[introduction_end:]:
        writer.add_page(page)

    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as output:
        writer.write(output)

    public = PdfReader(destination)
    forbidden = ("GPA: 3.970", "Economics major rank: 1/86")
    for number, page in enumerate(public.pages, start=1):
        text = page.extract_text() or ""
        if any(phrase in text for phrase in forbidden):
            raise ValueError(f"Private academic record remains on page {number}")
    print(f"{destination}: {len(public.pages)} public teaching pages")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--presentation", type=Path, required=True)
    parser.add_argument("--reading", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    args = parser.parse_args()
    export(
        args.presentation,
        args.output_dir / "eco2011-midterm-review-presentation.pdf",
        introduction_end=37,
        expected=642,
    )
    export(
        args.reading,
        args.output_dir / "eco2011-midterm-review-reading.pdf",
        introduction_end=8,
        expected=255,
    )


if __name__ == "__main__":
    main()
