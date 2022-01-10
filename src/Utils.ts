export const stringToDate = (dateString: string): Date => {
    //* assumes input format: 28/10/2018
    const dateValues = dateString.split('/').map((value: string): number => {
        return parseInt(value);
    })

    return new Date(dateValues[2], dateValues[1] - 1, dateValues[0]);
};
