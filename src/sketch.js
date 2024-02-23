function setup() {
  createCanvas(400, 400);
  background(182,225,155);
}

function draw() {
  //---------- Background -------------------------
  push();
  //puddle
    noStroke();
    fill(146,180,155)
    ellipse(210,260,300,150)
  //puddle shadow
    fill(145,216,230)
    ellipse(200,250,300,150)
  //lilypad
    fill(52,163,99)
    arc(150, 270, 40, 40, 0, PI + QUARTER_PI)

  pop();

  //---------- Creature--- -------------------------
  push();

    translate(130,130);

    //body
    fill(167,117,67)
    noStroke();  
    rect(0, 0, 150, 70, 20);
    //legs
    rect(0,50,20,45)
    rect(130,50,20,55)
    //feet
    fill(138,99,67)
    ellipse(4,95,35,20)
    ellipse(134,100,35,20)
    //ear
    fill(138,99,67)
    triangle(20,-50,40,0,-20,10) 
    //head
    fill(167,117,67)
    rect(-50, -35, 90, 55, 20);
    //nose
    stroke(90,63,67)
    fill(138,99,67)
    rect(-50, -35, 25, 55, 20);
    fill(90,63,67)
    ellipse(-45,-20,7,15)
    //eye
    fill(0,0,0)
    ellipse(0,-20,15,7)
    fill(255,255,255)  
    ellipse(5,-21,3,2)
    //mouth
    stroke(0)
    line(-49,10,-40,10)
  
  pop();
}