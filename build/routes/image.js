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
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("../utilities/resize"));
const path_1 = __importDefault(require("path"));
const findFile_1 = require("../utilities/findFile");
const index_common_1 = require("../index.common");
const image = express_1.default.Router();
image.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const fileName = req.query.filename;
    const filePath_Full = path_1.default.resolve(`${index_common_1.imagePath}/full/${fileName}.jpg`);
    const isFileFullExisted = (0, findFile_1.checkFileExist)(filePath_Full);
    const width = req.query.width ? +req.query.width : 300;
    const height = req.query.height ? +req.query.height : 300;
    if (!fileName || !isFileFullExisted) {
        next('Please intput the fileName or fileName is not existed');
    }
    else if (isNaN(Number(width)) || isNaN(Number(height))) {
        // check if user input inccorect type
        next('Please input width or height of the image as a number');
    }
    else if (Number(width) <= 0 || Number(height) <= 0) {
        next('Please input a positive number for width or height');
    }
    else if (fileName && !isNaN(Number(width)) && !isNaN(Number(height))) {
        const image = yield (0, resize_1.default)(fileName, width, height);
        res.sendFile(image);
    }
}));
exports.default = image;
