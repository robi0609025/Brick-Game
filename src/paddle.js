export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 80;
    this.height = 15;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#00f";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;
    this.position.x += 5 / deltaTime;
  }
}