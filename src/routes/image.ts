import express, { Request, Response } from 'express';
import resize from '../utilities/resize';
import path from 'path';

const image = express.Router();
const imagePath = path.resolve('./src/images');

image.get('/image', async (req: Request, res: Response, next: Function) => {
  const fileName = req.query.fileName;

  const width = req.query.width ? req.query.width : 300;
  const height = req.query.height ? req.query.height : 300;
  const filePath_Full = path.resolve(
    `${imagePath}/full/${fileName}-${width}-${height}.png`,
  );

  if (!fileName) {
    next('Please intput the fileName or fileName is incorrect');
  } else if (isNaN(Number(width)) || isNaN(Number(height))) {
    // check if user input inccorect type
    next('Please input width or height of the image as a number');
  } else if (Number(width) <= 0 || Number(height) <= 0) {
    next('Please input a positive number for width or height');
  } else if (fileName && !isNaN(Number(width)) && !isNaN(Number(height))) {
    const resizedImage = await resize(
      fileName as string,
      width as number,
      height as number,
    );

    res.send(resizedImage);
  }

  // if (req.query.filename) {
  //   const filename = req.query.filename;
  //   const width = req.query.width;
  //   const heigth = req.query.heigth;
  //   resize(
  //     `src/images/full/${filename}.jpg`,
  //     Number(width),
  //     Number(heigth),
  //   ).pipe(res);
  // } else {
  //   res.send('Image not found! Please try again!');
  // }
});

export default image;
