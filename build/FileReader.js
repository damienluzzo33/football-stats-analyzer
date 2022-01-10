"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const Utils_1 = require("./Utils");
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
        }).split("\n").map((row) => {
            return row.split(',');
        }).map((row) => {
            return [
                (0, Utils_1.stringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                //* tell TS that row[5] is going to be an 'A','H' or 'D'
                row[5],
                row[6]
            ];
        });
    }
}
exports.FileReader = FileReader;
