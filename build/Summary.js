"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSummary = void 0;
class DataSummary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    constructReport(games) {
        const ourReport = this.analyzer.run(games);
        this.outputTarget.print(ourReport);
    }
}
exports.DataSummary = DataSummary;
