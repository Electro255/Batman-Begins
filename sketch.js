const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var Drops = [];
var Umbrella = [];

var maxDrop = 100;
var boy


function preload(){
    
}

function setup(){
   
    
}

function draw(){

    for(var i=0; i<maxDrops; i++){
        Drops.push(new createDrop(random(0,400), random(0,400)));
    }
    
}   

