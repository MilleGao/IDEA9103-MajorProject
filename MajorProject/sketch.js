function setup() {
  createCanvas(600, 600);
  noLoop();
  noStroke(); // This will remove the stroke from all drawn shapes
}

function draw() {
  background(250);
  fill(255, 225, 2);

  let horizontalLines = [0, height];  // start with boundary lines
  let verticalLines = [0, width];     // start with boundary lines

  let minVHeight = 250;  // Minimum height for vertical rectangles
  let minHWidth = 150;   // Minimum width for horizontal rectangles

  // Draw vertical "line" rectangles with increased frequency
  for (let i = 5; i < width; i += random(40, 60)) {
    let startY = random(horizontalLines);
    let endY = random(startY === 0 ? height : horizontalLines);
    let thickness = random(12, 25);

    if (startY > endY) {
      [startY, endY] = [endY, startY];
    }

    // Ensure the rectangle height is above the minimum threshold
    if (endY - startY > minVHeight) {
      rect(i - thickness / 2, startY, thickness, endY - startY);
      if (!horizontalLines.includes(endY)) {
        horizontalLines.push(endY);
      }
    }
  }

  // Draw horizontal "line" rectangles with increased frequency
  for (let j = 5; j < height; j += random(40, 60)) {
    let startX = random(verticalLines);
    let endX = random(startX === 0 ? width : verticalLines);
    let thickness = random(12, 15);

    if (startX > endX) {
      [startX, endX] = [endX, startX];
    }

    // Ensure the rectangle width is above the minimum threshold
    if (endX - startX > minHWidth) {
      rect(startX, j - thickness / 2, endX - startX, thickness);
      if (!verticalLines.includes(endX)) {
        verticalLines.push(endX);
      }
    }
  }
}
