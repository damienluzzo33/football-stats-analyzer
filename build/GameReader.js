"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameReader = void 0;
const Utils_1 = require("./Utils");
class GameReader {
    constructor(reader) {
        this.reader = reader;
        this.games = [];
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
