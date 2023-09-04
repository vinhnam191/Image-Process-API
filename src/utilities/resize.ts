import fs from 'fs';
import sharp from 'sharp';

const resize = (path: string, width?: number, height?: number) => {
  const readStream = fs.createReadStream(path);
  let transform = sharp();

  if (width || height) {
    transform = transform.resize(width, height);
  }

  return readStream.pipe(transform);
};

export default resize;
