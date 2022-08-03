import { Notify } from 'notiflix/build/notiflix-notify-aio';

const promiseForm = document.querySelector('.form');
const inputfirstDelay = document.querySelector('[name = "delay"]');
const inputStepDelay = document.querySelector('[name = "step"]');
const inputAmount = document.querySelector('[name = "amount"]');

promiseForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const firstStep = Number(inputfirstDelay.value);
  const stepDelay = Number(inputStepDelay.value);
  const amount = Number(inputAmount.value);
  let delay = firstStep;

for (let position = 1; position <= amount; position += 1) {

  createPromise (position, delay)
  .then(({ position, delay }) => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
  .catch(({ position, delay }) => Notify.success(`❌ Rejected promise ${position} in ${delay}ms`))
  delay += stepDelay;
}
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise ((resolve, reject) => {
    
    setTimeout (() => {
      
  
  if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay});
  }
}, delay);
  });
};
