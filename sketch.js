var gameState,playerCount;
var form,game,player;
var database,ballposition,position;

function setup(){
 createCanvas(500,500);
 database = firebase.database();
 game = new GameObject();
 game.getState();
 game.start();
}

function draw(){

}

