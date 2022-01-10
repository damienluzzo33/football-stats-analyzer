"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = void 0;
const stringToDate = (dateString) => {
    //* assumes input format: 28/10/2018
    const dateValues = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(dateValues[2], dateValues[1] - 1, dateValues[0]);
};
exports.stringToDate = stringToDate;
