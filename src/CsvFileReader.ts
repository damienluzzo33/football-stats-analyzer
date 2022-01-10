import fs from "fs";

export class FileReader {
    data: string[][] = [];
    constructor(public filename: string){}

    read(): void {
        //* read a csv file and get a string version
        //* split data into array of string rows
        //* map and split that array to get column data as strings in row arrays and row arrays and elements of 2D array
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split("\n").map((row: string): string[] => {
            return row.split(',')
        });
    }
}