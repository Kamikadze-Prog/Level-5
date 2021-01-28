// @ts-ignore
import moment = require('moment');

export function clickChecker() {
  const clickPlus = document.getElementById('plusTime');
  const clickMinus = document.getElementById('minusTime');
  const startTimer = document.getElementById('startTimer');
  const oneHour = 60;

  setMinusListener(clickMinus);
  setPlusListener(clickPlus, oneHour);
  setStartListener(startTimer, clickMinus, clickPlus, oneHour);
}

function setMinusListener(clickMinus: HTMLElement) {
  const time = document.getElementById('timeSave');

  clickMinus.addEventListener('click', () => {
    time.textContent = changeZeroTime(time.textContent);
    const value = +time.textContent;
    time.textContent = value - 1 < 0 ? '0' : `${value - 1}`;
  });
}

function setPlusListener(clickPlus: HTMLElement, oneHour: number) {
  const time = document.getElementById('timeSave');

  clickPlus.addEventListener('click', () => {
    time.textContent = changeZeroTime(time.textContent);
    const value = +time.textContent;
    time.textContent = value + 1 === oneHour ? '0' : `${value + 1}`;
  });
}

function changeZeroTime(timer: string): string {
  return timer === '0 : 00' ? '0' : timer;
}

function setStartListener(
  startTimer: HTMLElement,
  clickMinus: HTMLElement,
  clickPlus: HTMLElement,
  oneHour: number
) {
  const innerText = document.getElementById('timer-inner-text');
  const time = document.getElementById('timeSave');

  startTimer.addEventListener('click', () => {
    time.textContent = changeZeroTime(time.textContent);
    if (+time.textContent !== 0) {
      clickMinus.classList.toggle('display');
      clickPlus.classList.toggle('display');
      startTimer.classList.toggle('display');
      innerText.textContent = 'Осталось';

      const eventTime = +time.textContent * oneHour;
      let duration = moment.duration(eventTime * 1000, 'milliseconds');

      const timer = setInterval(() => {
        duration = moment.duration(
          duration.asSeconds() * 1000 - 1000,
          'milliseconds'
        );
        // if second < 10 add 0 to seconds
        const seconds =
          duration.seconds() < 10
            ? `0${duration.seconds()}`
            : duration.seconds();
        time.textContent = `${duration.minutes()} : ${seconds}`;

        if (duration.minutes() === 0 && duration.seconds() === 0) {
          clearInterval(timer);
          clickMinus.classList.toggle('display');
          clickPlus.classList.toggle('display');
          startTimer.classList.toggle('display');
          innerText.textContent = 'Укажите время в минутах';
        }
      }, 1000);
    }
  });
}
