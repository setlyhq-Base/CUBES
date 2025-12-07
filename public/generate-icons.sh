#!/bin/bash
# Script to generate PWA icons from the CUBES logo
# This script uses ImageMagick to create all required icon sizes

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Please install it first:"
    echo "  macOS: brew install imagemagick"
    echo "  Ubuntu: sudo apt-get install imagemagick"
    exit 1
fi

# Source logo path
LOGO="../images/CUBES_logo.png"

# Check if logo exists
if [ ! -f "$LOGO" ]; then
    echo "Error: CUBES_logo.png not found in public/images/"
    exit 1
fi

# Create icons directory if it doesn't exist
mkdir -p icons

# Icon sizes needed for PWA
SIZES=(72 96 128 144 152 180 192 384 512)

echo "Generating PWA icons from CUBES logo..."

for size in "${SIZES[@]}"; do
    echo "  Creating ${size}x${size} icon..."
    convert "$LOGO" -resize ${size}x${size} -background white -alpha remove -alpha off "icons/icon-${size}x${size}.png"
done

echo "✓ All PWA icons generated successfully!"
echo ""
echo "Icons created:"
ls -lh icons/

echo ""
echo "Note: These icons use the CUBES logo with white background."
echo "You can customize them further with design tools if needed."
