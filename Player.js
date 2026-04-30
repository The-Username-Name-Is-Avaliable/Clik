export default class Player {
  #img;
  #shouldDraw = false;
  #scale;
  #ypos;
  #yvel;
  #gravity=0.36;

  constructor(canvas) {
    this.#img = new Image();
    this.#ypos = canvas.height/2;
    this.#yvel = 0;
    
    this.#img.onload = () => {
      this.#scale = 2;
      this.#shouldDraw = true;
      console.log("Loaded! Scale is:", this.#scale);
    };

    this.#img.src = "./bird.png";
  }

  draw(ctx, canvas, frame, isPaused) {
      if (this.#shouldDraw) {
        ctx.save();

        ctx.translate(50, this.#ypos);
        
        ctx.rotate(this.#yvel * 5 * 0.0174533); 
        
        ctx.drawImage(
          this.#img, 
          -(this.#img.width * this.#scale) / 2,
          -(this.#img.height * this.#scale) / 2,
          this.#img.width * this.#scale,  
          this.#img.height * this.#scale
        );
        
        ctx.restore();
      }
      
      // Physics logic remains the same
      if(this.#shouldDraw && !isPaused) {
        this.#ypos += this.#yvel;
        this.#yvel += this.#gravity;
      }
  }


  jump() {
    this.#yvel=Math.min(10,this.#yvel/4-7);
    console.log(Math.random());
  }
}
