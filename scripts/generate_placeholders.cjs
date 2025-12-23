const fs = require('fs');
const path = require('path');

const mappingPath = path.join(__dirname, '../src/data/image_mapping.md');
const imageDir = path.join(__dirname, '../public/images/destinations');

if (!fs.existsSync(mappingPath)) {
    console.error("Mapping file not found!");
    process.exit(1);
}

const content = fs.readFileSync(mappingPath, 'utf8');
const lines = content.split('\n');

function getRandomGradient() {
    const colors = [
        ['#4158D0', '#C850C0', '#FFCC70'],
        ['#0093E9', '#80D0C7'],
        ['#8EC5FC', '#E0C3FC'],
        ['#D9AFD9', '#97D9E1'],
        ['#FBAB7E', '#F7CE68'],
        ['#85FFBD', '#FFFB7D']
    ];
    const picked = colors[Math.floor(Math.random() * colors.length)];
    const stops = picked.map((c, i) => `<stop offset="${(i / (picked.length - 1)) * 100}%" style="stop-color:${c};stop-opacity:1" />`).join('');
    return stops;
}

function generateSVG(text) {
    const stops = getRandomGradient();
    // Escape text for XML
    const safeText = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      ${stops}
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
  <rect width="100%" height="100%" fill="rgba(0,0,0,0.2)" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="32" fill="white" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.5);">${safeText}</text>
</svg>`;
}

let count = 0;

lines.forEach(line => {
    if (!line.startsWith('|') || line.includes('Original URL') || line.includes('---|')) return;

    const parts = line.split('|').map(s => s.trim());
    if (parts.length < 6) return;

    let filename = parts[4].replace(/`/g, '');
    let placeName = parts[1];
    let entityName = parts[2];

    // Use entity name for text, but if main image, use Place Name
    let displayText = entityName === 'main' ? placeName : entityName;

    // Generate SVG content. 
    // We save as .jpg filename but content is SVG. Browsers *might* complain or not show it if served with wrong mime type or extension mismatch.
    // Ideally we rename to .svg in the mapping AND code.
    // BUT changing the code references is risky/complex right now.
    // Most modern browsers will sniff the content or fail.
    // Actually, serving SVG with .jpg extension usually works if the img tag doesn't enforce strict type, OR fails.
    // SAFEST: Generate a real JPEG? I can't easily without a library like sharp.
    // ALTERNATIVE: Rename the references in data/destinations.js to .svg.

    // Let's TRY renaming the file extension to .svg in valid code.
    // 1. Check if file is small (<5KB).
    const filepath = path.join(imageDir, filename);
    let isSmall = false;
    try {
        const stats = fs.statSync(filepath);
        if (stats.size < 5000) isSmall = true;
    } catch (e) { isSmall = true; } // File doesn't exist

    if (isSmall) {
        // Change filename extension to .svg
        const svgFilename = filename.replace(/\.(jpg|png|jpeg)$/, '.svg');
        const svgPath = path.join(imageDir, svgFilename);

        fs.writeFileSync(svgPath, generateSVG(displayText));
        console.log(`Generated SVG for ${displayText} -> ${svgFilename}`);

        // We need to update destinations.js to point to this new .svg file instead of the .jpg
        // We can do a global find-replace in destinations.js content.
        count++;
    }
});

console.log(`Generated ${count} placeholders.`);

// Now we need a second pass to update destinations.js
if (count > 0) {
    const destPath = path.join(__dirname, '../src/data/destinations.js');
    let destContent = fs.readFileSync(destPath, 'utf8');

    lines.forEach(line => {
        if (!line.startsWith('|') || line.includes('Original URL') || line.includes('---|')) return;
        const parts = line.split('|').map(s => s.trim());
        if (parts.length < 6) return;

        let filename = parts[4].replace(/`/g, '');
        // Check if we generated an SVG for this
        const svgFilename = filename.replace(/\.(jpg|png|jpeg)$/, '.svg');
        const svgPath = path.join(imageDir, svgFilename);

        if (fs.existsSync(svgPath)) {
            // Replace in file
            // We search for the old filename in the URL path
            // e.g. /images/destinations/filename.jpg
            destContent = destContent.split(filename).join(svgFilename);
        }
    });

    fs.writeFileSync(destPath, destContent);
    console.log('Updated destinations.js with new SVG paths.');
}
