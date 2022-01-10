"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReader = void 0;
const fs_1 = __importDefault(require("fs"));
//* make the file reader an abstract generic so that it can now accept any type of data
class FileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        //* read a csv file and get a string version
        //* split data into array of string rows
        //* map and split that array to get column data as strings in row arrays and row arrays and elements of 2D array
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split("\n")
            .map((row) => {
            return row.split(',');
        })
            .map(this.mapRow);
    }
}
exports.FileReader = FileReader;
