import { GameData } from "./GameData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
    run(games: GameData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class DataSummary {
    
    static winsAnalsisHtml(team: string): DataSummary {
        return new DataSummary(
            new WinsAnalysis(team),
            new HtmlReport()
        )
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    constructReport(games: GameData[]): void {
        const ourReport = this.analyzer.run(games);
        this.outputTarget.print(ourReport);
    }
}

