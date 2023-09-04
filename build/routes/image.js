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
const fs_1 = require("fs");
const image = express_1.default.Router();
const writeData = (filename) => __awaiter(void 0, void 0, void 0, function* () {
    const myFile = yield fs_1.promises.writeFile(`${filename}.jpg`, 'add text');
});
const readData = (filename) => __awaiter(void 0, void 0, void 0, function* () {
    const myFile = yield fs_1.promises.readFile(`./src/images/full/${filename}.jpg`, 'utf-8');
    return myFile;
});
image.get('/', (req, res) => {
    //   res.send('Image is being process');
    res.write('<html><body><img width="200px" src="src/images/full/arsenal.jpg');
    res.end('"/></body></html>');
});
exports.default = image;
