

var no_of_points;
var counter=0;
let mySound;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  no_of_points=2*PI/300;  
  let s = 'Hello There!! ';
  fill(1000);
  text(s, 10, 10, 70, 80);

  //createA('http://p5js.org/', 'this is a link');

  //mySound = loadSound('../Soundfiles/sb_sanctum.mp3');
  //
  //mySound.play();

  // translucent stroke using alpha value
  stroke(0, 0, 0, 25);
}

 
function draw() {
  // draw two random chords each frame
  if(counter<2000)
  {
    //delayTime(0.11);
    randomChord();
    randomChord();
  }else{
    //mySound.stop();
  }
  
}


function randomChord() {
  // find a random point on a circle
  //let angle1 = random(0, 2 * PI);
  
  
  let xpos1 = (windowWidth)/4*3 + (windowHeight)/4  *cos(no_of_points);
  let ypos1 = (windowHeight)/2 + (windowHeight)/4 * sin(no_of_points);

  // find another random point on the circle
  let angle2 = 2*no_of_points;
  let xpos2 = (windowWidth)/4*3 + (windowHeight)/4* cos(angle2);
  let ypos2 = (windowHeight)/2 + (windowHeight)/4* sin(angle2);

  // draw a line between them
  let R = random(0, 255);
  let G = random(0, 255);
  let B = random(0, 255);
  stroke(R, G, B,15);
  line(xpos1, ypos1, xpos2, ypos2);
  no_of_points=no_of_points*2;
  counter++;

}

