

var no_of_points;
var counter = 0;
//let mySound;
let song;
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
}


function preload() {
  soundFormats('mp3');
  song = loadSound('maxkomusic-nature');

}


function setup() {
  //soundFormats('mp3', 'ogg');
  //mySound = loadSound('sb_sanctum');
  createCanvas(windowWidth, windowHeight);
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(canvasPressed);
  background(0, 0, 0);
  no_of_points = 2 * PI / 300;
  let s = 'Hello There!! ';
  fill(1000);
  text(s, 10, 10, 70, 80);
  let s1 = 'This is Sandesh, Welcome to my github ';
  fill(1000);
  text(s1, 10, 50, 7000, 1000);

  link = createA('https://github.com/sandeshdevadiga', 'Check my projects here');
  //link.fill(1000);
  link.position(10, 70, 7000, 1000);
  //mySound = loadSound('../Soundfiles/sb_sanctum.mp3');
  //
  //mySound.play();
  // translucent stroke using alpha value
  frameRate(4);
  stroke(0, 0, 0, 25);
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
  // find a random point on a circle
  //let angle1 = random(0, 2 * PI);


  let xpos1 = (windowWidth) / 4 * 3 - windowHeight / 4 + (windowHeight) / 4 * cos(no_of_points);
  let ypos1 = (windowHeight) / 2 + (windowHeight) / 4 * sin(no_of_points);

  // find another random point on the circle
  let angle2 = 2 * no_of_points;
  let xpos2 = (windowWidth) / 4 * 3 - windowHeight / 4 + (windowHeight) / 4 * cos(angle2);
  let ypos2 = (windowHeight) / 2 + (windowHeight) / 4 * sin(angle2);

  // draw a line between them
  let R = random(0, 255);
  let G = random(0, 255);
  let B = random(0, 255);
  stroke(R, G, B, 15);
  line(xpos1, ypos1, xpos2, ypos2);
  no_of_points = no_of_points * 2;
  counter++;
  //mySound.play();
}


// let mySound;
// function preload() {
//   soundFormats('mp3', 'ogg');
//   mySound = loadSound('sb_sanctum.mp3');
// }

// function setup() {
//   let cnv = createCanvas(100, 100);
//   cnv.mousePressed(canvasPressed);
//   background(220);
//   text('tap here to play', 10, 20);
// }

// function canvasPressed() {
//   // playing a sound file on a user gesture
//   // is equivalent to `userStartAudio()`
//   mySound.play();
// }
