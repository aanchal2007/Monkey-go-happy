var banana, bananaImage, jungle, jungleImage;
var player, playerImage, player_running;
var obstacle, obstacleImage;

function preload(){  
  jungleImage=loadImage("jungle.jpg");
  
  bananaImage=loadImage("Banana.png")
  
  obstacleImage = loadImage("stone.png");
  
   player_running = loadImage("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")
}

  
  
function setup() {
  createCanvas(500,500);
  
  playerGroup = new Group();
  
  jungle = createSprite(0, 0, 400, 600);
  jungle.addImage(jungleImage);
  jungle.scale=0.9;
  jungle.velocityX=-3;
  jungle.x=jungle.width / 2;
  
  banana = createSprite(200, 200);
  banana.addImage(bananaImage);
  banana.scale=0.05;
  
  obstacle = createSprite(100, 200);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;  

}

function draw(){
  
 if (jungle.x < 0) {
    jungle.x=jungle.width/2;
  }
  
  drawSprites();
}

