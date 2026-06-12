"""
Build sharp hero / parallax crops from high-res marketing assets.

Gallery .jpg files are only 206x206 Facebook thumbnails; gallery .webp files are
4x upscales of those — fine in the small gallery grid, too soft for full-height heroes.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "Images" / "hero"
OUT.mkdir(parents=True, exist_ok=True)

HERO = ROOT / "Images" / "SalsHeroImage.png"
HERO_MOBILE = ROOT / "Images" / "SalsHeroImage-mobile.jpg"

# Tall column crops — 900px wide stays sharp on ultrawide up to ~3600px viewport.
PANEL_SIZE = (900, 1013)
MOBILE_PANEL_SIZE = (900, 1350)


def focal_cover(im: Image.Image, size: tuple[int, int], fx: float, fy: float = 0.5) -> Image.Image:
    """Cover-crop *im* to *size* with focal point (fx, fy) in 0..1."""
    target_w, target_h = size
    scale = max(target_w / im.width, target_h / im.height)
    resized = im.resize(
        (round(im.width * scale), round(im.height * scale)),
        Image.Resampling.LANCZOS,
    )
    cx = int(resized.width * fx)
    cy = int(resized.height * fy)
    left = max(0, min(cx - target_w // 2, resized.width - target_w))
    top = max(0, min(cy - target_h // 2, resized.height - target_h))
    return resized.crop((left, top, left + target_w, top + target_h))


def quarter_slices(im: Image.Image, num_cols: int = 4) -> list[Image.Image]:
    """Split banner into equal non-overlapping vertical strips (no tiling at wide widths)."""
    width, height = im.size
    slice_w = width // num_cols
    slices: list[Image.Image] = []
    for index in range(num_cols):
        left = index * slice_w
        right = width if index == num_cols - 1 else left + slice_w
        slices.append(im.crop((left, 0, right, height)))
    return slices


def save_webp(path: Path, im: Image.Image, quality: int = 88) -> None:
    im.save(path, "WEBP", quality=quality, method=6)


hero = Image.open(HERO).convert("RGB")

# Homepage four sliding columns — equal quarters so panels stitch without duplicating Sal.
home_panel_names = [
    "panel-left.webp",
    "panel-top.webp",
    "panel-bottom.webp",
    "panel-right.webp",
]
for name, quarter in zip(home_panel_names, quarter_slices(hero)):
    save_webp(OUT / name, focal_cover(quarter, PANEL_SIZE, 0.5, 0.48))

mobile = Image.open(HERO_MOBILE).convert("RGB")
save_webp(OUT / "panel-mobile.webp", focal_cover(mobile, MOBILE_PANEL_SIZE, 0.50, 0.42))

print(f"Wrote sharp hero assets to {OUT} (source: {HERO.name})")
