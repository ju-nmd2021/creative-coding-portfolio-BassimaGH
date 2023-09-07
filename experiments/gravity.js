class Element {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 2);
    this.acceleration = createVector(0, 0);
    this.size = 50;
    this.mass = 20;
  }

  applyForce(force) {
    let newForce = force.copy();
    newForce.div(this.mass);
    this.acceleration.add(newForce);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.acceleration.mult(0);
  }

  draw() {
    fill(0, random(255), 0);
    stroke(100, random(200), random(255));
    line(
      this.position.x,
      this.position.y,
      this.position.x / 2,
      this.position.y / 2
    );
    // ellipse(this.position.x, this.position.y, random(this.size));
  }
}

class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.size = 200;
    this.mass = 100;
  }

  attract(element) {
    let force = p5.Vector.sub(this.position, element.position);
    let distance = constrain(force.mag(), 5, 25);
    force.normalize();
    let m = (G * element.mass * this.mass) / (distance * distance);
    force.mult(m);
    return force;
  }

  draw() {
    noFill();
    noStroke();
    ellipse(this.position.x, this.position.y, this.size);
  }
}

let element;
let attractor;
let element2;
let attractor2;
let G = 1;

function setup() {
  createCanvas(innerWidth, innerHeight);
  element = new Element(100, 100);
  attractor = new Attractor(400, 300);

  element2 = new Element(width - 200, 100);
  attractor2 = new Attractor(width - 400, 300);

  colorMode(HSB);
}

function draw() {
  // background(255, 255, 255);

  let force = attractor.attract(element);
  element.applyForce(force);
  element.update();
  element.draw();

  let force2 = attractor2.attract(element2);
  element2.applyForce(force2);
  element2.update();
  element2.draw();

  attractor.draw();
  attractor2.draw();
}
