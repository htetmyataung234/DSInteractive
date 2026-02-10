import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def is_hidden(path: Path) -> bool:
    return any(part.startswith('.') for part in path.parts if part not in ('.', '..'))


def main() -> None:
    storyline = []
    h5p = []
    index = []

    for root, dirs, files in os.walk(ROOT):
        root_path = Path(root)
        rel_root = root_path.relative_to(ROOT)

        if is_hidden(rel_root):
            continue

        if 'story.html' in files:
            storyline.append(str((rel_root / 'story.html').as_posix()))

        if 'index.html' in files:
            index.append(str((rel_root / 'index.html').as_posix()))

        if 'h5p.json' in files:
            h5p.append(f"h5p.html?path={rel_root.as_posix()}")

    storyline = sorted(set(storyline))
    h5p = sorted(set(h5p))
    index = sorted(set(index))

    links_path = ROOT / 'links.json'
    links_path.write_text(
        json.dumps({"storyline": storyline, "h5p": h5p, "index": index}, ensure_ascii=False, indent=2),
        encoding='utf-8',
    )


if __name__ == "__main__":
    main()
