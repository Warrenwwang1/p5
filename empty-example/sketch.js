/*function preLoad()
{
  myFont = loadFont('Calibri.ttf');
}*/
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(255, 255, 255);

}
var sequence = new Array(Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10));
var len = sequence.length
let value = 0;
var numSorts = 0;

function draw() {
  textFont('Calibri')


    console.log(sequence);
    background(backgroundColor);
    //stroke(0)
    //strokeWeight(3)
    textSize(100);
    fill(14, 77, 146);
    let s = "BOGOSORT";
    textAlign(CENTER)
    text(s, windowWidth/2, windowHeight/8);
    strokeWeight(1)

    //clickable num of sequence button
    fill(255)
    rectMode(CENTER)
    rect(730, 160, 22, 35)
    noStroke()

    textSize(30)
    fill(0)
    text("Sorting " + sequence.length + " digits", windowWidth/2, 170)

    if(mouseX>719 && mouseX<741 && mouseY>143 && mouseY<178)
    {
      isOverNumber = true;
    } else {
      isOverNumber = false;
    }

    //making clickable 'sort!' button
    if(mouseX>(windowWidth/2 - 200) && mouseX<(windowWidth/2 + 200) && mouseY>510 && mouseY<610)
    {
      isOverButton = true;
    } else {
      isOverButton = false;
    }

    if(isOverButton == true)
    {
      fill(180, 220, 240);
      cursor(HAND);
    } else {
      fill(170, 210, 230);
      cursor(ARROW);
    }
    rectMode(CENTER)
    stroke(10)
    strokeWeight(1)
    rect(windowWidth/2, 560, 400, 100);
    noStroke()

    textSize(70);
    fill(0);
    if (checkSorted(sequence))
    {
      result = "SORTED!"
    }
    else{
      result = "SORT"
    }
    text(result, windowWidth/2, 580);

    //spongebobMeme
    //image(img, windowWidth/2 - 100, 580, 20, 20)

    //stepcounter
    textAlign(LEFT)
    textSize(30)
    fill(40)
    text("Steps: "+ numSorts, 20, 40)
    textAlign(CENTER)


    let x = windowWidth/(sequence.length+1);
    rectMode(CORNERS)
    textAlign(LEFT)
    for (z in sequence)
    {

      fill(255-(sequence[z]*22));
      textSize(70);
      rect(x, 320, x+40, 320-sequence[z]*12)
      fill(0)
      text(String(sequence[z]), x+4, 350, 100, 100);

      x = x+windowWidth/(sequence.length+1);
    }
    rectMode(CORNER)
    textAlign(CENTER)

    if (checkSorted(sequence))
    {
      noLoop();

      /*if (numSorts != 1)
      {
        result = "S"
      }
      else{
        var msg = "That took "+ numSorts +" step to sort!"
      }
      textSize(20)
      text(msg, windowWidth/2, 480)*/
    }

    //END OF DRAW

  }
  //checks if sequence is sorted
  function checkSorted(s)
  {
      let len = s.length
      for (let i = 0; i < len; i++) {

      if (i == s.length-1)
      {
        return true;
      }

      else if (s[i] > s[i+1])
      {
        return false;
      }
    }
    return true;
  }

  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function sequenceChanger(sequence)
{
  var newSequence = new Array()
  var i = 0
  while (i<len)
  {
    append(newSequence, Math.floor(Math.random()*10))
    i++;

  }
  numSorts = 0;
  console.log(newSequence)
  return newSequence
}


  function mousePressed()
  {
  if(isOverButton == true)
  {
    //backgroundColor = color(random(160, 180), random(200, 220), random(220, 240));
    numSorts ++;
    sequence = shuffle(sequence)


  }
  if(isOverNumber == true)
  {
    //change sequence length
    //text(key, 200, 200)
    len ++;
    len = len%10
    if (len == 0)
    {
      len = 3
    }

    sequence = sequenceChanger(sequence)
    if (checkSorted(sequence))
    {
      sequence = shuffle(sequence)
    }
    len = sequence.length
  }

}
