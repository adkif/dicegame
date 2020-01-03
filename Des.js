let winWidth = 600;
let winHeigth = 600;
let init = 0;
let firstDice;
let secondDice;
let ply1;
let ply2;
let pointStop;
let button;
let action;


class Dice {
  constructor(a, x){
    this.a = a;
    this.x = x;
    this.render(ceil(random(6)));
  }
  
  render(point){
    
    fill(228, 34, 34);
    noStroke();
    rect(winWidth/2 + this.x - this.a/2, winHeigth/2 - this.a/2, this.a, this.a);
    fill(255);
    switch(point) {
      case 1 :  ellipse(winWidth/2 + this.x, winHeigth/2, this.a/8, this.a/8);
                break;
                
      case 2 :  ellipse(winWidth/2 + this.x - this.a/4, winHeigth/2 + this.a/4, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x + this.a/4, winHeigth/2 - this.a/4, this.a/8, this.a/8);
                break;
                
      case 3 :  ellipse(winWidth/2 + this.x, winHeigth/2, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x - this.a/4, winHeigth/2 + this.a/4, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x + this.a/4, winHeigth/2 - this.a/4, this.a/8, this.a/8);
                break;
                
      case 4 :  ellipse(winWidth/2 + this.x + this.a/4, winHeigth/2 + this.a/4, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x - this.a/4, winHeigth/2 - this.a/4, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x - this.a/4, winHeigth/2 + this.a/4, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x + this.a/4, winHeigth/2 - this.a/4, this.a/8, this.a/8);
                break;
                
      case 5 :  ellipse(winWidth/2 + this.x + this.a/4, winHeigth/2 + this.a/4, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x, winHeigth/2, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x - this.a/4, winHeigth/2 - this.a/4, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x - this.a/4, winHeigth/2 + this.a/4, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x + this.a/4, winHeigth/2 - this.a/4, this.a/8, this.a/8);
                break;
      
      case 6 :  ellipse(winWidth/2 + this.x + this.a/4, winHeigth/2 + this.a/4, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x + this.a/4, winHeigth/2, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x - this.a/4, winHeigth/2, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x - this.a/4, winHeigth/2 - this.a/4, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x - this.a/4, winHeigth/2 + this.a/4, this.a/8, this.a/8);
                ellipse(winWidth/2 + this.x + this.a/4, winHeigth/2 - this.a/4, this.a/8, this.a/8);
                break;          
      
    }
    return point;
  }
  
  roll(){
    return this.render(ceil(random(6)));
  }
}




function setup() {
  createCanvas(winWidth, winHeigth);
  firstDice = new Dice(100, 100);
  secondDice = new Dice(100, -100);
  ply1 = 0;
  ply2 = 0;
  pointStop = 6;
  button = createButton("Lancer");
  button.mousePressed(play);
}

function play () {
  action = 0;
}

function draw() {
  background(200);
  text('Score: '+init, 20, 20);
  text('Value 1: '+ply1, 20, 40);
  text('Value 2: '+ply2, 20, 60);
  if(action === 0) {
    if((ply1 === pointStop) && (ply2 === pointStop)){
      text('Finish', winWidth/2, 20);
      firstDice.render(pointStop);
      secondDice.render(pointStop);
    }else{
      ply1 = firstDice.roll();
      ply2 = secondDice.roll();
      init = init + 1;
    }
    action = action + 1;
  }
}
