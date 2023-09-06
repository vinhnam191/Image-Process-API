import { checkFileExist } from '../utilities/findFile';
import app from '..';
import supertest from 'supertest';
import path from 'path';
import resize from '../utilities/resize';

const request = supertest(app);

const falsePath = 'src/images/full/false.jpg';
const truePath = 'src/images/full/hello-world.jpg';

describe('Utilities test', () => {
  it('1. Should return false if image not existed', () => {
    expect(checkFileExist(falsePath)).toEqual(false);
  });

  it('2. Should return true if image is existed', () => {
    expect(checkFileExist(truePath)).toEqual(true);
  });
});

describe('Endpoint response test', () => {
  it('3. should get the / endpoint when user not enter path but the code still run', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toEqual(200);
  });

  it('4. should get the /api endpoint when user not enter path but the code still run', async () => {
    const response = await request.get('/api');
    expect(response.statusCode).toEqual(200);
  });

  it('5. should get the /api/images endpoint when user not enter path but the code still run', async () => {
    const response = await request.get('/api/images');
    expect(response.statusCode).toEqual(200);
  });

  it('6. should get error /api/image endpoint when user not enter filename', async () => {
    const response = await request.get('/api/image');
    expect(response.statusCode).not.toEqual(200);
  });
});

describe('Image Processing Test', () => {
  it('7. Resize function should return thumb file if the image is existed ', async () => {
    const filePath_Thumb = path.resolve(
      `src/images/thumb/hello-world-200-200.jpg`,
    );
    expect(await resize('hello-world', 200, 200)).toEqual(filePath_Thumb);
  });
});
