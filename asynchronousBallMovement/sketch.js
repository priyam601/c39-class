var database;
var game,form,player;
var gameState = 0;
var playerCount;
var allPlayers;




function setup(){
    createCanvas(400,400);

    database = firebase.database();
    console.log(database);

    game=new Game();
    console.log(game);

    game.getState();
    game.start();
}

function draw(){

    if(playerCount == 4){
        game.update(1);

    }

    if(gameState == 1){
        clear();
        game.play();

    }
}

function showError() {
    console.log("error in writing to the database");

}
