// @ts-ignore
import moment = require("moment");

export function clickChecker() {
    const clickPlus = document.getElementById('plusTime')
    const clickMinus = document.getElementById('minusTime')
    const time = document.getElementById('timeSave')
    const startTimer = document.getElementById('startTimer')
    const innerText = document.getElementById('timer-inner-text')

    clickMinus.addEventListener("click", () => {
        let val = Number(time.textContent);
        time.textContent = `${--val}`
    })
    clickPlus.addEventListener("click", () => {
        let val = Number(time.textContent);
        time.textContent = `${++val}`
    })

    startTimer.addEventListener("click", () => {
        clickMinus.style.display = "none";
        clickPlus.style.display = "none";
        startTimer.style.display = "none";
        innerText.textContent = "Осталось";
        alert(` В moment отправим ${time.textContent} мин для таймера)`);

        const eventTime = Number(time.textContent) * 60;
        let duration = moment.duration(eventTime * 1000, 'milliseconds');

        const timer = setInterval(function () {
            duration = moment.duration((duration.asSeconds() * 1000) - 1000, 'milliseconds');
            time.textContent = duration.minutes() + " : " + duration.seconds();

            if (duration.minutes() === 0 && duration.seconds() === 0) {
                clearInterval(timer);
            }
        }, 1000)
    })
}

