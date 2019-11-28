export default class Ball {
  constructor(img_ball, gameWidth, gameHeight) {
    this.img_ball = img_ball;
    this.width = 15;
    this.height = 15;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.position = {
      x: this.gameWidth / 2,
      y: this.gameHeight / 2
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

    if (this.position.y + this.height > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    console.log(this.position.y);
  }
}
