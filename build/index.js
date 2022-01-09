"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
//* read csv file and get a string version
//* split data into array of string rows
//* map and split to get column data as strings in row arrays and row arrays and elements of 2D array
const gameData = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split("\n").map((row) => {
    return row.split(',');
});
let manUnitedWins = 0;
for (let game of gameData) {
    if (game[1] === "Man United" && game[5] === "H") {
        manUnitedWins++;
    }
    else if (game[2] === "Man United" && game[5] === "A") {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
