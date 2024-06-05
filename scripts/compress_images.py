"""Helper script to compress images."""
import os
from PIL import Image

for dirpath, dirnames, filenames in os.walk("./source/assets/images"):
   for filename in filenames:
      if filename.endswith(".png"):
        full_path = os.path.join(dirpath, filename)
        original_size = os.path.getsize(full_path)
        im = Image.open(full_path)
        im.save(full_path, quality=50, optimize=True)
        print(f"{full_path}: {original_size} -> { os.path.getsize(full_path)}")
