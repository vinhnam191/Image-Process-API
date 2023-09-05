import express, { Request, Response } from 'express';
import resize from '../utilities/resize';
import path from 'path';
import { checkFileExist } from '../utilities/findFile';
import { imagePath } from '../index.common';

const image = express.Router();

image.get('/', async (req: Request, res: Response, next: Function) => {
  const fileName = req.query.filename as string;
  const filePath_Full = path.resolve(`${imagePath}/full/${fileName}.jpg`);
  const isFileFullExisted = checkFileExist(filePath_Full);

  const width = req.query.width ? +req.query.width : 300;
  const height = req.query.height ? +req.query.height : 300;

  if (!fileName || !isFileFullExisted) {
    next('Please intput the fileName or fileName is not existed');
  } else if (isNaN(+width) || isNaN(+height)) {
    // check if user input inccorect type
    next('Please input width or height of the image as a number');
  } else if (+width <= 0 || +height <= 0) {
    next('Please input a positive number for width or height');
  } else if (fileName && !isNaN(+width) && !isNaN(+height)) {
    const image = await resize(fileName, width, height);

    res.sendFile(image);
  }
});

export default image;
