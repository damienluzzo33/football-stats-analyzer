import { Analyzer } from "../Summary";
import { GameData } from "../GameData";
import { GameResult } from "../GameResult";

export class WinsAnalysis implements Analyzer {
    constructor(public team: string) {}

    run(games: GameData[]): string {
        let wins: number = 0;

        for (let game of games) {
            if (game[1] === "Man United" && game[5] === GameResult.HomeWin) {
                wins++;
            } else if (game[2] === "Man United" && game[5] === GameResult.AwayWin) {
                wins++;
            }
        }

        return `${this.team} won ${wins} games`
    }
}