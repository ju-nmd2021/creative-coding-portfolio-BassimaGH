function setup() {
  createCanvas(innerWidth, innerHeight);
  background(34, 39, 46);
}

function draw() {
  background(34, 39, 46, 40);
  fill(random(255), 182, 255);

  push();
  translate(width / 2, height / 2);

  push();
  rotate(frameCount / 8);
  ellipse(50, 0, random(100));
  pop();

  push();
  rotate(frameCount / 10);
  ellipse(175, 0, random(50));
  pop();

  push();
  rotate(frameCount / 12);
  ellipse(225, 0, random(100));
  pop();

  push();
  rotate(frameCount / 14);
  ellipse(375, 0, random(50));
  pop();

  pop();
}
