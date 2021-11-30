
var clockDisplay = document.getElementById('clock')
var dateDisplay = document.getElementById('date')
window.addEventListener('DOMContentLoaded', displayTime())
// window.addEventListener('DOMContentLoaded', displayDate())

function displayTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    let time = `${hours} : ${minutes} : ${seconds}`;
    clockDisplay.innerHTML = time;
    setTimeout(displayTime, 1000);
}

/* function displayDate() {
    const date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let fullYear = `${month}-${day}-${year}`
    dateDisplay.innerHTML = fullYear;
    setTimeout(displayDate, 1000);
} */

function addZero(i){
    if (i < 10){i = "0" + i}
    return i;
}

