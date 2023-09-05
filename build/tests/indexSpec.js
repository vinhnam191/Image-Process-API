"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findFile_1 = require("../utilities/findFile");
const falsePath = 'src/images/full/false.jpg';
const truePath = 'src/images/full/hello-world.jpg';
describe('Utilities test', () => {
    it('Should return false if image not existed', () => {
        expect((0, findFile_1.checkFileExist)(falsePath)).toEqual(false);
    });
    it('Should return true if image is existed', () => {
        expect((0, findFile_1.checkFileExist)(truePath)).toEqual(true);
    });
});
