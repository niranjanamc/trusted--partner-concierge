const fs = require('fs');
const path = require('path');
const https = require('https');

const mappingPath = path.join(__dirname, '../src/data/image_mapping.md');
const imageDir = path.join(__dirname, '../public/images/destinations');

if (!fs.existsSync(mappingPath)) {
    console.error("Mapping file not found!");
    process.exit(1);
}

const content = fs.readFileSync(mappingPath, 'utf8');
const lines = content.split('\n');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const request = https.get(url, {
            headers: {
                // Slightly randomized UA or just standard one
                'User-Agent': 'TrustedPartnerConcierge/1.0 (contact@trustedpartner.com)',
                'Accept': 'image/avif,image/webp,*/*'
            }
        }, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                file.close();
                downloadFile(response.headers.location, dest).then(resolve).catch(reject);
                return;
            }

            if (response.statusCode !== 200) {
                file.close();
                reject(new Error(`Status Code: ${response.statusCode}`));
                return;
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}

(async () => {
    let successCount = 0;
    let skipCount = 0;
    let failCount = 0;

    for (const line of lines) {
        if (!line.startsWith('|') || line.includes('Original URL') || line.includes('---|')) continue;

        const parts = line.split('|').map(s => s.trim());
        if (parts.length < 6) continue;

        let filename = parts[4].replace(/`/g, '');
        let urlPart = parts[5];

        const urlMatch = urlPart.match(/\((.*?)\)/);
        if (!urlMatch) continue;

        const url = urlMatch[1];
        const filepath = path.join(imageDir, filename);

        // Check if file exists and is good size
        if (fs.existsSync(filepath)) {
            const stats = fs.statSync(filepath);
            if (stats.size > 5000) {
                // console.log(`Skipping ${filename} (already valid)`);
                skipCount++;
                continue;
            }
        }

        console.log(`Downloading ${filename}...`);

        try {
            await downloadFile(url, filepath);

            const stats = fs.statSync(filepath);
            if (stats.size < 5000) {
                console.warn(`  WARNING: Small file (${stats.size} bytes).`);
                failCount++;
            } else {
                console.log(`  Saved (${Math.round(stats.size / 1024)} KB)`);
                successCount++;
                // Sleep only after success to throttle
                await sleep(1500);
            }
        } catch (e) {
            console.error(`  FAILED: ${e.message}`);
            failCount++;
            await sleep(1000); // Sleep even on error
        }
    }

    console.log(`\nDownload complete. New Success: ${successCount}, Skipped: ${skipCount}, Failures: ${failCount}`);
})();
