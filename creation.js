var dots = [];
var totalDots  = 9;

function setup() {
  createCanvas(400, 400);
  for(var i = 0; i < totalDots; i++){
    
    var v = createVector(random(width),    random(height));
    dots[i] = v;
  }
  
}

function draw() {
  background(100);
  fill(255);
  for(var i = 0; i < dots.length; i++){
    ellipse(dots[i].x, dots[i].y, 9, 9);
  }
  
  
  stroke(225);
  strokeWeight(2);
  noFill();
  
  
  beginShape();
  
  for(var i = 0; i < dots.length; i++){
    vertex(dots[i].x, dots[i].y);
  }
  endShape();
  
  //var i = floor(random(dots.length));
  //var j = floor(random(dots.length));
  
  //swap(dots, i, j);
  
}


