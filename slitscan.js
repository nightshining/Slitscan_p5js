let capture;
let x = 0; 
let speed = 0;

function setup() {
  createCanvas(1080,1080);
  capture = createCapture(VIDEO);
  capture.size(800,600);
  //capture.hide();
}

function draw() {
  // image(capture, 0, 0, 320, 240);
  // filter(INVERT);


  let w = capture.width;
  let h = capture.height; 
  copy(capture, w/2, 0, 1, h, x, 0, 1, h);
  x += speed;
}

function keyPressed(){
 
  if (key == 'r') {
   x = 0; 
   speed = 1;
  }

}

function touchStarted() {

   x = 0; 
   speed = 1;

}
