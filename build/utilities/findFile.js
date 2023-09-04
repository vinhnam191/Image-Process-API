"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFileExist = void 0;
const fs_1 = __importDefault(require("fs"));
const checkFileExist = (filePath) => {
    const isExist = fs_1.default.existsSync(`${filePath}`);
    return isExist;
};
exports.checkFileExist = checkFileExist;
