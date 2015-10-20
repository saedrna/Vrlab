__author__ = 'Han Hu'
import os
import os.path
from PIL import Image
dir_high = 'D:\HUHan\Web\QingZhu\img\gallery\high'
dir_thumbnail = 'D:\HUHan\Web\QingZhu\img\gallery\\thumbnail'
dir_low = 'D:\HUHan\Web\QingZhu\img\gallery\low'

for parent, dirnames, filenames in os.walk(dir_high):
    for filename in filenames:
        fullpath_high = os.path.join(parent, filename);
        fullpath_low = os.path.join(dir_low, filename);
        fullpath_thumbnail = os.path.join(dir_thumbnail, filename);
        if fullpath_high.split('.')[-1].lower() == 'jpg':
            img = Image.open(fullpath_high)

            if img.size[0] > 1024 or img.size[1] > 1024:
                newWidth = 1024
                newHeight = float(1024) / img.size[0] * img.size[1]
                img.thumbnail((newWidth, newHeight), Image.ANTIALIAS)

            img.save(fullpath_low)

            if img.size[0] > 256 or img.size[1] > 256:
                newWidth = 256
                newHeight = float(256) / img.size[0] * img.size[1]
                img.thumbnail((newWidth, newHeight), Image.ANTIALIAS)

            img.save(fullpath_thumbnail)

