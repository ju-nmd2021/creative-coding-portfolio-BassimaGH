const size = 10;
const amount = 9;
const gap = 20;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
  colorMode(HSB);
}

function pNoise() {
  // Adjust these values to change the noise pattern
  let xOff = 0.0; // X offset
  let yOff = 0.0; // Y offset
  let increment = 0.02; // Rate of change for noise
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let noiseValue = noise(xOff, yOff) * 255; // Generate noise value between 0 and 255
      noStroke();

      push();
      fill(noiseValue, 200, 90);
      triangle(20, 10, x, y, 10, 20);
      pop();

      push();
      fill(noiseValue, 100, 50);
      triangle(
        width - 20,
        height - 10,
        width - x,
        height - y,
        width - 10,
        height - 20
      );
      pop();

      push();
      fill(noiseValue, 250, 10);
      triangle(width - 20, 10, width - x, y, width - 10, 20);
      pop();

      push();
      fill(noiseValue, 50, 250);
      triangle(20, height - 10, x, height - y, 10, height - 20);
      pop();

      xOff += increment; // Increment X offset for next column
      x += size + gap;
    }
    y += size + gap;
    yOff += increment; // Increment Y offset for next row
    xOff = 0; // Reset X offset for next row
  }
}

function draw() {
  pNoise();
}
