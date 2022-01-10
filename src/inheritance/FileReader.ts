import fs from "fs";

//* make the file reader an abstract generic so that it can now accept any type of data
export abstract class FileReader<DataType> {
    data: DataType[] = [];
    constructor(public filename: string){}
    abstract mapRow(row: string[]): DataType;

    read(): void {
        //* read a csv file and get a string version
        //* split data into array of string rows
        //* map and split that array to get column data as strings in row arrays and row arrays and elements of 2D array
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split("\n")
        .map((row: string): string[] => {
            return row.split(',')
        })
        .map(this.mapRow);
    }
}