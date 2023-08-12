
export const calculatePercentageChange = (currentValue: number, oldValue: number): number => {

    let difference = currentValue - oldValue;

    return Math.round(difference / oldValue * 100);
}