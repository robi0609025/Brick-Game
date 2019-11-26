import Paddle from "/src/paddle.js";
let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
//console.log(ctx);

//ctx.fillRect(10, 10, 100, 100);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);
