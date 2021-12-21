
let capture;
let x = 0; 
let speed = 0;
let bLoop = true; 
let bFlip = false;
let flipCounter = 0;


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
  
  if(!bFlip) {
    
    copy(capture, w/2, 0, 1, h, x, 0, 1, h);
  
  } else {
    
    copy(capture, 0,w/2, h, 1, 0, x, h, 1);
  }
  x += speed;

  if (bLoop == true &&  x >= width) {
    x = 0; 
  }
}

function keyPressed(){
 
  if (key == 'r') {
   x = 0; 
   speed = 1;
  }

  if (key == 'l') { 
    bLoop = !bLoop; 
    x = 0;
    speed = 1;
  }

  if (key == 'f') {
    bFlip = !bFlip;
  }



}

function touchStarted() {
   x = 0; 
   speed = 1;

   flipCounter++; 
   flipCounter %= 2;
   if (flipCounter == 1) {
    bFlip = !bFlip;
   }

   console.log("flipCounter:  " +  flipCounter);
  return false;
}
