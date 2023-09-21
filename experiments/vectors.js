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
  // noStroke();

  let w = random(100);
  let h = random(100);
  push();
  fill(20, random(255), 150);
  quad(
    position.x - w / 2,
    position.y - h / 2,
    position.x + w / 2,
    position.y - h / 2,
    position.x + w / 2,
    position.y + h / 2,
    position.x - w / 2,
    position.y + h / 2
  );
  pop();

  push();
  fill(random(155), 255, 255);
  translate(position.x / 2, position.y / 2);
  quad(
    position.x - w / 2,
    position.y - h / 2,
    position.x + w / 2,
    position.y - h / 2,
    position.x + w / 2,
    position.y + h / 2,
    position.x - w / 2,
    position.y + h / 2
  );
  pop();

  push();
  fill(10, 200, random(255));
  translate(position.x * 1.5, position.y * 1.5);
  quad(
    position.x - w / 2,
    position.y - h / 2,
    position.x + w / 2,
    position.y - h / 2,
    position.x + w / 2,
    position.y + h / 2,
    position.x - w / 2,
    position.y + h / 2
  );
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
