const numberHours = document.querySelector('.number-hours');
const numberElement = [];

for (let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
    );
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

const barSeconds = document.querySelector('.bar-seconds');
const barElement = [];

for (let i = 1; i <= 60; i++) {
    barElement.push(
        `<span style="--index:${i}"><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

const timeElement = document.querySelector('.time');
const ampmElement = document.querySelector('.ampm');

function updateClock() {
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
    handMinutes.style.transform = `rotate(${(currentMinutes + currentSeconds / 60) * 6}deg)`;
    handHours.style.transform = `rotate(${(currentHours % 12 + currentMinutes / 60) * 30}deg)`;

    let hours = currentHours % 12;
    hours = hours ? hours : 12; 
    let ampm = currentHours >= 12 ? 'PM' : 'AM';
    
    timeElement.textContent = `${hours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`;
    ampmElement.textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock();
