
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const date = new Date();


let day = weekday[date.getDay()];

let hourUtc = date.getUTCHours();
let minuteUtc = date.getUTCMinutes();
let secondUtc = date.getUTCSeconds();
let millisSecondsUtc = date.getUTCMilliseconds();



document.getElementById("current-days").innerHTML = day;

document.getElementById("current-utc").innerHTML = (hourUtc + " : " + minuteUtc + " : " + secondUtc + " : " + millisSecondsUtc + " UTC Time")