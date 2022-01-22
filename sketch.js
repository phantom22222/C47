var bg,bgImg;
var player, shooterImg, shooter_shooting;
var Zombie,zombieImg;
var ZombieImg1;
var bulletImg;
var bulletGroup;
var bullet = 75;



function preload(){
  
  shooterImg = loadImage("assets/shooter_3.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  zombieImg1 = loadImage("assets/zombie1.png")

 



  bgImg = loadImage("assets/bg.jpeg")
  bulletImg = loadImage("assets/bullet1.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  bulletGroup = new Group();

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.10
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if(keyDown("v")){
  bullet = createSprite(displayWidth-1150,player.y-30,20,10);  
  bullet.velocityX = 20;
  bulletGroup.add(bullet);
  player.depth = bullet.depth;
  player.depth = player.debth+2;
  player.addImage(shooter_shooting)
  bullet = bullet-1;
  
}




enemy();


drawSprites();


}

function enemy(){
  if(frameCount%150 === 0) {
    zombie = createSprite((500,1100),(100,500),45,55);
    zombie.addImage(zombieImg1);
    zombie.scale=0.5;
    zombie.velocityX = -3;
    zombie.lifetime = 500;
    //zombie.lifetime = 200

  }

  


  
}
