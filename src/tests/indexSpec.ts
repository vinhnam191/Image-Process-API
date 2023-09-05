import { checkFileExist } from '../utilities/findFile';
import app from '..';
import supertest from 'supertest';

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

  it('5. should get error /api/image endpoint when user not enter filename', async () => {
    const response = await request.get('/api/image');
    expect(response.statusCode).not.toEqual(200);
  });
});
