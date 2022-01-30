
var no_of_points;
var counter = 0;
let cnv;
//let mySound;
let song;
function windowResized() {
  cnv.resizeCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  textSize(16);
  let s = 'Hello There!! ';
  fill(1000);
  text(s, 10, 10, 700, 800);
  let s1 = 'This is Sandesh, Welcome to my github account ';
  fill(1000);
  text(s1, 10, 50, 7000, 1000);
  let s2 = 'I am C++ Developer, Working for Car Infotainment Systems at RBEI';
  fill(1000);
  text(s2, 10, 70, 7000, 1000);
  let s3 = 'I am just getting started here!. I look forward to some amazing collaberations ';
  fill(1000);
  text(s3, 10, 90, 7000, 1000);
  let s4 = 'Have a great day';
  fill(1000);
  text(s4, 10, 110, 7000, 1000);
}


function preload() {
  soundFormats('mp3');
  song = loadSound('maxkomusic-nature');
}


function setup() {

  createCanvas(windowWidth, windowHeight);
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0,0);
  cnv.style('z-index','-1');
  cnv.mousePressed(canvasPressed);
  //background(175);
  background(0, 0, 0);
  no_of_points = 2 * PI / 300;
  // textSize(16);
  // let s = 'Hello There!! ';
  // fill(1000);
  // text(s, 10, 10, 700, 800);
  // let s1 = 'This is Sandesh, Welcome to my github account ';
  // fill(1000);
  // text(s1, 10, 50, 7000, 1000);
  // let s2 = 'I am C++ Developer, Working for Car Infotainment Systems at RBEI';
  // fill(1000);
  // text(s2, 10, 70, 7000, 1000);
  // let s3 = 'I am just getting started here!. I look forward to some amazing collaberations ';
  // fill(1000);
  // text(s3, 10, 90, 7000, 1000);
  // let s4 = 'Have a great day';
  // fill(1000);
  // text(s4, 10, 110, 7000, 1000);
  // link = createA('https://github.com/sandeshdevadiga', 'Check my projects here');
  // //link want to set color and change text size, Can I do it?
  // link.position(10, 130, 7000, 1000);
  // link1 = createA('https://www.linkedin.com/in/sandeshdevadiga/', 'Connect');
  // link1.position(10, 150, 7000, 1000);
  frameRate(4);
  stroke(0, 0, 0, 1005);
}


function canvasPressed() {
  if (song.isPlaying()) {
    song.pause();
  }
  else {
    song.play();
  }
}


function draw() {
  // draw two random chords each frame
  //delayTime(0.11);
  randomChord();
  randomChord();


}


function randomChord() {

  let xpos1 = (windowWidth) / 4 * 3 - windowHeight*2 / 4 + (windowHeight)*2 / 4 * cos(no_of_points);
  let ypos1 = (windowHeight) / 2 + (windowHeight) *2/ 4 * sin(no_of_points);

  // find another random point on the circle
  let angle2 = 2 * no_of_points;
  let xpos2 = (windowWidth) / 4 * 3 - windowHeight *2/ 4 + (windowHeight)*2 / 4 * cos(angle2);
  let ypos2 = (windowHeight) / 2 + (windowHeight)*2 / 4 * sin(angle2);

  // draw a line between them
  let R = random(0, 255);
  let G = random(0, 255);
  let B = random(0, 255);
  stroke(R, G, B, 45);
  line(xpos1, ypos1, xpos2, ypos2);
  no_of_points = no_of_points * 2;
  counter++;
  //Want to autoplay sound !, How can I do it?
}

