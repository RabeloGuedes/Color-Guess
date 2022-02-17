function randomColor() {
  let color = [];
  for (let index = 0; index < 3; index +=1) {
    color.push(Math.floor(Math.random() *256));
  }
  return color;
}
let corRgb = document.querySelector('#rgb-color');
let resetBtn = document.querySelector('#reset-btn');
let circles = document.querySelectorAll('.ball');

resetBtn.addEventListener('click',function () {
  let color = randomColor();
  corRgb.innerText = `(${color[0]}, ${color[1]}, ${color[2]})`;
  circleColorGenerator();
})

function circleColorGenerator() {
  for (let index = 0; index < circles.length; index += 1) {
    color = randomColor();
    circles[index].style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  }
}

window.onload = function () {
  let color = randomColor();
  corRgb.innerText = `(${color[0]}, ${color[1]}, ${color[2]})`;
  circleColorGenerator();
}

