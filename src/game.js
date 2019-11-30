import Paddle from "/src/paddle.js";
import Ball from "/src/ball.js";
import InputHandler from "/src/input.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    new InputHandler(this.paddle);

    this.gameObjects = [this.paddle, this.ball];
  }

  draw(ctx) {
    this.gameObjects.forEach(item => item.draw(ctx));
  }

  update(deltaTime) {
    this.gameObjects.forEach(item => item.update(deltaTime));
  }
}
