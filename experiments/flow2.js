function setup() {
  createCanvas(innerWidth, innerHeight);
}

const fieldSize = 50;
const fieldSizeHalf = fieldSize / 2;
const maxCols = Math.ceil(innerWidth / fieldSize);
const maxRows = Math.ceil(innerHeight / fieldSize);
const divider = 2;

function draw() {
  background(255, 255, 255);
  for (let x = 0; x < maxCols; x++) {
    for (let y = 0; y < maxRows; y++) {
      const padding = 10;
      const value = noise(x / divider, y / divider) * Math.PI * 2;
      push();
      translate(x * fieldSize + fieldSizeHalf, y * fieldSize + fieldSizeHalf);
      rotate(random(value));
      push();
      fill(random(200), random(100), 100);
      ellipse(-fieldSizeHalf + padding, 0, fieldSizeHalf - padding, 30);

      fill(random(255), random(255), random(255));
      ellipse(-fieldSizeHalf + padding, 0, fieldSizeHalf - padding, 20);
      pop();
      strokeWeight(4);
      // Drawing an arrow
      fill(0, 0, 0);
      // line(-fieldSizeHalf + padding, 0, fieldSizeHalf - padding, 0);
      // triangle(
      //   fieldSizeHalf - padding,
      //   0,
      //   fieldSizeHalf - padding * 3,
      //   padding,
      //   fieldSizeHalf - padding * 2,
      //   -padding
      // );
      pop();
    }
  }
  noLoop();
}

function mouseClicked() {
  draw();
}
