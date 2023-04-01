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
            if (correctHours > inputHours) {
                hint += `The hour is too low. Try a higher number. `;
            } else {
                hint += `The hour is too high. Try a lower number. `;
            }
        }

        if (correctMinutes !== inputMinutes) {
            if (correctMinutes > inputMinutes) {
                hint += `The minute is too low. Try a higher number.`;
            } else {
                hint += `The minute is too high. Try a lower number.`;
            }
        }
    }

    hintElement.textContent = hint;
}

document.addEventListener('DOMContentLoaded', function () {
    const clock1 = document.querySelector('.clock1');
    const clock2 = document.querySelector('.clock2');
    const submitTime1 = document.getElementById('submit-time1');
    const submitTime2 = document.getElementById('submit-time2');
    const hint1 = document.getElementById('hint1');

    const randomTime1 = generateRandomTime();
    const randomTime2 = generateRandomTime();
    setClock(clock1, randomTime1.hours, randomTime1.minutes);
    setClock(clock2, randomTime2.hours, randomTime2.minutes);

    submitTime1.addEventListener('click', function () {
        const hourInput1 = document.getElementById('hour-input1').value;
        const minuteInput1 = document.getElementById('minute-input1').value;

        if (hourInput1 && minuteInput1) {
            displayHint(hint1, randomTime1.hours, randomTime1.minutes, parseInt(hourInput1), parseInt(minuteInput1));
        }
    });

    submitTime2.addEventListener('click', function () {
        const hourInput2 = document.getElementById('hour-input2').value;
        const minuteInput2 = document.getElementById('minute-input2').value;

        if (hourInput2 && minuteInput2) {
            setClock(clock2, parseInt(hourInput2), parseInt(minuteInput2));
        }
    });
});
