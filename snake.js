var size = 10;
var speed = .09;
var fx ,fy;
var lifespan = 255.0;
function setup() {
  createCanvas(800, 400);
  fx = random(0,800);
  fy = random(0,400);
  fill(255);
  ellipse(fx, fy, 20, 20);
}

function draw() {
  background(51);
  spawn();
  fx += (mouseX-fx)*speed;
  fy += (mouseY-fy)*speed;

}

function spawn(){
  stroke(51);
  fill(lifespan-=2);
  if(lifespan > 51)
    ellipse(fx, fy, 20, 20);
  else{
    fx = random(0,800);
    fy = random(0,400);
    lifespan = 255.0;
    ellipse(fx,fy,20,20);
    }
}
