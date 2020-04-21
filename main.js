function setup() {
  createCanvas(windowWidth, windowHeight);

  r = random(100);
  g = random(100);
  b = random(100);
}

function draw() {
  if (mouseIsPressed) {
  	colorMode(RGB);
    background(255,255,255);
  } else {
  	colorMode(HSB);
    fill(r, g, b, 60);
  }
  colorMode(HSB, 100);
  strokeWeight(2);
  stroke(r, g, b);
  
  ellipse(mouseX, mouseY, 80, 80);
}

function mouseMoved(){
	r = random(100);
    g = random(50, 100);
    b = random(85, 100);
}