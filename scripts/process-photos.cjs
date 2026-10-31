const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processAll() {
  const srcDir = 'Photos';
  const outDir = 'public/photos';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const files = fs.readdirSync(srcDir).filter(f => {
    return /\.(jpg|jpeg|png|webp)$/i.test(f);
  });

  console.log('Found', files.length, 'images in Photos');

  const metadataList = [];

  for (let i = 0; i < files.length; i++) {
    const filename = files[i];
    const srcPath = path.join(srcDir, filename);
    const id = i + 1;
    const padId = String(id).padStart(2, '0');
    const outName = 'photo-' + padId + '.jpg';
    const thumbName = 'photo-' + padId + '-thumb.jpg';
    const outPath = path.join(outDir, outName);
    const thumbPath = path.join(outDir, thumbName);

    // Read with sharp, auto-rotate based on EXIF orientation!
    const image = sharp(srcPath).rotate();
    const meta = await image.metadata();

    // Optimize full size (max 1600 width/height, 85 quality)
    await sharp(srcPath)
      .rotate()
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(outPath);

    // Create fast-loading thumbnail for mobile grid (max 800px, 80 quality)
    await sharp(srcPath)
      .rotate()
      .resize({ width: 800, height: 800, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(thumbPath);

    const isPortrait = meta.height > meta.width;
    const aspectRatio = (meta.width / meta.height).toFixed(3);

    metadataList.push({
      id,
      originalFile: filename,
      image: '/photos/' + outName,
      thumb: '/photos/' + thumbName,
      width: meta.width,
      height: meta.height,
      aspectRatio: Number(aspectRatio),
      orientation: isPortrait ? 'portrait' : 'landscape'
    });

    console.log('Processed', outName, filename, '(' + meta.width + 'x' + meta.height + ', ' + (isPortrait ? 'portrait' : 'landscape') + ')');
  }

  fs.writeFileSync('src/photosData.json', JSON.stringify(metadataList, null, 2));
  console.log('Wrote src/photosData.json with', metadataList.length, 'photos!');
}

processAll().catch(e => console.error(e));

