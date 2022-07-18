const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');


function showTime() {
    const date = new Date;
    const currentTime = date.toLocaleTimeString();
    time.innerHTML = currentTime;
    setInterval(showTime, 1000);
    setInterval(showDate, 1000);
}

function showDate() {
    const dateValue = new Date;
    const options = { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC'};
    const currentDate = dateValue.toLocaleDateString('en-EN', options);
    date.innerHTML = currentDate;
}

function getTimeOfDay() {
    const listTimeOfDay = ['morning', 'day', 'evening', 'night'];
    const currentDate = new Date;
    const hours = currentDate.getHours();
    return listTimeOfDay[Math.round(hours/4)];
}

function showGreeting() {
    const timeOfDay = getTimeOfDay()
    const greetingText = `Good ${timeOfDay}`;
    greeting.innerHTML = greetingText;
}

function setLocaleStorage() {
    localStorage.setItem('name', name.value)
}

function getLocaleStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}


showTime()
showDate()
showGreeting();
window.addEventListener('beforeunload', setLocaleStorage);
window.addEventListener('load', getLocaleStorage);
