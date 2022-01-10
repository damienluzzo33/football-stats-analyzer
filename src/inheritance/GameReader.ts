import { FileReader } from "./FileReader";
import { stringToDate } from "./Utils";
import { GameResult } from "./GameResult";

//* game data tuple
type GameData = [Date,string,string,number,number,GameResult,string];

export class GameReader extends FileReader<GameData> {
    mapRow(row: string[]): GameData {
        return [
            stringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            //* tell TS that row[5] is going to be an 'A','H' or 'D'
            row[5] as GameResult,
            row[6]
        ];
    }
}