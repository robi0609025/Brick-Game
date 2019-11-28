import Paddle from "/src/paddle.js";
import Ball from "/src/ball.js";
import InputHandler from "/src/input.js";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
//console.log(ctx);

//ctx.fillRect(10, 10, 100, 100);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
new InputHandler(paddle);

//images
let img_ball = document.getElementById("img_ball");
let ball = new Ball(img_ball, GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); //clear the screen
  paddle.update(deltaTime); // update the paddle
  paddle.draw(ctx); // draw the paddle

  ball.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
