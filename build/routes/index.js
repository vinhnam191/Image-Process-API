"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_1 = __importDefault(require("./image"));
const api = express_1.default.Router();
api.get('/', (req, res) => {
    res.send('Welcome to Image Processing API. Please add /image?filename=""&width=""&height="" to path of url to resize an image ');
});
api.use('/images', image_1.default);
exports.default = api;
