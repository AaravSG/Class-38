var playerCount;
var database;
var gameState= 0;


var form,player,game;

var car1,car2,car3,car4,cars;

var allPlayers;
function setup(){
    createCanvas(displayWidth-30,displayHeight-30);
    database= firebase.database();

    game = new Game();
    game.getState();
    game.start();

  
}

function draw(){
    background("white");

    if(playerCount ===4){
        game.updateState(1);

    }

    if(gameState===1){
        clear();
        game.play();
    }

    

    
}








