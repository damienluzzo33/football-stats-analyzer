import fs from "fs";

//* read csv file and get a string version
//* split data into array of string rows
//* map and split to get column data as strings in row arrays and row arrays and elements of 2D array
const gameData: string[][] = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split("\n").map((row: string): string[] => {
    return row.split(',')
});


//* TEST THE DATA 
let manUnitedWins: number = 0;

for (let game of gameData) {
    if (game[1] === "Man United" && game[5] === "H") {
        manUnitedWins++;
    } else if (game[2] === "Man United" && game[5] === "A") {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);