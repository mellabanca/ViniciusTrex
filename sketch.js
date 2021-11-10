var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var clouds;
var imgclouds;


var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  imgclouds= loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  console.log(5+"     Oi");
  
  //gerar números aleatórios
  var rand =  Math.round(random(1,100))
  //console.log(rand)

}

function draw() {
//console.log(frameCount);
  //definir cor do plano de fundo
  background(180);
  
  //console.log(trex.y)
  
  
  
  // pulando o trex ao pressionar a tecla de espaço
  if(keyDown("space")&& trex.y >= 150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);
  
  //Gerar Nuvens
  spawnClouds()
  
  drawSprites();
}

//função para gerar as nuvens
function spawnClouds(){
 //escreva seu código aqui



if(frameCount%60 ===0){
  clouds= createSprite(600,100,40,10);
  clouds.y = Math.round(random(10,100));
  clouds.addImage(imgclouds);
  clouds.depth = trex.depth;
  trex.depth = trex.depth+1;
  clouds.velocityX= -3;

  clouds.lifetime = 250;
}




}



