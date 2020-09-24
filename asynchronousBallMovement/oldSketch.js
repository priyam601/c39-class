var hipnoticalBall,dataBase;
var position;

function setup(){
    createCanvas(500,500);

    dataBase = firebase.database();
    console.log(dataBase);

    hipnoticalBall = createSprite(250,250,10,10);
    hipnoticalBall.shapeColor = "red";

    var hipnoticalBallPosition = dataBase.ref('ball/position');

    hipnoticalBallPosition.on("value", readPosition ,showError);

    console.log(position);
    
}

function draw(){
    background("white");
    if(position != undefined){

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}

function readPosition(data) {
    position = data.val();

    hipnoticalBall.x = position.x;
    hipnoticalBall.y = position.y;
    console.log(position.x);

   


}

function showError() {
    console.log("error in writing to the database");

}

function writePosition(x,y){
    dataBase.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y

    })

}