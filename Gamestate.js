import Ground from './Ground.js';
import Background from './Background.js';
import Player from './Player.js';
import Pipe from './Pipe.js';

export default class GameState {
  #frameCount=0;
  #ground;
  #background;
  #player;
  #pipe;
  #isPaused=true;
  constructor(canvas) {
    /* Initialize Game Objects */
    this.#ground = new Ground(canvas);
    this.#background = new Background(canvas);
    this.#player = new Player(canvas);
    this.#pipe = new Pipe(canvas);
  }
  run(canvas, ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.#background.draw(ctx, canvas, this.#frameCount);
      this.#pipe.draw(ctx,canvas,this.#frameCount,this.#isPaused);
      this.#ground.draw(ctx, canvas, this.#frameCount);  
      this.#player.draw(ctx, canvas, this.#frameCount,this.#isPaused);
      if(!this.#isPaused) {
        this.#frameCount++;
      }
  
      requestAnimationFrame(() => this.run(canvas, ctx));
  }
  handleEvent(event) {
    if(event.key===' ') {
      this.#isPaused = !this.#isPaused;
    }
    if(!this.#isPaused) {
      if (event.key == "ArrowUp" || event.key == "a") {
        this.#player.jump();
        console.log("Wassup");
      }
    }
  }
}
