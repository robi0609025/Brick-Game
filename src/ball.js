export default class Ball {
  constructor(img_ball, gameWidth, gameHeight) {
    this.img_ball = img_ball;
    this.width = 15;
    this.height = 15;
    this.position = {
      x: gameWidth / 2,
      y: gameHeight / 2
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

  update() {}
}
