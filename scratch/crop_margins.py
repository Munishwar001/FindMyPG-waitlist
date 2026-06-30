from PIL import Image
import os

logo_path = 'public/logo.png'
if not os.path.exists(logo_path):
    print("Logo path does not exist")
    exit(1)

img = Image.open(logo_path)
# Find the bounding box of the non-zero (non-transparent) areas of the image
bbox = img.getbbox()

if bbox:
    # Crop the image to the bounding box of the actual illustration
    cropped_img = img.crop(bbox)
    
    # Save back to public and app icon directories
    cropped_img.save('public/logo.png', "PNG")
    cropped_img.save('src/app/icon.png', "PNG")
    print("Successfully cropped transparent margins and expanded logo bounding box!")
else:
    print("Could not find content bounding box to crop.")
