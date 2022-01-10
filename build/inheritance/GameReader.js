"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameReader = void 0;
const FileReader_1 = require("./FileReader");
const Utils_1 = require("./Utils");
class GameReader extends FileReader_1.FileReader {
    mapRow(row) {
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
    }
}
exports.GameReader = GameReader;
