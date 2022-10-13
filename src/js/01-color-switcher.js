const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', startСhangColor);
stopBtn.addEventListener('click', stopСhangColor);

let timerId = null;

stopBtn.disabled = true;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startСhangColor() {
  startBtn.disabled = true;
  timerId = setInterval(() => {
    const colorBody = getRandomHexColor();
    document.body.style.backgroundColor = colorBody;
  }, 1000);
  stopBtn.disabled = false;
}

function stopСhangColor() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
