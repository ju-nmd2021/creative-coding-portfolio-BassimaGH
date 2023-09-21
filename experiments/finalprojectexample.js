// ChatGPT. (2023). Using ml5.js Handpose to Control Shape Size in p5.js. Retrieved from [insert link if applicable]
//global variable

let handpose;
let video;
let predictions = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  video = createCapture(VIDEO);
  video.size(innerWidth, innerHeight);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100); // sets the color mode to HSB with specific ranges.
  frameRate(30);

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
  // mandalaArt();
  background(255);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();

  if (predictions.length > 0) {
    let landmarks = predictions[0].landmarks;

    // Calculate the distance between two key points (e.g., thumb tip and index tip)
    let thumbX = landmarks[4][0];
    let thumbY = landmarks[4][1];
    let indexX = landmarks[8][0];
    let indexY = landmarks[8][1];

    let currentThumbX = thumbX;
    let currentIndexX = indexX;

    let currentThumbY = thumbY;
    let currentIndexY = indexY;

    currentIndexX += (indexX - currentIndexX) / 5;
    currentThumbX += (thumbX - currentThumbX) / 5;

    currentIndexY += (indexY - currentIndexY) / 5;
    currentThumbY += (thumbY - currentThumbY) / 5;

    let distance = dist(
      currentThumbX,
      currentThumbY,
      currentIndexX,
      currentIndexY
    );

    // let smoothDistance =

    // Map the distance to control the size of the mandala
    let mandalaSize = map(distance, 0, 100, 0.2, 2.0); // Adjust the range as needed

    // Call the mandalaArt function with the hand size
    mandalaArt(mandalaSize);
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
