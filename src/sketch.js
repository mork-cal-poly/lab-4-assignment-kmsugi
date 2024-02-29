let capyX = -200;
let capyY = 130;
let moveCapybara = false;
let partyhatY = -150;
let partyhatVisible = false;


function setup() {
 let myCanvas = createCanvas(400, 400);
 myCanvas.parent("canvas-parent");
 background(182, 225, 155);
}


function draw() {
 background(182, 225, 155);


 drawBackground(400, 400);


 if (moveCapybara) {
   capyX = capyX + 1;
   capyY = capyY;


   if (capyX > 125) {
     moveCapybara = false;
     partyhatVisible = true;

   }
 }

 drawCapybara(capyX, capyY);


 if (!moveCapybara && partyhatVisible) {
   drawPartyhat(capyX, capyY);

   if (partyhatY >= -1){
    drawCelebrationImage();

   }
 }
 }


function drawCapybara(x, y) {
 push();
 translate(x, y);
 fill(167, 117, 67);
 noStroke();
 rect(0, 0, 10, 50);


 // Draw capybara's features
 drawCapybaraFeatures();


 pop();
}


function drawCapybaraFeatures() {
 //body
 fill(167, 117, 67);
 noStroke();
 rect(0, 0, 150, 70, 20);


 //legs
 rect(0, 50, 20, 45);
 rect(130, 50, 20, 55);


 //feet
 fill(138, 99, 67);
 ellipse(4, 95, 35, 20);
 ellipse(134, 100, 35, 20);


 //ear
 fill(138, 99, 67);
 triangle(20, -50, 40, 0, -20, 10);


 //head
 fill(167, 117, 67);
 rect(-50, -35, 90, 55, 20);


 //nose
 stroke(90, 63, 67);
 fill(138, 99, 67);
 rect(-50, -35, 25, 55, 20);
 fill(90, 63, 67);
 ellipse(-45, -20, 7, 15);


 //eye
 fill(0, 0, 0);
 ellipse(0, -20, 15, 7);
 fill(255, 255, 255);
 ellipse(5, -21, 3, 2);


 //mouth
 stroke(0);
 line(-49, 10, -40, 10);
}


function drawBackground(x, y) {
 //background
 push();
 noStroke();


 //puddle
 fill(146, 180, 155);
 ellipse(210, 260, 300, 150);


 //puddle shadow
 fill(145, 216, 230);
 ellipse(200, 250, 300, 150);


 //lilypad
 fill(52, 163, 99);
 arc(150, 270, 40, 40, 0, PI + QUARTER_PI);


 pop();
}

function drawCelebrationImage() {
  //party horn
  noStroke(0);
  fill(255,105,180)
  rect(26,135,50,10);
  fill(255,105,180)
  stroke(1);
  ellipse(26,135,20);
  ellipse(26,135,10);
  ellipse(26,135,5);
//confetti
  noStroke();
  ellipse(100,350,10);
  ellipse(210,140,10);
  ellipse(140,40,10);
  ellipse(20,330,10);
  fill(255,255,255)
  ellipse(190,200,10);
  ellipse(0,140,10);
  ellipse(190,330,10)
  fill(0,150,255)
  ellipse(-140,15,10);
  ellipse(190,70,10);
  ellipse(140,230,10);
  ellipse(300,300,10);
}

function drawPartyhat(x, y) {
 push();
 translate(x, y + partyhatY);
 drawPartyhatShape();
 pop();


 partyhatY = partyhatY + 1;


 if (partyhatY >= -1){
   partyhatY = -1;
 }
}


function drawPartyhatShape() {
 fill(255, 105, 180);
 triangle(10, -77, -10, -32, 30, -32);
}


function mousePressed() {
 moveCapybara = true;
}
