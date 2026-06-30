from PIL import Image
import os

logo_path = 'public/logo.png'
if not os.path.exists(logo_path):
    print("Logo path does not exist")
    exit(1)

img = Image.open(logo_path).convert("RGBA")
pixels = img.load()

width, height = img.size

# Replace near-white pixels with transparent
# Threshold: 240–255 on R,G,B = white/off-white background
THRESHOLD = 240

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if r >= THRESHOLD and g >= THRESHOLD and b >= THRESHOLD:
            pixels[x, y] = (r, g, b, 0)  # set alpha to 0

# Crop away remaining transparent margins (empty borders)
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

img.save('public/logo.png', "PNG")
img.save('src/app/icon.png', "PNG")
print("Done — white background removed and margins cropped!")
