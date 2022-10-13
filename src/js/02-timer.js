import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
//import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const TIMER_INTERVAL = 1000;
let isTimerActive = false;
let timerId = null;
let endDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onDatePickerClose(selectedDates[0]);
  },
};

const myInput = document.querySelector('#datetime-picker');
const fl = flatpickr(myInput, options);

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const timerRefs = {
  daysValue: document.querySelector('span[data-days]'),
  hoursValue: document.querySelector('span[data-hours]'),
  minutesValue: document.querySelector('span[data-minutes]'),
  secondsValue: document.querySelector('span[data-seconds]'),
};

function onDatePickerClose(date) {
  if (date <= new Date()) {
    Notify.failure('Please choose a date in the future');
    startBtn.disabled = true;
    return;
  }
  startBtn.disabled = false;
  endDate = date;
}

startBtn.addEventListener('click', () => {
  if (!isTimerActive) {
    onStartBtn(true);
  }
});

function onStartBtn(isEnabled) {
  if (isEnabled) {
    timerId = setInterval(updateTimerData, TIMER_INTERVAL);
    startBtn.disabled = isEnabled;
  } else {
    clearInterval(timerId);
  }
  isTimerActive = isEnabled;
  myInput.disabled = isEnabled;

  Notify.success(isEnabled ? 'Timer is started' : 'Timer is stopped');
}

function updateTimerData() {
  const timeLeft = endDate - new Date();
  if (timeLeft < 0) {
    onStartBtn(false);
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeLeft);
  const { daysValue, hoursValue, minutesValue, secondsValue } = timerRefs;

  daysValue.textContent = addLeadinZero(days);
  hoursValue.textContent = addLeadinZero(hours);
  minutesValue.textContent = addLeadinZero(minutes);
  secondsValue.textContent = addLeadinZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadinZero(value) {
  return String(value).padStart(2, '0');
}
