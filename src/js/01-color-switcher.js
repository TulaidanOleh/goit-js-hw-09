const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', startСhangColor);
//stopBtn.addEventListener('click', stopСhangColor);

function startСhangColor() {
  setInterval(() => {
    const colorBody = getRandomHexColor();
    document.body.style.backgroundColor = colorBody;
  }, 1000);
}
