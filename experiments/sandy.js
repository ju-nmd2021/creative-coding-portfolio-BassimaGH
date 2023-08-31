// let spacing = 200;
const size = 10;
const amount = 9;
const gap = 20;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(200);
}

function flower() {
  const shapesPerSet = 10;
  const spacing = 150;

  const totalWidth = shapesPerSet * spacing;
  const startX = (width - totalWidth) / 2;
  translate(startX / 2, height / 2);
  noStroke();

  let y = (height - size * amount - gap * (amount - 1)) / 2;
  for (let j = 0; j < amount; j++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;
    translate(spacing, 0); // Adjust the horizontal spacing between sets of shapes

    for (let i = 0; i < shapesPerSet; i++) {
      fill(random(255), 0, 0);
      ellipse(0, 30, 20, 80);
      rotate(PI / 5);
      for (let k = 0; k < shapesPerSet; k++) {
        fill(25, random(255), 255);
        ellipse(0, 30, 20, 40);
        rotate(PI / 5);
      }
      x += size + gap;
    }
    y += size + gap;
  }
}

function draw() {
  flower();
}
