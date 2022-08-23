var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["364a4fc2-2f2d-41ea-8269-7071f70d7342"],"propsByKey":{"364a4fc2-2f2d-41ea-8269-7071f70d7342":{"name":"screamer.jfif_1","sourceUrl":"assets/v3/animations/RKUr8ru0bdDWMtdNVHsGntjEt6yRdP7L5yllnqW1gNo/364a4fc2-2f2d-41ea-8269-7071f70d7342.png","frameSize":{"x":300,"y":168},"frameCount":1,"looping":true,"frameDelay":4,"version":"LYo.IIz6MCOT1ip5iVD_J09t7EbJsgJT","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":168},"rootRelativePath":"assets/v3/animations/RKUr8ru0bdDWMtdNVHsGntjEt6yRdP7L5yllnqW1gNo/364a4fc2-2f2d-41ea-8269-7071f70d7342.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Crear al jugador ball
var ball= createSprite(370, 380, 20,20);
ball.shapeColor="red"



//Crear las paredes del laberinto (wall1 - wall22)
var wall1 = createSprite(50, 100,100,20);
var wall2 = createSprite(400, 80,200,20); 
var wall3 = createSprite(200, 200.200,20);
var wall4 = createSprite(170, 200,50,20);
var wall5 = createSprite(330, 400,20,150);
var wall6 = createSprite(75, 300,150,20);
var wall7 = createSprite(50,   250,20,90);
var wall8 = createSprite  (0,  150,200,20);
var wall9 = createSprite(100,  325,20,70);
var wall10 = createSprite(400, 260,160,20);
var wall11 = createSprite(300, 350,60,20);
var wall12 = createSprite(300, 70,20,40);
var wall13 = createSprite(150, 0,20,200);
var wall14 = createSprite(350, 100,20,50);
var wall15 = createSprite(270, 335,20,50);
var wall16 = createSprite(200, 150,100,20);
var wall17 = createSprite(250, 200,200,20);
var wall18 = createSprite(240, 100,20,100);
var wall19 = createSprite(100, 250,100,20);
var wall20 = createSprite(200, 300,20,100);
var wall21 = createSprite(100, 72,20,75);
var wall22 = createSprite(270, 300,20,50);




//Crear la copa.
var cup = createSprite(10, 75,30,30);

  
function draw() {
  //Coloca el fondo de color azul cielo.
  background("skyblue");

if(keyDown("left")){
    ball.x=ball.x -10;
  }
 if(keyDown("right")){
    ball.x=ball.x +10;
  
}
 if(keyDown("up")){
    ball.y=ball.y -10;
  
  }
  if(keyDown("down")){
    ball.y=ball.y +10;
  }
  
  if (ball.collide(cup)) {
      background("white");

            



 }
 ball.bounceOff(createEdgeSprites()); 
 fill("red");
  textSize(40);
  
if (ball.isTouching(cup)) {
 text("Ganaste",150,100)
}



cup.shapeColor="yellow";



wall1.shapeColor="orange";
wall2.shapeColor="orange";
wall3.shapeColor="orange";
wall4.shapeColor="orange";
wall5.shapeColor="orange";
wall6.shapeColor="orange";
wall7.shapeColor="orange";
wall8.shapeColor="orange";
wall9.shapeColor="orange";
wall10.shapeColor="orange";
wall11.shapeColor="orange";
wall12.shapeColor="orange";
wall13.shapeColor="orange";
wall14.shapeColor="orange";
wall15.shapeColor="orange";
wall16.shapeColor="orange";
wall17.shapeColor="orange";
wall18.shapeColor="orange";
wall19.shapeColor="orange";
wall20.shapeColor="orange";
wall21.shapeColor="orange";
wall22.shapeColor="orange";

 textSize(30);
    text("josue",300,300);

textSize(30) ; 
text("cup",36,45);

ball.bounceOff(wall1);
ball.bounceOff(wall2);
ball.bounceOff(wall3);
ball.bounceOff(wall4);
ball.bounceOff(wall5);
ball.bounceOff(wall6);
ball.bounceOff(wall7);
ball.bounceOff(wall8);
ball.bounceOff(wall9);
ball.bounceOff(wall10);
ball.bounceOff(wall11);
ball.bounceOff(wall12);
ball.bounceOff(wall13);
ball.bounceOff(wall14);
ball.bounceOff(wall15);
ball.bounceOff(wall16);
ball.bounceOff(wall17);
ball.bounceOff(wall18);
ball.bounceOff(wall19);
ball.bounceOff(wall20);
ball.bounceOff(wall21);
ball.bounceOff(wall22);
drawSprites();


}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
