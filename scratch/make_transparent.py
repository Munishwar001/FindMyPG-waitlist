from PIL import Image
import os

logo_path = 'public/logo.png'
if not os.path.exists(logo_path):
    print("Logo path does not exist")
    exit(1)

img = Image.open(logo_path)
img = img.convert("RGBA")

datas = img.getdata()

newData = []
for item in datas:
    # Check if pixel is white or very close to white
    # Using threshold 240 to catch compression artifacts
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save(logo_path, "PNG")
print("Successfully processed logo.png to have transparent background!")
