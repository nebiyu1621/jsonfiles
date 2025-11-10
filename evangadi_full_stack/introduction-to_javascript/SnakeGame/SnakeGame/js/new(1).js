

canvas = document.querySelector("#canvas")
ctx = canvas.getContext("2D")

// FIRST prepare the scale of the snake 

let scale = 20;

const rows = canvas.width / scale

const columns = canvas.height / scale

// SECOND prepare the snake draw it

let snake = []

snake[0] = {

    x:(Math.floor(Math.random() * columns)) * scale,
    y:((Math.floor(Math.random() * rows)) * scale)
}

// THIRD prepare the food for the snake

let food = {
    
    x:(Math.floor(Math.random() * columns)) * scale,
    y:(Math.floor(Math.random() * rows)) * scale
    
    
}

// now to make the snake move prepare and interval argument to make the snake move
// with in a 100 miliseconds
const playGame = setInterval(draw, 100)


// then prepare the direction of the snake

let d = "right"

document.onkeydown = direction

function direction (neba){
    let key = neba.keyCode
    if(neba.key == 37 && d != "right"){
        d = "left"
    }else if(neba.key == 38 && d != "down"){
        d = "up"
    }else if(neba.key == 39 && d != "left"){
        d = "right"
    } else if(neba.key == 40 && d != "up"){
        d = "down"
    }
}


// then prepare the draw function to make the snake move


function draw(){

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    for(let i = 0; i < snake.length; i++){

        ctx.filStyle = "#ffff"
        ctx.strokeStyle = "red"
        ctx.fillRect(snake[i].x, snake[i].y, scale, scale)
        ctx.strokeRect(snake[i].x, snake[i].y, scale, scale)
        
    }

    // draw the food for the snake
    ctx.filStyle = "yellow"
    ctx.strokeStyle = "red"
    ctx.fillRect(food.x, food.y, scale, scale)
    ctx.strokeRect(food.x, food.y, scale, scale)
        // access the initial direction of the snake
        
        let snakeX = snake[0].x
        let snakeY = snake[0].y
    
    // then prepare the direction of the snake

    if(d = "left") snakeX -= scale
    if(d = "up") snakeY -= scale
    if(d = "right") snakeX += scale
    if(d = "down") snakeY += scale

// now if the snake is out of range it shold return to the other side/opposite side    
    
    if(snakeX > canvas.width){
        snakeX = 0
    }else if (snakeX < 0){
        snakeX = canvas.width
    }else if(snakeY > canvas.height){
        snakeY = 0
    }else if(snakeY < 0){
        snakeY = canvas.height
    }

    // also if the snake eats the food it should grow and the food should be placed in another position
    
    if(snake.x == food.x && snake.y == food.y){
        food = {
            x:(Math.floor(Math.random() * columns)) * scale,
            y:(Math.floor(Math.random() * rows)) * scale
        }
    }else {
        snake.pop()
    }
    
    
    // now let the snake move/and grow by accessing the head of the scaling coordinates

    let newHead = {
        x:snakeX,
        y:snakeY
    }
    // now set the argument for the snake to stop moving when eats the tail
    if(eatSelf(newHead, snake)){
        clearInterval(playGame);
    }

    snake.unshift(newHead)
    
    
        
}



// // write a function to stop the the game when the head is matched with the tail

function eatSelf(head, array){
    for(let i = 0; i < array.lenght  ;i++){

        if(head.x == array[i].x && head[i].y == array.y){
            return true
        }
        else{
            return false;
        }
    }
    
    
}



























