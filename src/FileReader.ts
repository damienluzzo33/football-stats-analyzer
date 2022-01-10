import fs from "fs";
import { stringToDate } from "./Utils";
import { GameResult } from "./GameResult";

//* game data tuple
type GameData = [Date,string,string,number,number,GameResult,string];

export class FileReader {
    data: GameData[] = [];
    constructor(public filename: string){}

    read(): void {
        //* read a csv file and get a string version
        //* split data into array of string rows
        //* map and split that array to get column data as strings in row arrays and row arrays and elements of 2D array
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split("\n").map((row: string): string[] => {
            return row.split(',')
        }).map((row: string[]): GameData => {
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
        })
    }
}