let position;
let velocity;
let acceleration;

function setup() {
  createCanvas(innerWidth, innerHeight);
  position = createVector(100, 100);
  velocity = createVector(5, 8);
  background(200);

  colorMode(HSB);
}

function draw() {
  noStroke();

  push();
  fill(20, random(255), 150);
  ellipse(position.x, position.y, random(50));
  pop();

  push();
  fill(random(255), 255, 255);
  translate(position.x / 2, position.y / 2);
  ellipse(position.x, position.y, random(50, 100));
  pop();

  push();
  fill(150, 100, random(255));
  translate(position.x * 2, position.y * 2);
  ellipse(position.x, position.y, random(100));
  pop();

  // Check for the walls
  if (position.x > width || position.x < 0) {
    velocity.x *= -1;
  }
  if (position.y > height || position.y < 0) {
    velocity.y *= -1;
  }

  const mouse = createVector(mouseX, mouseY);
  acceleration = p5.Vector.sub(mouse, position);
  acceleration.normalize();
  acceleration.mult(0.5);
  // Add the speed to the ball
  velocity.add(acceleration);
  velocity.limit(10);
  position.add(velocity);
}
