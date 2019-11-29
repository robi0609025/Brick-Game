import Paddle from "/src/paddle.js";
import Ball from "/src/ball.js";
import InputHandler from "/src/input.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this.gameWidth, this.gameHeight);
    this.ball = new Ball(this.gameWidth, this.gameHeight);
    new InputHandler(this.paddle);
  }

  draw(ctx) {
    this.paddle.draw(ctx); // draw the paddle
    this.ball.draw(ctx);
  }

  dpdate(deltaTime) {
    this.paddle.update(deltaTime);
    this.ball.update(deltaTime);
  }
}
