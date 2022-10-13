import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

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
    return;
  }
  startBtn.disabled = false;
}
