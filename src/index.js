import Game from "./game";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
//console.log(ctx);

//ctx.fillRect(10, 10, 100, 100);

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

// game loop
let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); //clear the screen
  game.draw(ctx);
  game.update(deltaTime);
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
