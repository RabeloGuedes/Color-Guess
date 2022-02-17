function randomColor() {
  let color = [];
  for (let index = 0; index < 3; index +=1) {
    color.push(Math.floor(Math.random() *256));
  }
  return color;
}
let corRgb = document.querySelector('#rgb-color');
let resetBtn = document.querySelector('#resetBtn');

resetBtn.addEventListener('click',function () {
  let color = randomColor();
  corRgb.innerText = `(${color[0]}, ${color[1]}, ${color[2]})`;
})

window.onload = function () {
  let color = randomColor();
  corRgb.innerText = `(${color[0]}, ${color[1]}, ${color[2]})`;
}

