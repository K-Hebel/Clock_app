const clock1HourHand = document.querySelector("#clock1 .hour-hand");
const clock1MinuteHand = document.querySelector("#clock1 .minute-hand");
const clock2HourHand = document.querySelector("#clock2 .hour-hand");
const clock2MinuteHand = document.querySelector("#clock2 .minute-hand");
const hourInput = document.querySelector("#hour-input");
const minuteInput = document.querySelector("#minute-input");
const submitButton = document.querySelector("#submit-button");
const hint = document.querySelector(".hint");

let askedHour;
let askedMinute;

function getCurrentRotation(element) {
    const currentTransform = element.style.transform;
    const regex = /rotate\(([\d.-]+)deg\)/;
    const match = currentTransform.match(regex);
    return match ? parseFloat(match[1]) : 0;
}

function setCurrentTime(hourHand, minuteHand, hour, minute) {
    const hourRotation = (hour % 12) * 30 + minute * 0.5;
    const minuteRotation = minute * 6;
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
}

function getRandomTime() {
    const hour = Math.floor(Math.random() * 12);
    const minute = Math.floor(Math.random() * 6) * 10;
    return { hour, minute };
}

function setRandomTime() {
    const { hour, minute } = getRandomTime();
    setCurrentTime(clock1HourHand, clock1MinuteHand, hour, minute);
    askedHour = hour;
    askedMinute = minute;
}

function checkAnswer() {
    const userHour = parseInt(hourInput.value);
    const userMinute = parseInt(minuteInput.value);

    if (userHour === askedHour && userMinute === askedMinute) {
        hint.textContent = "Correct!";
    } else {
        hint.textContent = `Not quite. The time is close to ${askedHour}:${askedMinute < 10 ? '0' + askedMinute : askedMinute}.`;
    }

    setCurrentTime(clock2HourHand, clock2MinuteHand, userHour, userMinute);
}

submitButton.addEventListener("click", checkAnswer);

setRandomTime();
