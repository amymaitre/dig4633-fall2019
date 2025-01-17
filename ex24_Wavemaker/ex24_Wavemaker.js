/*
 * @name Wavemaker
 * @description This illustrates how waves (like water waves) emerge
 * from particles oscillating in place. Move your mouse to direct the wave.
 * Contributed by Aatish Bhatia, inspired by <a href="https://beesandbombs.tumblr.com/post/45513650541/orbiters">Orbiters</a> by Dave Whyte.
 */

let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(40, 20, 40);
}

function draw() {
  background(10, 100); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 60) {
      // starting point of each circle depends on mouse position
      let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      let myX = x + 20 * cos(2 * PI * t + angle);
      let myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}
