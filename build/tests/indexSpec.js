"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findFile_1 = require("../utilities/findFile");
const __1 = __importDefault(require(".."));
const supertest_1 = __importDefault(require("supertest"));
const path_1 = __importDefault(require("path"));
const resize_1 = __importDefault(require("../utilities/resize"));
const request = (0, supertest_1.default)(__1.default);
const falsePath = 'src/images/full/false.jpg';
const truePath = 'src/images/full/hello-world.jpg';
describe('Utilities test', () => {
    it('1. Should return false if image not existed', () => {
        expect((0, findFile_1.checkFileExist)(falsePath)).toEqual(false);
    });
    it('2. Should return true if image is existed', () => {
        expect((0, findFile_1.checkFileExist)(truePath)).toEqual(true);
    });
});
describe('Endpoint response test', () => {
    it('3. should get the / endpoint when user not enter path but the code still run', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        expect(response.statusCode).toEqual(200);
    }));
    it('4. should get the /api endpoint when user not enter path but the code still run', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api');
        expect(response.statusCode).toEqual(200);
    }));
    it('5. should get the /api/images endpoint when user not enter path but the code still run', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images');
        expect(response.statusCode).toEqual(200);
    }));
    it('6. should get error /api/image endpoint when user not enter filename', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/image');
        expect(response.statusCode).not.toEqual(200);
    }));
});
describe('Image Processing Test', () => {
    it('7. Resize function should return thumb file if the image is existed ', () => __awaiter(void 0, void 0, void 0, function* () {
        const filePath_Thumb = path_1.default.resolve(`src/images/thumb/hello-world-200-200.jpg`);
        expect(yield (0, resize_1.default)('hello-world', 200, 200)).toEqual(filePath_Thumb);
    }));
});
