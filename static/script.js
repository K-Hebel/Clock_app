function setClock(clockElement, hours, minutes) {
    const hourHand = clockElement.querySelector('.hour-hand');
    const minuteHand = clockElement.querySelector('.minute-hand');

    const hoursRotation = (hours % 12) / 12 * 360 + (minutes / 60) * 30;
    const minutesRotation = (minutes / 60) * 360;

    hourHand.style.transform = `rotate(${hoursRotation}deg)`;
    minuteHand.style.transform = `rotate(${minutesRotation}deg)`;
}

function generateRandomTime() {
    const hours = Math.floor(Math.random() * 12);
    const minutes = Math.floor(Math.random() * 60);
    return { hours, minutes };
}

function displayHint(hintElement, correctHours, correctMinutes, inputHours, inputMinutes) {
    const hourDifference = Math.abs(correctHours - inputHours);
    const minuteDifference = Math.abs(correctMinutes - inputMinutes);

    let hint = '';

    if (correctHours === inputHours && correctMinutes === inputMinutes) {
        hint = 'Great job! You got it right!';
    } else {
        if (correctHours !== inputHours) {
            if (correctHours
