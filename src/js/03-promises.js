import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const fieldValues = getValuesObjFromFormFields(e.target);

  if (!validateValues(fieldValues)) {
    return;
  }

  console.clear();
  console.log('Form fields data:', fieldValues);

  let delay = Number(fieldValues.delay);
  const step = Number(fieldValues.step);
  const amount = Number(fieldValues.amount);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(onPropmiseResolve)
      .catch(onPropmiseReject);
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onPropmiseResolve({ position, delay }) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onPropmiseReject({ position, delay }) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

function getValuesObjFromFormFields(form) {
  const fieldValues = {};
  form
    .querySelectorAll('input[name]')
    .forEach(el => (fieldValues[el.name] = form.elements[el.name].value));
  return fieldValues;
}

function validateValues(obj) {
  let valid = true;
  Object.values(obj).forEach(value => {
    if (value < 0) {
      Notify.failure('Values must be > 0');
      valid = false;
      return;
    }
  });
  return valid;
}
