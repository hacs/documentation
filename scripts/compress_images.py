"""Helper script to compress images."""
import os
from PIL import Image

for dirpath, dirnames, filenames in os.walk("./source/assets/images"):
   for filename in filenames:
      if filename.endswith(".png"):
        full_path = os.path.join(dirpath, filename)
        print(f"Handling {full_path}...")
        im = Image.open(full_path)
        im.save(full_path, quality=95, optimize=True)
