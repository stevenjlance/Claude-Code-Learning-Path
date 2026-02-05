#!/usr/bin/env node

/**
 * Script to sync content from Context folder to public folder.
 * This handles:
 * 1. Copying markdown files
 * 2. Extracting base64 images and saving as files
 * 3. Updating markdown references to use extracted images
 *
 * Usage: node scripts/sync-content.cjs
 *
 * Folder structure expected:
 * Context/
 *   Module_1/
 *     M1.Student.md
 *     M1.Instructor.md
 *   Module_2/
 *     ...
 *   images/           <- Optional: place images here to be copied
 *
 * Output structure:
 * public/content/lesson-1/
 *   module-1-student.md
 *   module-1-instructor.md
 *   images/
 *     module-1-student-image1.png
 *     ...
 */

const fs = require('fs');
const path = require('path');

const CONTEXT_DIR = path.join(__dirname, '../Context');
const OUTPUT_DIR = path.join(__dirname, '../public/content/lesson-1');
const IMAGES_DIR = path.join(OUTPUT_DIR, 'images');

// Ensure directories exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Map module folders to module numbers
const moduleMapping = {
  'Module_1': 1,
  'Module_2': 2,
  'Module_3': 3,
  'Module_4': 4,
};

// Process each module folder
Object.entries(moduleMapping).forEach(([folderName, moduleNum]) => {
  const moduleFolder = path.join(CONTEXT_DIR, folderName);

  if (!fs.existsSync(moduleFolder)) {
    console.log(`Skipping ${folderName}: folder not found`);
    return;
  }

  // Find student and instructor files
  const files = fs.readdirSync(moduleFolder);

  files.forEach(file => {
    if (!file.endsWith('.md')) return;

    const isInstructor = file.toLowerCase().includes('instructor');
    const isStudent = file.toLowerCase().includes('student');

    if (!isInstructor && !isStudent) return;

    const viewType = isInstructor ? 'instructor' : 'student';
    const outputFileName = `module-${moduleNum}-${viewType}.md`;
    const outputPath = path.join(OUTPUT_DIR, outputFileName);

    // Read content
    let content = fs.readFileSync(path.join(moduleFolder, file), 'utf8');

    // Extract base64 images
    const imageDefRegex = /^\[image(\d+)\]:\s*<data:image\/([\w+]+);base64,([^>]+)>/gm;
    let match;
    const replacements = [];

    while ((match = imageDefRegex.exec(content)) !== null) {
      const imageNum = match[1];
      const imageType = match[2].replace('+xml', '');
      const base64Data = match[3];

      let ext = imageType;
      if (imageType === 'jpeg') ext = 'jpg';
      if (imageType === 'svg') ext = 'svg';

      const imageFileName = `module-${moduleNum}-${viewType}-image${imageNum}.${ext}`;
      const imagePath = path.join(IMAGES_DIR, imageFileName);
      const relativeImagePath = `/content/lesson-1/images/${imageFileName}`;

      // Save image
      const imageBuffer = Buffer.from(base64Data, 'base64');
      fs.writeFileSync(imagePath, imageBuffer);

      console.log(`  Extracted: ${imageFileName} (${(imageBuffer.length / 1024).toFixed(1)} KB)`);

      replacements.push({
        original: match[0],
        replacement: `[image${imageNum}]: ${relativeImagePath}`
      });
    }

    // Apply replacements
    replacements.forEach(({ original, replacement }) => {
      content = content.replace(original, replacement);
    });

    // Write output
    fs.writeFileSync(outputPath, content);
    console.log(`Processed: ${file} -> ${outputFileName} (${replacements.length} images extracted)`);
  });
});

// Copy any manual images from Context/images folder
const contextImagesDir = path.join(CONTEXT_DIR, 'images');
if (fs.existsSync(contextImagesDir)) {
  const images = fs.readdirSync(contextImagesDir);
  images.forEach(img => {
    if (img.startsWith('.')) return;
    const src = path.join(contextImagesDir, img);
    const dest = path.join(IMAGES_DIR, img);
    fs.copyFileSync(src, dest);
    console.log(`Copied image: ${img}`);
  });
}

console.log('\nSync complete!');
console.log('Output directory:', OUTPUT_DIR);
