// @ts-ignore
import moment = require("moment");

export function clickChecker() {
    const clickPlus = document.getElementById('plusTime')
    const clickMinus = document.getElementById('minusTime')
    const time = document.getElementById('timeSave')
    const startTimer = document.getElementById('startTimer')
    const innerText = document.getElementById('timer-inner-text')
    const oneHour = 60;

    clickMinus.addEventListener("click", () => {
        if (time.textContent == '0 : 00') {
            time.textContent = '0';
        }
        let value = Number(time.textContent);
        const result = ((value - 1) < 0) ? 0 : --value
        time.textContent = `${result}`;
    })

    clickPlus.addEventListener("click", () => {
        if (time.textContent == '0 : 00') {
            time.textContent = '0';
        }
        let value = Number(time.textContent);
        const result = ((value + 1) ==  oneHour) ? 0 : ++value
        time.textContent = `${result}`;
    })

    startTimer.addEventListener("click", () => {
        if (Number(time.textContent) != 0) {
            clickMinus.classList.toggle('display');
            clickPlus.classList.toggle('display');
            startTimer.classList.toggle('display');
            innerText.textContent = "Осталось";
            const eventTime = Number(time.textContent) * oneHour;
            let duration = moment.duration(eventTime * 1000, 'milliseconds');
            const timer = setInterval(function () {
                duration = moment.duration((duration.asSeconds() * 1000) - 1000, 'milliseconds');

                let seconds = (duration.seconds() <= 9) ? `0${duration.seconds()}` : duration.seconds(); // add 0 if seconds <=9
                time.textContent = duration.minutes() + " : " + seconds;
                if (duration.minutes() === 0 && duration.seconds() === 0) {
                    clearInterval(timer);
                    clickMinus.classList.toggle('display');
                    clickPlus.classList.toggle('display');
                    startTimer.classList.toggle('display');
                    innerText.textContent = "Укажите время в минутах";
                }
            }, 1000)
        }
    })
}