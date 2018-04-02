var speed = .09;
var ballSize = 20;
var width,height;
var missiles = [];
var totalballs = 3;

function missile(x,y){
  this.x = x;
  this.y = y;
  this.lifespan = random(1,3)*255;
  this.speed = random(1,10)*0.005;
}

function setup() {

  width = 700;
  height = 700;
  createCanvas(700, height);
  fill(255);
  for (var i=0;i<totalballs;i++){
    missiles.push(newMissile());
  }
  console.log(missiles);

}

function draw() {
  background(51);
  spawn();
  detect_collision();
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
      m.x += (mouseX-m.x)*m.speed;
      m.y += (mouseY-m.y)*m.speed;
      m.lifespan -=2;
      fill(m.lifespan);
      ellipse(m.x,m.y, ballSize, ballSize);
      stroke(51);
      // console.log("Bye");
      // console.log(m.lifespan);
    }
    missiles[i] = m;
    if(detect_collision(m.x, m.y)){
      alert("Dead");
      missiles[i].lifespan = 0;
    }
  }

}

function detect_collision(x,y){
    if (Math.sqrt(Math.pow((x-mouseX),2)+Math.pow((y-mouseY),2)) <= ballSize){
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