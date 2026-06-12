"""
Sharp in-page content images from SalsHeroImage.png.

Gallery .webp files are upscaled from 206px Facebook thumbnails — fine in the
small gallery grid, too soft when stretched across article width. Content
figures use these 560×420 crops at ~480px display (never upscaled past source).
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "Images" / "content"
OUT.mkdir(parents=True, exist_ok=True)

HERO = ROOT / "Images" / "SalsHeroImage.png"
CONTENT_SIZE = (560, 420)

# slug -> horizontal focal point on hero banner (0..1)
SLUGS = {
    "interior-painting": 0.12,
    "exterior-painting": 0.22,
    "drywall-repair-prep": 0.32,
    "trim-doors-ceilings": 0.42,
    "accent-walls": 0.52,
    "deck-fence-staining": 0.62,
    "basic-renovations": 0.72,
    "carteret-painter": 0.15,
    "perth-amboy-painter": 0.25,
    "woodbridge-painter": 0.35,
    "rahway-painter": 0.45,
    "edison-painter": 0.55,
    "linden-painter": 0.65,
    "iselin-painter": 0.75,
    "sayreville-painter": 0.85,
    "south-amboy-painter": 0.50,
    "pricing": 0.38,
    "service-guarantee": 0.68,
}


def focal_cover(im: Image.Image, size: tuple[int, int], fx: float, fy: float = 0.48) -> Image.Image:
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


hero = Image.open(HERO).convert("RGB")
for slug, fx in SLUGS.items():
    crop = focal_cover(hero, CONTENT_SIZE, fx)
    crop.save(OUT / f"{slug}.webp", "WEBP", quality=88, method=6)

print(f"Wrote {len(SLUGS)} sharp content images to {OUT}")
