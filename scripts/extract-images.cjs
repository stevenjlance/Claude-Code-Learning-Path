#!/usr/bin/env node

/**
 * Script to extract base64 images from markdown files and save them as separate files.
 * Updates the markdown to reference the extracted images.
 *
 * Usage: node scripts/extract-images.js
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../public/content/lesson-1');
const IMAGES_DIR = path.join(CONTENT_DIR, 'images');

// Ensure images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Get all markdown files
const mdFiles = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));

mdFiles.forEach(mdFile => {
  const filePath = path.join(CONTENT_DIR, mdFile);
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract module name for unique image naming
  const moduleName = mdFile.replace('.md', '');

  // Regex to match reference-style image definitions with base64 data
  // Format: [imageN]: <data:image/TYPE;base64,DATA>
  const imageDefRegex = /^\[image(\d+)\]:\s*<data:image\/([\w+]+);base64,([^>]+)>/gm;

  let match;
  const replacements = [];

  while ((match = imageDefRegex.exec(content)) !== null) {
    const imageNum = match[1];
    const imageType = match[2].replace('+xml', ''); // Handle svg+xml
    const base64Data = match[3];

    // Determine file extension
    let ext = imageType;
    if (imageType === 'jpeg') ext = 'jpg';
    if (imageType === 'svg') ext = 'svg';

    const imageFileName = `${moduleName}-image${imageNum}.${ext}`;
    const imagePath = path.join(IMAGES_DIR, imageFileName);
    const relativeImagePath = `/content/lesson-1/images/${imageFileName}`;

    // Save the image file
    const imageBuffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(imagePath, imageBuffer);

    console.log(`  Extracted: ${imageFileName} (${(imageBuffer.length / 1024).toFixed(1)} KB)`);

    // Store replacement info
    replacements.push({
      original: match[0],
      replacement: `[image${imageNum}]: ${relativeImagePath}`
    });
  }

  // Apply replacements
  replacements.forEach(({ original, replacement }) => {
    content = content.replace(original, replacement);
  });

  // Save updated markdown
  fs.writeFileSync(filePath, content);

  if (replacements.length > 0) {
    console.log(`Processed ${mdFile}: extracted ${replacements.length} images`);
  } else {
    console.log(`Processed ${mdFile}: no embedded images found`);
  }
});

console.log('\nDone! Images extracted to:', IMAGES_DIR);
