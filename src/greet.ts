// @ts-ignore
import moment = require("moment");

export function sayHello(name: string) {

    return `${name} ${moment().format('MMMM Do YYYY, h:mm:ss a')}`;
}

export function clickChecker() {
    const clickPlus = document.getElementById('plusTime');
    const clickMinus = document.getElementById('minusTime');
    const time = document.getElementById('timeSave');
    const startTimer = document.getElementById('startTimer');

    clickMinus.addEventListener("click", () => {
        let val = Number(time.textContent);
        time.textContent = `${--val}`
    })
    clickPlus.addEventListener("click", () => {
        let val = Number(time.textContent);
        time.textContent = `${++val}`
    })

   return   startTimer.addEventListener("click", () => {
        const timerWrapper = document.getElementById('time_counter_wrapper');
        const innerText = document.getElementById('timer-inner-text');
        timerWrapper.style.display = "none";
        startTimer.style.display = "none";
        innerText.textContent = "Осталось";
        alert(` В moment отправим ${time.textContent} мин для таймера)`);
        return time.textContent;
    })
}

