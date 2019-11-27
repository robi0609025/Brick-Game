import Paddle from "./paddle";

export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", event => {
      //alert(event.keyCode);
      //console.log(event.keyCode);
      switch (event.keyCode) {
        case 37:
          //alert("Move Left");
          paddle.moveLeft();
          break;
        case 39:
          //alert("Move Right");
          paddle.moveRight();
          break;
        default:
      }
    });

    //document.addEventListener("keyup", event => {});
  }
}
