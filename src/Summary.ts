import { GameData } from "./GameData";

export interface Analyzer {
    run(games: GameData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class DataSummary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    constructReport(games: GameData[]): void {
        const ourReport = this.analyzer.run(games);
        this.outputTarget.print(ourReport);
    }
}

