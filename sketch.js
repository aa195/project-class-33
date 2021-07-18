const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;




var backgroundImg;
var engine,world;
var snow, snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10;

function preload(){
  getBackgroundImg();
}
function setup() {
 var canvas =  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  snow = new Snow(50,100,50,50);
  snow1 = new Snow(100,10,50,50);
  snow2 = new Snow(250,150,50,50);
  snow3 = new Snow(300,120,50,50);
  snow4 = new Snow(350,20,50,50);
  snow5 = new Snow(500,70,50,50);
  snow6 = new Snow(550,100,50,50);
  snow7 = new Snow(600,150,50,50);
  snow8 = new Snow(750,100,50,50);
  snow9 = new Snow(800,10,50,50);
  snow10 = new Snow(400,20,50,50);


}

function draw() {
  if(backgroundImg)
        background(backgroundImg);

        Engine.update(engine);
  //("snow3.jpg"); 
  snow.display();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  
  //drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=00 && hour<=24){
      bg = "snow3.jpg";
  }
  

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}