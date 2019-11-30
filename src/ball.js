export default class Ball {
  constructor(game) {
    this.img_ball = document.getElementById("img_ball");
    this.game = game;
    this.paddle = game.paddle;
    this.width = 15;
    this.height = 15;
    this.position = {
      x: game.gameWidth / 2,
      y: game.gameHeight / 2
    };

    this.speed = {
      x: 3,
      y: 3
    };
  }

  draw(ctx) {
    ctx.drawImage(
      this.img_ball,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    //collision with the side wall
    if (
      this.position.x + this.width > this.game.gameWidth ||
      this.position.x < 0
    ) {
      this.speed.x = -this.speed.x;
    }
    //collision with bottom or top of the wall
    if (
      this.position.y + this.height > this.game.gameHeight ||
      this.position.y < 0
    ) {
      this.speed.y = -this.speed.y;
    }
    //collision with the paddle
    let bottomOfBall = this.position.y + this.height;
    let topOfPaddle = this.game.paddle.position.y;
    if (bottomOfBall >= topOfPaddle) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.height;
    }
  }
}
