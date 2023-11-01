function setup() {
  createCanvas(800,800);
  noLoop();
  noStroke();
  fill(255, 229, 6);
}

function draw() {
  background(250);


  // Vertical rectangles
  for (let i = 1; i < 10; i++) {
    if (i == 2 || i == 4 || i == 7) {
      rect(width/40 * i * 5, 0, width/50, height/2);
    } else {
      rect(width/50 * i * 5, 0, width/50, height);
    }
  }

  // Horizontal rectangles
  for (let j = 1; j < 8; j++) {
    if (j == 1 || j == 5 || j == 6) {
      rect(0, height/8 * j, width/2, height/40);
    } else {
      rect(0, height/8 * j, width, height/40);
    }
  }
}
