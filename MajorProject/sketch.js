var nums1 = [10,100, 210, 320,470, 500, 630, 700,790];
var nums2 = [30,100, 210, 300, 400, 550, 630, 750,790];

function setup() {
  createCanvas(800, 800);
  noLoop();
  noStroke();
  fill(255, 229, 6);
}

function draw() {
  background(250);

  // Vertical rectangles
  for (let i = 1; i < 10; i++) {
    if (i == 2 || i == 4 || i == 7) {
      rect(width / 40 * i * 5, 0, width / 50, height / 2);
    } else {
      rect(width / 50 * i * 5, 0, width / 50, height);
    }
  }

  // Horizontal rectangles
  for (let j = 1; j < 8; j++) {
    if (j == 1 || j == 5 || j == 6) {
      rect(0, height / 8 * j, width / 2, height / 40);
    } else {
      rect(0, height / 8 * j, width, height / 40);
    }
  }

  for (let i = 0; i < 8; i++) {
    noStroke();
    fill(0, 0, 236);
    rect(nums1[i],nums2[i]*3,100,70);
  }

  for (let i = 0; i < 8; i++) {
    noStroke();
    fill(255, 0, 0);
    rect(nums1[i],nums2[i]*2,100+50,80);
  }

  for (let i = 0; i < 8; i++) {
    noStroke();
    fill(255, 0, 0);
    rect(nums1[i]*2,nums2[i],60,50);
  }

  for (let i = 0; i < 6; i++) {
    noStroke();
    fill(255, 0, 0);
    rect(nums1[i]*2,nums2[i],60,50);
  }
  for (let i = 0; i < 10; i++) {
    noStroke();
    fill(160, 160, 160);
    rect(nums1[i]*2+20,nums2[i]+10,30,30);
  }

  for (let i = 0; i < 10; i++) {
    noStroke();
    fill(255, 229, 6);
    rect(nums1[i]+200,nums2[i]+200,40,80);
  }

  for (let i = 0; i < 10; i++) {
    noStroke();
    fill(0, 0, 236);
    rect(nums1[i*2]+220,nums2[i]+400,100,80);
  }

}