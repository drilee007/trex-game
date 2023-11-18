
var trex ,trexCorrendo;
var chao, chaoImagem, chaoinvisivel;

function preload(){
trexCorrendo = loadAnimation ("trex1.png", "trex3.png", "trex4.png");
chaoImagem = loadImage ("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  trex = createSprite(50,160,20,50);
  trex.addAnimation ("correndo", trexCorrendo);
  trex.scale = 0.5;

  chao = createSprite (200,180,400,20);
  chao.addImage (chaoImagem);
  chaoinvisivel = createSprite (200,190,400,10);
  chaoinvisivel.visible = false;
}

function draw(){
  background("white")

  chao.velocityX = - 5;
  if (chao.x < 0) {
    chao.x = chao.width/2;
  }

  if (keyDown("space")) {
    trex.velocityY = - 8;
  }
  trex.velocityY = trex.velocityY + 0.8;

  trex.collide (chaoinvisivel);
  drawSprites();

}