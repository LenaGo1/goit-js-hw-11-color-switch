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
  console.log(timerId);
  refs.startButton.removeEventListener('click', startChangeBgColor);
}
refs.startButton.addEventListener('click', startChangeBgColor);
console.log(timerId);

const stopChangeBgColor = function () {
  console.log(timerId);
  clearInterval(timerId);

  refs.startButton.addEventListener('click', startChangeBgColor);
}

refs.stopButton.addEventListener('click', stopChangeBgColor);




// const btn = document.querySelector("#btn");

// // event - это и есть обьект события который автоматически 
// // передается первым аргументом, мы можем называть его как угодно, 
// // хоть qwerty, но чаще всего он называется или e, evt или event

// const handleClick = event => {
//   console.log("event: ", event); //откройте консоль чтобы увидеть весь объект целиком

//   console.log("event type: ", event.type); // event type:  click

//   // будет window, так как мы используем стрелочную функцию, 
//   // которая использует внешний контекст 
//   // Если использовать обычную функцию то this будет самим элементом 
//   // button и равен currentTarget
//   console.log("this: ", this); 
//   console.log("target: ", event.target); // <button id="btn">CLICK ME!</button>
// };

// btn.addEventListener("click", handleClick);