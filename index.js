const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
let timerId = null
const refs = {
    startButton: document.querySelector('button[data-action="start"]'),
    stopButton: document.querySelector('button[data-action="stop"]')
}
  
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBgColor = () => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }
const startChangeBgColor = function() {
  timerId = setInterval(changeBgColor, 1000);
  refs.startButton.removeEventListener('click', startChangeBgColor);
}

refs.startButton.addEventListener('click', startChangeBgColor);


const stopChangeBgColor = function () {
  clearInterval(timerId);
  refs.startButton.addEventListener('click', startChangeBgColor);
}

refs.stopButton.addEventListener('click', stopChangeBgColor);




