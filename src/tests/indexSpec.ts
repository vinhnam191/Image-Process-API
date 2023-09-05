import { checkFileExist } from '../utilities/findFile';

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
