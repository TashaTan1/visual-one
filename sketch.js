/***************************************************************************************
*    Title: InKleined to dance
*    Author: Sophia (fractal kitty)
*    Date: n.d.
*    Code version: 1.0
*    Availability: https://codepen.io/fractalkitty/pen/OJZxXBM
*
***************************************************************************************/

let one;
let timer = 5;
let button;

a = 130; 
uLim = 8; //change these for density
vLim = 7;

function preload() {
  // LOAD SOUND
  one = loadSound("ONE.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  noStroke();

  one.play();
  one.loop();
}
function draw() {
  // animation of visual
  t = frameCount / 2; 
  specularMaterial(255);
  pointLight(
    225 * abs(cos(t / 4)),
    245 * abs(cos(t / 4)),
    255 * abs(cos(t / 4)),
    -2000,
    -2000,
    -2000
  );
  background(
    205 * abs(sin(t / 4)),
    245 * abs(sin(t / 4)),
    255 * abs(sin(t / 4))
  );
  inKlein(1);
  inKlein(0.5);
  inKlein(0.2);
//timer
  if (frameCount % 60 == 0 && timer > 0) {
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer--;
  }
  //  console.log(timer);
  if (timer == 0) {
    button = createButton("Back to Frequencies");
    button.position(1, 1);
    button.mousePressed(function goToAnotherPage() {
      window.location.href =
        "https://tashatan1.github.io/front-page-/";
    });
    button = createButton("Let's Breath");
    button.position(1, 5);
    button.mousePressed(function goToAnotherPage() {
      window.location.href =
        "https://tashatan1.github.io/let-s-breath/";
    });
  }
}
//rotate visual
function inKlein(s) {
  rotateY(t);
  rotateZ(90 + t);
  rotateX(t);
  for (let j = 0; j < 360; j += vLim) {
    for (let i = 0; i < 360; i += uLim) {
      push();
      scale(s, s, s);

      u = i + 360 * sin(t / 4); 
      v = j;
      x = (2 + cos(v / 2) * sin(u) - sin(v / 2) * sin(2 * u)) * cos(v);
      y =
        (2 + cos(v / 2 + 60 * sin(t)) * sin(u) - sin(v / 2) * sin(2 * u)) *
        sin(v);
      z = sin(v / 2) * sin(u) + cos(v / 2) * sin(2 * u);
      translate(
        a * x + tan(90 + t / 100),
        a * y + tan(90 + t / 100),
        a * z + tan(90 + t / 100)
      );
      sphere(5 + 3 * cos(t));
      pop();
    }
  }
}

