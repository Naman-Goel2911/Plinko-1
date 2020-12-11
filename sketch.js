const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() 
{
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 782, width, 20);
}

function draw() 
{
  background(0);  

  Engine.update(engine);

  //to make the divisions
  for(var k = 0; k <= width; k = k + 80)
  {
     divisions.push(new Divisions(k, height-divisionHeight/2, 15, divisionHeight));
  }

  //to make the plinkos
  for(var j = 10; j <= width; j = j + 35)
  {
      plinkos.push(new Plinko(j, 100, 5))
  }

  for(var j = 20; j <= width; j = j + 35)
  {
      plinkos.push(new Plinko(j, 200, 5))
  }

  for(var j = 5; j <= width; j = j + 35)
  {
      plinkos.push(new Plinko(j, 300, 5))
  }

  for(var j = 15; j <= width; j = j + 35)
  {
      plinkos.push(new Plinko(j, 400, 5))
  }


  //to make the particles
  if(frameCount%50 === 0)
  {
     particles.push(new Particles(random(width/2 - 200, width/2 + 200), 10, 10));
  }

  // to display the divisions
  for(k = 0; k < divisions.length; k++)
  {
     divisions[k].display();
  }

  //to display the plinkos
  for(j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }

  //to display the particles
  for(i = 0; i < particles.length; i++)
  {
    particles[i].display();
  }
  
  ground.display();

  drawSprites();
}