function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  normalMaterial();
  describe(
    "Camera orbits around a box when mouse is hold-clicked & then moved."
  );
}
function draw() {
  background(200);

  for (let y = 0; y < height; y += 10) {
    for (let x = 0; x < width; x += 10) {
      noStroke();

      //   triangle(x, y, x + 50, y + 50, 10, 10);
      //   orbitControl(1, 1, 1, { freeRotation: true });
      orbitControl();
      rotateY(0.5);
      box(x, 10);
    }
  }
  //   orbitControl(2, 3, 1, { freeRotation: true });
}
