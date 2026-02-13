// // chunk-1

let canvas = document.querySelector(".canvas");

let ctx = canvas.getContext("2d"); // for 2d work "webgl" for 3d

console.log(ctx);
// by setting up the scale with the single move/pixel i want to asign i will be able to
// give how much the snake animation moves
// by dividing the pixel with the row of the canva and column i will be able to
// identify how much does the animation goes with each move in the canva

const scale = 20;
const rows = canvas.height / scale; // 25 500/20
console.log(rows);

const columns = canvas.width / scale; // 25 500/20
console.log(columns);

// prepare a container for the snake to recieve values added.
let snake = [];
// snake[0] = {
//     x: 0,
//     y: 0
// }
// at the position of snake zero prepare a random position number
snake[0] = {
  x: (Math.floor(Math.random() * columns)) * scale,
  y: (Math.floor(Math.random() * rows)) * scale,
};
console.log(snake);

let food = {
  x: (Math.floor(Math.random() * columns)) * scale,
  y: (Math.floor(Math.random() * rows)) * scale,
}
// these are the methods used applied from the methods of canvas to style the animation game

// ctx.fillStyle = "#ffff";
// ctx.strokeStyle = "pink";
// ctx.fillRect(snake[0].x, snake[0].y, scale, scale);
// ctx.strokeRect(snake[0].x, snake[0].y, scale, scale);

// we use the setInterval method to update with in a period of time the postion and other things of animation

let playGame = setInterval(draw, 100); // accepts two arguments the function to be applied and duration of time interval to be executed

// function draw() {
//   ctx.fillStyle = "#ffff";
//   ctx.strokeStyle = "pink";
//   ctx.fillRect(snake[0].x, snake[0].y, scale, scale);
//   ctx.strokeRect(snake[0].x, snake[0].y, scale, scale);
// }
// // chunk-2
// first before applying another movement or style you must first clear all the methods. 
// for another value to be applied
let d = "right";

document.onkeydown = direction

function direction(neba){

  let key = neba.keyCode;

  if( key == 37 && d != "right"){
    d = "left";
  } else if(key == 38 && d != "down"){
    d = "up";
  } else if(key == 39 && d != "left"){
    d = "right";
  }
   else if(key == 40 && d != "up"){
    d = "down";
  }
  
}





function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    

    for(let i = 0 ; i< snake.length; i++){
      ctx.fillStyle = "#ffff";
      ctx.strokeStyle = "red";
      ctx.fillRect(snake[i].x, snake[i].y, scale, scale);
      ctx.strokeRect(snake[i].x, snake[i].y, scale, scale);
    }

    // draw food

    ctx.fillStyle = "#ff0"
    ctx.strokeStyle = "green"
    ctx.fillRect(food.x, food.y, scale, scale);
    ctx.strokeRect(food.x, food.y, scale, scale)


    // // now for the animation to move to right,left,up and down it should move by 20 px each
 


//  stp.1 access the position of the random snake position/place
let snakeX = snake[0].x

let snakeY = snake[0].y

    console.log(snakeX);
    console.log(snakeY);
    
    // which direction movement

     if(d == "left") snakeX -= scale
     if(d == "up") snakeY -= scale
     if(d == "right") snakeX += scale
     if(d == "down") snakeY += scale

  // for the animation to to make it look like reapiring after it reaches the end and gets inside and come ouside from opposite direction
  // use the conditional statment. to rotate/reset
  if(snakeX > canvas.width){
    snakeX = 0;
  }   
  if(snakeY > canvas.height){
    snakeY = 0;
  }
  if(snakeX < 0){
    snakeX = canvas.width
  }
  if(snakeY < 0){
    snakeY = canvas.height
  }
// make sure that if snake has eaten the food or mathmatically if x and y coordinates match the position of food should change and the lenght of the snake should grow else no change at all
  if(snakeX == food.x && snakeY == food.y){

    food = {
      x: (Math.floor(Math.random() * columns)) * scale,
      y: (Math.floor(Math.random() * rows)) * scale,
    }
    }    else{
      snake.pop()
    
    

  }
  
 
  // this sets the snake to move by 20 pixel from its initial randomly selected position.
  let newHead = {
    x: snakeX,
    y: snakeY
  }
  // condition to stop the game
  if(eatSelf(newHead, snake)){
    clearInterval(playGame);
  }


    snake.unshift(newHead)
    console.log(snake);
}



// // chunk 3: now to stop the game when the snake eat it self 

function eatSelf(head, array){
  for(let i = 0; i < array.length; i++){
    if(head.x == array[i].x && head.y == array[i].y){
      return true;
    }
    
    
  }
  return false;
}











