var ground,groundImage;
var doremon,doremonImage;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9,obstacle10,obstacle11,obstacle12,obstacle13,obstacle14;
var gadget1,gadget2,gadget3,gadget4,gadget5,gadget6,gadget7,gadget8,gadget9,gadget10,gadget11;
var obstacle;
var gadget;
var gameOverImage,restartImage;
var score = 0;
var gameOver,restart
var points,pointsImage;

function preload(){

groundImage=loadImage("Images/Ground.jpg");
doremonImage=loadImage("Images/Doremon.png");
obstacle1=loadImage("Images/house1.png");
obstacle2=loadImage("Images/house2.png");
obstacle3=loadImage("Images/house3.png");
obstacle4=loadImage("Images/house4.png");
obstacle5=loadImage("Images/house5.png");
obstacle6=loadImage("Images/pole.png");
obstacle7=loadImage("Images/tree1.png");
obstacle8=loadImage("Images/treen2.png");
obstacle9=loadImage("Images/tree3.png");

gadget1=loadImage("Images/Gadget1.png");
gadget2=loadImage("Images/Gadget2.png");
gadget3=loadImage("Images/Gadget3.png");
gadget4=loadImage("Images/Gadget4.png");
gadget5=loadImage("Images/Gadget5.png");
gadget6=loadImage("Images/Gadget6.png");
gadget7=loadImage("Images/Gadget7.png");
gadget8=loadImage("Images/Gadget8.png");
gadget9=loadImage("Images/Gadget9.png");
gadget10=loadImage("Images/Gadget10.png");
gadget11=loadImage("Images/Gadget11.png");

gameOverImage=loadImage("Images/Gameover.png");
restartImage=loadImage("Images/restart.png");

pointsImage=loadImage("Images/score.png");


}



function setup() {

  createCanvas(1300,600);

  ground=createSprite(650,300);
  ground.addImage(groundImage);
  ground.scale = 5;
  ground.velocityX = -3;

  doremon=createSprite(100,300,50,50);
  doremon.addImage(doremonImage);
  doremon.scale = 0.5;

  points=createSprite(60,70,50,50);
  points.addImage(pointsImage);
  points.scale = 0.2;
  gameOver=createSprite(650,300,100,100)
  gameOver.addImage(gameOverImage);

  restart=createSprite(650,420,100,100);
  restart.addImage(restartImage);
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;

  obstacleGroup = new Group();
  gadgetGroup = new Group();

}


function draw() {

  background(0,0,0); 
  text(score, 60,70); 
  if(ground.x<0)
  {
    ground.x=ground.width/2;
  }

  if(keyDown(UP_ARROW))
  {
    doremon.velocityY = -5;
  }

  if(keyDown(DOWN_ARROW))
  {
    doremon.velocityY = 5;
  }

  if(obstacleGroup.isTouching(doremon))
  {
        gameOver.visible = true;
        restart.visible = true;

        ground.velocityX = 0;
        doremon.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        gadgetGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        gadgetGroup.setLifetimeEach(-1);

              
  }

 

  spawnGadgets();
  spawnObstacles();
  drawSprites();

}

function spawnObstacles()
{
  if(frameCount%200===0)
  {
    obstacle=createSprite(1200,470,50,50);
    obstacle.velocityX = -5;
    obstacle.scale = 0.8;
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      case 7: obstacle.addImage(obstacle7);
              break;
      case 8: obstacle.addImage(obstacle8);
              break;
      case 9: obstacle.addImage(obstacle9);
              break;        
      default: break;
      
    }

    obstacle.lifetime = 240;
    obstacleGroup.add(obstacle);
  }
}

 function spawnGadgets()
 {
   if(frameCount%170===0)
   {
      gadget = createSprite(1200,190,50,50);
      gadget.velocityX = -8;
      gadget.scale = 0.5;

      gadget.y = Math.round(random(100,250))
      var rand = Math.round(random(1,11)) 
      switch(rand){
        case 1: gadget.addImage(gadget1);
                break;
        case 2: gadget.addImage(gadget2);
                break;
        case 3: gadget.addImage(gadget3);
                break;
        case 4: gadget.addImage(gadget4);
                break;
        case 5: gadget.addImage(gadget5);
                break;
        case 6: gadget.addImage(gadget6);
                break;
        case 7: gadget.addImage(gadget7);
                break;
        case 8: gadget.addImage(gadget8);
                break;
        case 9: gadget.addImage(gadget9);
                break;
        case 10: gadget.addImage(gadget10);
                break;
        case 11: gadget.addImage(gadget11);
                break;
      }
      gadget.lifetime = 150;
      gadgetGroup.add(gadget);
   }
 }

