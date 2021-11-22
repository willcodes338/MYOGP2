var bg, bgImg;
var man1, man2, man3, manImg;
var tree1,tree2,tree3;

function preload(){
 bgImg = loadImage("field.png");
 manImg = loadImage("construction worker.png");
 treeImg = loadImage("tree.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(displayWidth/2,displayHeight/2);
  bg.addImage(bgImg);
  bg.scale = 2;
  man1 = createSprite(displayWidth/3, displayHeight/2+200, 20, 50);
  man1.addImage(manImg);
  man2 = createSprite(displayWidth/2+400, displayHeight/2+200, 20, 50);
  man2.addImage(manImg);
  man3 = createSprite(displayWidth/2+150, displayHeight/2+300, 20, 50);
  man3.addImage(manImg);
  tree1 = createSprite(displayWidth/3+170,displayHeight/2+180,20,70)
  tree1.addImage(treeImg);
  tree1.scale = 0.6
}

function draw() {
  background("lightblue");  
  drawSprites();
}