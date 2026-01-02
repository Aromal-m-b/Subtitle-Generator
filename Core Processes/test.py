import os
import sys


# Get the path to your 'site-packages' folder where the DLLs live
def get_site_packages_path():
    for path in sys.path:
        if 'site-packages' in path and 'Lib' in path:
            return path
    return None


site_packages = get_site_packages_path()

if site_packages:
    # Construct the correct paths to the bin folders
    cudnn_bin = os.path.join(site_packages, 'nvidia', 'cudnn', 'bin')
    cublas_bin = os.path.join(site_packages, 'nvidia', 'cublas', 'bin')

    # Add them to the DLL search path
    if os.path.exists(cudnn_bin):
        os.add_dll_directory(cudnn_bin)
        print(f"Added to DLL Path: {cudnn_bin}")

    if os.path.exists(cublas_bin):
        os.add_dll_directory(cublas_bin)
        print(f"Added to DLL Path: {cublas_bin}")
else:
    print("Error: Could not find site-packages directory.")

# NOW you can import faster_whisper
from faster_whisper import WhisperModel