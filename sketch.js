const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var thunder,thunder1,thunder2,thunder3,thunder4;
var engine,world;
//var ground;
var drops=[];
var maxDrops=100;
var walkingman;
//var bg;
var rand;
//var rainsound,sound;
var thunderCreatedFrame = 0;

function preload(){
    //bg=loadImage("bg.png");
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
    //sound = loadSound("thundersound.mp3");
    //rainsound = loadSound("rainsound.mp3");
}

function setup(){
 createCanvas(400,600);
    engine=Engine.create();
    world= engine.world;
    
    //rainsound.play();


    if(frameCount % 300 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }
    }
    walkingman = new Umbrella(200,400);

}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    
    //creating thunder
    rand = Math.round(random(1,4));

    if(frameCount%100===0){
        //sound.play();
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,390), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
    thunder.scale = random(0.3,0.6);
    }

    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }
    

    for(var i = 0;i < maxDrops; i++){
        drops[i].display();
        drops[i].changePosition();
    }    
    
    walkingman.display();

    drawSprites();
}

/*function preload(){
    
}

function setup(){
   
    
}

function draw(){
    
}*/

