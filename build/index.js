"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameReader_1 = require("./GameReader");
const Summary_1 = require("./Summary");
//* use the static method to get data from whatever csv file we want to
const gameReader = GameReader_1.GameReader.dataFromCsv('football.csv');
gameReader.load();
//* returns an instance of summary using a static method in DataSummary
const newSummary = Summary_1.DataSummary.winsAnalsisHtml('Man United');
//* generate report
newSummary.constructReport(gameReader.games);
