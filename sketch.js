const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var division=[]
var divisionHeight=300;
var pilinko=[]
var particle=[];
var score=0;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground =new Ground(width/2,height,width,10);
  for(var k=0;k<=width;k=k+80){
    division.push( new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j=50;j<=width;j=j+50){
    pilinko.push(new Pilinko(j,75))
  }

  for(var m=30;m<=width;m=m+40){
    pilinko.push(new Pilinko(m,120))
  }
  
  for(var n=20;n<=width;n=n+60){
    pilinko.push(new Pilinko(n,170))
  }
  for(var b=20;b<=width;b=b+40){
    pilinko.push(new Pilinko(b,220))
  }
  for(var x=20;x<=width;x=b+40){
    pilinko.push(new Pilinko(b,220))
  }

}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  for(k=0;k<division.length;k++){
    division[k].display();
  }
  for(j=0;j<pilinko.length;j++){
    pilinko[j].display();
  }
  for(n=0;n<pilinko.length;n++){
    pilinko[n].display();
  }


  for(m=0;m<pilinko.length;m++){
    pilinko[m].display();
  }
  for(b=0;m<pilinko.length;b++){
    pilinko[b].display();
  }
  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-30,width/2+30),10))
    score++
  }
  for(j=0;j<particle.length;j++){
    particle[j].display();
  }

  if(frameCount%100===0){
    particle.push(new Particle(random(width/2-30,width/2+30),10))
    score++
  }
  for(v=0;v<particle.length;v++){
    particle[v].display();
  }

  if(frameCount%30===0){
    particle.push(new Particle(random(width/2-30,width/2+30),10))
    score++
  }
  for(b=0;b<particle.length;b++){
    particle[b].display();
  }
  text("score:"+score,20,30)
}
