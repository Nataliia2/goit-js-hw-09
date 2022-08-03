
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');



startButton.addEventListener('click', onStartButton);
stopButton.addEventListener('click', onStopButton);

stopButton.disabled = true;

const changeBackgroundColor = () => bodyColor.style.backgroundColor = getRandomHexColor();

let intervalId = null;

function onStartButton () {
    intervalId = setInterval(changeBackgroundColor, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;  

};

function onStopButton () {
    clearInterval(intervalId);
    stopButton.disabled = true;
    startButton.disabled = false;
};
    

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
