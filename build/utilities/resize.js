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
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const findFile_1 = require("./findFile");
const index_common_1 = require("../index.common");
const resize = (fileName, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const filePath_Full = path_1.default.resolve(`${index_common_1.imagePath}/full/${fileName}.jpg`);
    const thumbFile = path_1.default.resolve(`${index_common_1.imagePath}/thumb/${fileName}-${width}-${height}.jpg`);
    const isImageExisted = (0, findFile_1.checkFileExist)(thumbFile);
    if (!isImageExisted) {
        const filePath_Thumb = path_1.default.resolve(`${index_common_1.imagePath}/thumb/${fileName}-${width}-${height}.jpg`);
        yield (0, sharp_1.default)(filePath_Full).resize(width, height).toFile(filePath_Thumb);
        const readStream = fs_1.default.createReadStream(filePath_Thumb);
        return readStream.path;
    }
    else {
        return thumbFile;
    }
});
exports.default = resize;
