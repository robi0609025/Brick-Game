export default class Ball {
  constructor(game) {
    this.img_ball = document.getElementById("img_ball");
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 15;
    this.height = 15;
    this.position = {
      x: game.gameWidth / 2,
      y: game.gameHeight / 2
    };

    this.speed = {
      x: 2,
      y: 2
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

    if (this.position.x + this.width > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (
      this.position.y + this.height > this.gameHeight ||
      this.position.y < 0
    ) {
      this.speed.y = -this.speed.y;
    }
  }
}
