import fs from 'fs';

export const checkFileExist = (filePath: string): boolean => {
  const isExist: boolean = fs.existsSync(`${filePath}`);

  return isExist;
};
