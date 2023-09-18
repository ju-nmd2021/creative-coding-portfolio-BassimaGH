// ChatGPT. (2023). Using ml5.js Handpose to Control Shape Size in p5.js. Retrieved from [https://chat.openai.com/c/7be057ff-9c69-44c6-a317-0eea98d5d8fc]

let handpose;
let video;
let predictions = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  handpose = ml5.handpose(video, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new hand poses are detected
  handpose.on("predict", (results) => {
    predictions = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
  // image(video, 0, 0, width, height);
  background(255);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawCircle();
}

function drawCircle() {
  if (predictions.length > 0) {
    let landmarks = predictions[0].landmarks;

    // Calculate the distance between two key points (e.g., thumb tip and index tip)
    let thumbX = landmarks[4][0];
    let thumbY = landmarks[4][1];
    let indexX = landmarks[8][0];
    let indexY = landmarks[8][1];
    let distance = dist(thumbX, thumbY, indexX, indexY);

    // Map the distance to control the size of the circle
    let circleSize = map(distance, 0, 100, 10, 100);

    // Draw a circle based on hand movement
    fill(255, 0, 0);
    ellipse(width / 2, height / 2, circleSize, circleSize);
  }
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      ellipse(keypoint[0], keypoint[1], 10, 10);
    }
  }
}
