import sys
from PIL import Image

src = sys.argv[1]
tag = sys.argv[2]
strips = int(sys.argv[3]) if len(sys.argv) > 3 else 4
scale = float(sys.argv[4]) if len(sys.argv) > 4 else 1.6

img = Image.open(src)
w, h = img.size
overlap = 80
strip_h = (h + overlap * (strips - 1)) // strips

for i in range(strips):
    top = max(0, i * strip_h - (overlap if i > 0 else 0))
    bottom = min(h, (i + 1) * strip_h)
    crop = img.crop((0, top, w, bottom))
    cw, ch = crop.size
    crop = crop.resize((int(cw * scale), int(ch * scale)), Image.LANCZOS)
    out = f"/tmp/crops/{tag}-strip{i + 1}.png"
    crop.save(out)
    print(out, crop.size)
