"""Landscape parallax crops from best gallery shots (824px native — no upscale)."""
from pathlib import Path
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
GALLERY = ROOT / "Images" / "gallery"
OUT = GALLERY / "parallax"
OUT.mkdir(parents=True, exist_ok=True)

# Largest / most relevant gallery files for full-bleed bands behind dark overlays.
PARALLAX = [
    # Proof-of-work band — finished interior
    ("work.webp", 13, 0.5, 0.48),
    # Process band — kitchen / interior repaint
    ("process.webp", 8, 0.5, 0.52),
    # Route / CTA band — exterior siding
    ("route.webp", 3, 0.5, 0.45),
]

PARALLAX_SIZE = (824, 548)  # 3:2 at gallery native width


def focal_cover(im: Image.Image, size: tuple[int, int], fx: float, fy: float) -> Image.Image:
    tw, th = size
    scale = max(tw / im.width, th / im.height)
    resized = im.resize(
        (round(im.width * scale), round(im.height * scale)),
        Image.Resampling.LANCZOS,
    )
    cx = int(resized.width * fx)
    cy = int(resized.height * fy)
    left = max(0, min(cx - tw // 2, resized.width - tw))
    top = max(0, min(cy - th // 2, resized.height - th))
    return resized.crop((left, top, left + tw, top + th))


for name, num, fx, fy in PARALLAX:
    src = GALLERY / f"gallery-{num:02d}.webp"
    img = focal_cover(Image.open(src).convert("RGB"), PARALLAX_SIZE, fx, fy)
    img = img.filter(ImageFilter.GaussianBlur(radius=0.45))
    img.save(OUT / name, "WEBP", quality=86, method=6)
    print(f"  {name} <- gallery-{num:02d}.webp")

print(f"Wrote parallax gallery crops to {OUT}")
