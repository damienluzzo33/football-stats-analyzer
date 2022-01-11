import { GameReader } from "./GameReader";
import { DataSummary } from "./Summary";

//* use the static method to get data from whatever csv file we want to
const gameReader = GameReader.dataFromCsv('football.csv')
gameReader.load();

//* returns an instance of summary using a static method in DataSummary
const newSummary = DataSummary.winsAnalsisHtml('Man United');

//* generate report
newSummary.constructReport(gameReader.games);