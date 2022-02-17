const corRgb = document.querySelector('#rgb-color');
const resetGame = document.querySelector('#reset-game');
const circles = document.querySelectorAll('.ball');
const ballSection = document.querySelector('#ball-section');
const answer = document.querySelector('#answer');

function randomColor() {
  let color = [];
  for (let index = 0; index < 3; index +=1) {
    color.push(Math.floor(Math.random() *256));
  }
  return color;
}

resetGame.addEventListener('click',function () {
  let color = randomColor();
  corRgb.innerText = `(${color[0]}, ${color[1]}, ${color[2]})`;
  circleColorGenerator();
  answer.innerText = 'Escolha uma cor';
});

ballSection.addEventListener('click',function (event) {
  if (event.target != ballSection) {
    if (event.target.style.backgroundColor === `rgb${corRgb.innerText}`) {
      answer.innerText = 'Acertou!';
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  }
});

function choseACircle() {
  let chosenOne = Math.floor(Math.random() * 6);
  return chosenOne;
}

function circleColorGenerator() {
  let chosenOne = choseACircle();
  for (let index = 0; index < circles.length; index += 1) {
    if (index === chosenOne) {
      circles[index].style.backgroundColor = `rgb${corRgb.innerText}`;
    } else {
      color = randomColor();
      circles[index].style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }
  }
}

window.onload = function () {
  let color = randomColor();
  corRgb.innerText = `(${color[0]}, ${color[1]}, ${color[2]})`;
  circleColorGenerator();
}

