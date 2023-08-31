const size = 10;
const amount = 9;
const gap = 20;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
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

      fill(noiseValue);
      triangle(x, y, x + 50, y + 50, 10, 10);

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
