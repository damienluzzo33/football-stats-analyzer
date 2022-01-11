"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSummary = void 0;
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class DataSummary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalsisHtml(team) {
        return new DataSummary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    constructReport(games) {
        const ourReport = this.analyzer.run(games);
        this.outputTarget.print(ourReport);
    }
}
exports.DataSummary = DataSummary;
