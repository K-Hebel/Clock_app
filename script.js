function setClock() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    const secondsRotation = (seconds / 60) * 360;
    const minutesRotation = (minutes / 60) * 360;
    const hoursRotation = (hours / 12) * 360;

    secondHand.style.transform = `rotate(${secondsRotation}deg)`;
    minuteHand.style.transform = `rotate(${minutesRotation}deg)`;
    hourHand.style.transform = `rotate(${hoursRotation}deg)`;
}

document.addEventListener('DOMContentLoaded', function () {
    setInterval(setClock, 1000);
});
