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

# Portrait crops for ~25% hero columns; 600px wide holds up on retina without upscaling past source.
PANEL_SIZE = (600, 900)
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


def save_webp(path: Path, im: Image.Image, quality: int = 88) -> None:
    im.save(path, "WEBP", quality=quality, method=6)


hero = Image.open(HERO).convert("RGB")

# Homepage four sliding columns — different horizontal slices of the sharp banner.
home_panels = [
    ("panel-left.webp", 0.14),
    ("panel-top.webp", 0.38),
    ("panel-bottom.webp", 0.62),
    ("panel-right.webp", 0.86),
]
for name, fx in home_panels:
    save_webp(OUT / name, focal_cover(hero, PANEL_SIZE, fx, 0.48))

mobile = Image.open(HERO_MOBILE).convert("RGB")
save_webp(OUT / "panel-mobile.webp", focal_cover(mobile, MOBILE_PANEL_SIZE, 0.50, 0.42))

print(f"Wrote sharp hero assets to {OUT} (source: {HERO.name})")
