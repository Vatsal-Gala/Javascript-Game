var speed = .09;
var ballSize = 20;
var shipSpeed = 4;
var width,height;
var missiles = [];
var totalballs = 3;
var ship;
var skore = 0;
var hits = 0;

function missile(x,y){
  this.x = x;
  this.y = y;
  this.lifespan = random(1,3)*255;
  this.speed = random(1,10)*0.005;
}

function spaceship(x,y){
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.h = 22;
  this.w = 8;
  this.angle = Math.PI/2;
  this.crashed = false;
  this.color = 255;

}

function setup() {

  width = 700;
  height = 700;
  createCanvas(700, height);
  fill(255);
  ship = new spaceship(width/2,height/2);
  drawSpaceship();
  for (var i=0;i<totalballs;i++){
    missiles.push(newMissile());
  }
  console.log(missiles);

}

function draw() {
  background(51);
  spawn();
  drawSpaceship();
  count();
}

function spawn(item,index){

  // Map function implementation

  for (var i=0;i<totalballs;i++){
    m=missiles[i];
    if (!(m.lifespan>51)){
      idx = missiles.indexOf(m);
      m = newMissile();
    }
    else{
      m.x += (ship.x-m.x)*m.speed;
      m.y += (ship.y-m.y)*m.speed;
      m.lifespan -=2;
      fill(m.lifespan);
      stroke(51);
      ellipse(m.x,m.y, ballSize, ballSize);
      // console.log("Bye");
      // console.log(m.lifespan);
    }
    missiles[i] = m;
    if(detect_collision(m.x, m.y)){
      missiles[i].lifespan = 0;
    }
  }

}

function detect_collision(x,y){
    if (Math.sqrt(Math.pow((x-ship.x),2)+Math.pow((y-ship.y),2)) <= ballSize){
      hits ++;
      return true;
    }
    return false;
}

function newMissile(){
    fx = random(0,width);
    fy = random(0,height);
    m = new missile(fx,fy);
    return m;
}

function drawSpaceship(){
  updateShip();
  rectMode(CENTER);
  fill(ship.color);
  rect(ship.x, ship.y, ship.w, ship.h);
}

function updateShip(){
  if (keyIsDown(LEFT_ARROW)) {
    ship.x -= shipSpeed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    ship.x += shipSpeed;
  }
  if (keyIsDown(UP_ARROW)){
    ship.y -= shipSpeed;
  } else if (keyIsDown(DOWN_ARROW)){
    ship.y += shipSpeed;
  }
}

function count() {
  skore += 1/30;
  fill("WHITE");
  text('Score : '+Math.ceil(skore),20,20);
  if (11 - hits > 0){
    rectMode(CORNER);
    fill("WHITE");
    stroke("WHITE");
    rect(width - 100, 10 , 50 , 20);
    fill("RED");
    stroke("WHITE");
    rect(width - 100, 10 , 5*(10-hits), 20 );
  }
  if (hits == 11){
    hits++;
    alert("Game Over !");
  }
}
