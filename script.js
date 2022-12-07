let zoff = 0;
let x, y, e;
let mX, mY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  mX = windowWidth * 0.5;
  mY = windowHeight * 0.3;
}

function draw() {
  smooth();
  let mm = map(mY, 0, width, 0, 80);
  background(0);
  translate(width / 2, height / 2);
  strokeWeight(2);
  for (let a = 0; a < 0.75; a += 0.00012) {
    stroke(255);
    x = 20 * a;
    y = 100 - x * mm;
    e = a * 50 * tan(zoff);
    point(cos(x) * y - e, sin(x) * y + e);
  }
  zoff += map(mouseX,0,width,+0.03,-0.03);
}

function mousePressed() {
  mX = mouseX;
  mY = mouseY;
}

function mouseMoved() {
  mX = mouseX;
  mY = mouseY;
}

function touchStarted() {
  mX = mouseX;
  mY = mouseY;
}

function touchMoved() {
  mX = mouseX;
  mY = mouseY;
  return false;
}
