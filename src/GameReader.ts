import { stringToDate } from "./Utils";
import { GameResult } from "./GameResult";
import { GameData } from "./GameData";
import { FileReader } from "./CsvFileReader"

interface DataReader {
    read(): void;
    data: string[][];
}

export class GameReader {
    static dataFromCsv(filename: string): GameReader {
        //* create instance of GameReader and pass in something that satisfies the DataReader interface
        return new GameReader(
            //* create an object to satisfy DataReader interface
            new FileReader(filename)
            )
    }

    games: GameData[] = [];

    constructor(public reader: DataReader){}

    load(): void {
        this.reader.read();
        this.games = this.reader.data.map((row: string[]): GameData => {
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
        });
    }
}