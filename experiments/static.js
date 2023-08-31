const size = 150;
const amount = 5;
const gap = 20;
let xOff = 0.0; // X offset
let yOff = 0.0; // Y offset
let increment = 0.02; // Rate of change for noise

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
  colorMode(HSB);
}

function drawElement() {
  const fields = 8;
  const s = size / fields;
  for (let y = 0; y < fields; y++) {
    for (let x = 0; x < fields; x++) {
      let noiseValue = noise(xOff, yOff) * 255; // Generate noise value between 0 and 255
      noStroke();

      fill(noiseValue, 50, 50);
      circle(x * s, y * s, s);

      xOff += increment; // Increment X offset for next column
      fill(random(255), random(255), random(255));
      circle(x * s, y * s, s / 2);
    }

    yOff += increment; // Increment Y offset for next row
    xOff = 0; // Reset X offset for next row
  }
}

function draw() {
  let y = (height - size * amount - gap * (amount - 1)) / 2;
  for (let i = 0; i < amount; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;
    push();
    translate(x, y);
    drawElement();
    pop();
    for (let k = 0; k < amount; k++) {
      push();
      translate(x, y);
      drawElement();
      pop();
      x += size + gap;
    }
    y += size + gap;
  }
  noLoop();
}

function mouseClicked() {
  draw();
  // drawElement();
}
