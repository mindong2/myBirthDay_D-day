const container = document.querySelector(`.js-container`),
title = container.querySelector(`.js-title`),
clock = container.querySelector(`.js-clock`);

function dDayClock(){
const date = new Date();
const myBirth = new Date("2021,04,23");
const dDay = new Date (myBirth - date);

const dDaySec = Math.floor(dDay/1000);
const dDayMin = dDaySec/60;
const dDayHours = dDayMin/60;
const dDayDate = dDayHours/24;

const displaySec = dDaySec%60;
const displayMin = Math.floor(dDayMin%60);
const displayHours = Math.floor(dDayHours%24);
const displayDate = Math.floor(dDayDate);

clock.innerText = `${displayDate < 10 ? `0${displayDate}` : displayDate}d:${displayHours < 10 ? `0${displayHours}` : displayHours}h:${displayMin < 10 ? `0${displayMin}` : displayMin}m:${displaySec < 10 ? `0${displaySec}` : displaySec}s`
}


function init(){
     dDayClock();
     setInterval(dDayClock, 1000);
}

init();