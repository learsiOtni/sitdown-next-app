
export const calculatePercentageChange = (currentValue: number, oldValue: number): number => {

    let difference = currentValue - oldValue;

    return Math.round(difference / oldValue * 100);
}

export const formatDate = (previousDate: Date) => { //format Status updates' createdAt Relative To Current Date

    const minutes = 60 * 1000;
    const hours = minutes * 60;
    const days = hours * 24;
    const months = days * 30; //28, 31
    const years = days * 365;

    const currentDate = new Date();
    const secondsPast = (currentDate.getTime() - previousDate.getTime());

    let timeName, time;
    if (secondsPast < minutes) {
        time = 1000;
        timeName = 'seconds';
    } else if (secondsPast < hours) {
        time = minutes;
        timeName = 'minutes';
    } else if (secondsPast < days) {
        time = hours;
        timeName = 'hours';
    } else if (secondsPast < months) {
        time = days;
        timeName = 'days';
    } else if (secondsPast < years) {
        time = months;
        timeName = 'months';
    } else {
        time = 1000;
        timeName = 'seconds'
    }

    const value = Math.round(secondsPast/time);
    if (value === 1) timeName = timeName.slice(0, -1);
    
    return `${value} ${timeName} ago`;
}