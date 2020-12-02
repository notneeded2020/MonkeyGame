
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var survivalTime = 0;
var ground;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (400,400);
  
  ground = createSprite (400,350,900,10);
  
  monkey = createSprite (50,315,30,20);
  monkey.addAnimation ("running", monkey_running);
  monkey.scale = 0.1;
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background ("lightGreen");
  
  
// adding velocity to ground
  ground.velocityX = -4;
  if (ground.x < 0){ 
    ground.x = ground.width/2;
  }
  
  
  // logging ground x position
 console.log (ground.x);
 
  // monkey jumps if space key is pressed
  if(keyDown ("space") && monkey.y >= 150){
    monkey.velocityY = -10; 
  }
  
  //adding gravity
  monkey.velocityY = monkey.velocityY + 1;
  
  //saving monkey from going underground and dying
  monkey.collide (ground);
  
  //calling banana and obstacle function
  spawnBanana();
  spawnObstacles ();
  
  //displaying survival time
  textSize (20);
  fill ("red");
  survivalTime = Math.ceil (frameCount/frameRate())
  text ("Survival Time :" + survivalTime,100,50);
  
  
  
  
  
  drawSprites();
}


function spawnBanana (){
  if (frameCount % 80 === 0){
    
   banana = createSprite (400,40,10,10);
   banana.addImage (bananaImage);
   banana.scale = 0.1
   banana.y = Math.round (random(120,250)); 
   banana.velocityX = -5;
   banana.lifetime = 100;
   
   foodGroup.add(banana);
    
     
  } 
  
}

function spawnObstacles (){
  if (frameCount % 300 === 0){
    
   obstacle = createSprite (400,325,10,10);
   obstacle.addImage (obstacleImage);
   obstacle.scale = 0.1;
   //obstacle.y = Math.round (random(120,250)); 
   obstacle.velocityX = -5;
   obstacle.lifetime = 100;
   
   obstacleGroup.add(obstacle);
    
     
  } 
  
}









