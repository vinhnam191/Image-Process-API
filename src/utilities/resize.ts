import fs from 'fs';
import sharp from 'sharp';
import path from 'path';
import { checkFileExist } from './findFile';
import { imagePath } from '../index.common';

const resize = async (
  fileName: string,
  width: number,
  height: number,
): Promise<string> => {
  const filePath_Full = path.resolve(`${imagePath}/full/${fileName}.jpg`);

  const thumbFile = path.resolve(
    `${imagePath}/thumb/${fileName}-${width}-${height}.jpg`,
  );
  const isImageExisted = checkFileExist(thumbFile);

  if (!isImageExisted) {
    const filePath_Thumb = path.resolve(
      `${imagePath}/thumb/${fileName}-${width}-${height}.jpg`,
    );
    await sharp(filePath_Full).resize(width, height).toFile(filePath_Thumb);
    const readStream = fs.createReadStream(filePath_Thumb);

    return readStream.path as string;
  } else {
    return thumbFile;
  }
};

export default resize;
