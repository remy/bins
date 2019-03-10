const ctx = document.querySelector('canvas').getContext('2d');
const size = 16;
const marbles = 4;
const grid = Array.from({ length: 10 * 10 });
const scale = 3;
ctx.imageSmoothingEnabled = false;
ctx.scale(scale, scale);
ctx.canvas.width = ctx.canvas.height = 160 * scale;

function genMarble(name) {
  const img = document.querySelector('#' + name);
  const ctx = document.createElement('canvas').getContext('2d');
  ctx.canvas.width = ctx.canvas.height = size * scale;
  ctx.imageSmoothingEnabled = false;
  ctx.scale(scale, scale);
  ctx.drawImage(img, 1, 1);
  return ctx;
}

function mask(x, y) {}

function randomMarble() {
  return (Math.random() * marbles) | 0;
}

function getCoords(event) {
  var totalOffsetX = 0;
  var totalOffsetY = 0;
  var canvasX = 0;
  var canvasY = 0;
  var currentElement = event.target;

  do {
    totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
    totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
  } while ((currentElement = currentElement.offsetParent));

  canvasX = event.pageX - totalOffsetX;
  canvasY = event.pageY - totalOffsetY;
  return { x: (canvasX / scale) | 0, y: (canvasY / scale) | 0 };
}

function log(...args) {
  document.querySelector('pre').innerHTML = JSON.stringify(args, 0, 2);
}

function coordsToIndex({ x, y }) {
  x = (x / size) | 0;
  y = (y / size) | 0;

  const index = y * 10 + x;

  return { x, y, index };
}

function handleClick(event) {
  const { x, y } = getCoords(event);
  coordsToIndex({ x, y });
}

function main() {
  const marbles = [
    genMarble('one'),
    genMarble('two'),
    genMarble('three'),
    genMarble('four'),
  ];

  for (var x = 0; x < 10; x++) {
    for (var y = 0; y < 10; y++) {
      ctx.drawImage(
        marbles[randomMarble()].canvas,
        x * size * scale,
        y * size * scale
      );
    }
  }

  ctx.canvas.onmousedown = handleClick;
}

window.onload = main;
