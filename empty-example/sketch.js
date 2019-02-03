function setup() {
  // put setup code here
}

let value = 0;
function draw() {
  // put drawing code here, called continously
  /*
  if mouse
  let c = color(255, 204, 0);
  fill(c);
  noStroke();
  ellipse(100, 100, 200, 200);
  */
    fill(value);
    ellipse(25, 25, 50, 50);
  }

  function mouseClicked() {
  if (dist(25, 25, mouseX, mouseY) < 50)
  {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
  }



}
