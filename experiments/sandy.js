const size = 10;
const amount = 3;
const gap = 130;
const shapesPerSet = 10;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(200);
}

function flower() {
  const fields = 8;
  for (let y = 0; y < fields; y++) {
    for (let x = 0; x < fields; x++) {
      noStroke();
      for (let i = 0; i < shapesPerSet; i++) {
        fill(255, 0, 0);
        ellipse(0, 30, 20, 80);
        rotate(PI / 5);
        for (let k = 0; k < shapesPerSet; k++) {
          fill(25, 254, 255);
          ellipse(0, 30, 20, 40);
          push();
          fill(25, 254, 0);
          triangle(x, y, x + 50, y + 50, 10, 10);
          pop();
          rotate(PI / 5);
        }
      }
    }
  }
}

function draw() {
  let y = (height - size * amount - gap * (amount - 1)) / 2;
  for (let i = 0; i < amount; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;
    for (let k = 0; k < amount; k++) {
      push();
      translate(x, y);
      flower();
      pop();
      x += size + gap;
    }
    y += size + gap;
  }
  // noLoop();
}
