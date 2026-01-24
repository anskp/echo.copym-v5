
import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logosDir = path.join(__dirname, 'src', 'assets', 'logos');

if (!fs.existsSync(logosDir)) {
    fs.mkdirSync(logosDir, { recursive: true });
}

const targets = [
    { name: 'louvre.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_logo.svg/512px-Louvre_Museum_logo.svg.png', page: 'https://commons.wikimedia.org/wiki/File:Louvre_Museum_logo.svg' },
    { name: 'emaar.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Emaar_Properties_Logo.svg/512px-Emaar_Properties_Logo.svg.png', page: 'https://commons.wikimedia.org/wiki/File:Emaar_Properties_Logo.svg' },
    { name: 'barrick_gold.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Barrick_Gold_logo.svg/512px-Barrick_Gold_logo.svg.png', page: 'https://commons.wikimedia.org/wiki/File:Barrick_Gold_logo.svg' },
    { name: 'verra.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Verra_logo.svg/512px-Verra_logo.svg.png', page: 'https://commons.wikimedia.org/wiki/File:Verra_logo.svg' }
];

async function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else {
                fs.unlink(dest, () => { }); // Delete if failed
                reject(`Status ${response.statusCode}`);
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err.message);
        });
    });
}

async function scrapeAndDownload(pageUrl, dest) {
    return new Promise((resolve, reject) => {
        https.get(pageUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
            let data = '';
            response.on('data', (chunk) => data += chunk);
            response.on('end', async () => {
                // Regex to find the 500-1000px PNG thumb
                const regex = /src="([^"]*upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/[^"]*\/[^"]*\.svg\/[^"]*512px-[^"]*\.png)"/i;
                const match = data.match(regex);
                if (match) {
                    const imgUrl = match[1];
                    // Handle relative protocol //
                    const finalUrl = imgUrl.startsWith('//') ? 'https:' + imgUrl : imgUrl;
                    console.log(`Found scraped URL: ${finalUrl}`);
                    try {
                        await download(finalUrl, dest);
                        resolve();
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject('No image URL found in page');
                }
            });
        }).on('error', (err) => reject(err));
    });
}

async function main() {
    for (const target of targets) {
        const dest = path.join(logosDir, target.name);
        console.log(`Processing ${target.name}...`);

        try {
            console.log(`Trying direct: ${target.url}`);
            await download(target.url, dest);
            console.log(`Success: ${target.name}`);
        } catch (err) {
            console.log(`Direct failed (${err}). Scraping page: ${target.page}`);
            try {
                await scrapeAndDownload(target.page, dest);
                console.log(`Success (scraped): ${target.name}`);
            } catch (scrapeErr) {
                console.error(`Failed to download ${target.name}: ${scrapeErr}`);
            }
        }
    }
}

main();
