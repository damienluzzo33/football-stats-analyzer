"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameReader = void 0;
const Utils_1 = require("./Utils");
const CsvFileReader_1 = require("./CsvFileReader");
class GameReader {
    constructor(reader) {
        this.reader = reader;
        this.games = [];
    }
    static dataFromCsv(filename) {
        //* create instance of GameReader and pass in something that satisfies the DataReader interface
        return new GameReader(
        //* create an object to satisfy DataReader interface
        new CsvFileReader_1.FileReader(filename));
    }
    load() {
        this.reader.read();
        this.games = this.reader.data.map((row) => {
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
exports.GameReader = GameReader;
