export default class Ground {
  #img;
  #shouldDraw = false;
  #parallaxMultiplier;
  #scale;

  constructor(canvas) {
    this.#parallaxMultiplier = 2;
    this.#img = new Image();
    
    this.#img.onload = () => {
      this.#scale = canvas.width / this.#img.naturalWidth;
      this.#shouldDraw = true;
      console.log("Loaded! Scale is:", this.#scale);
    };

    this.#img.src = "./ground.png"; 
  }

  draw(ctx, canvas, frame) {
    if (this.#shouldDraw) {
      var xPos = ((frame*1.2)%(canvas.width/this.#parallaxMultiplier))*this.#parallaxMultiplier;
      ctx.drawImage(
        this.#img, 
        -xPos, // X position
        canvas.height-(this.#img.height * this.#scale), // Y position
        this.#img.width * this.#scale, 
        this.#img.height * this.#scale
      );
      ctx.drawImage(
        this.#img, 
        canvas.width-xPos-1, // X position
        canvas.height-(this.#img.height * this.#scale), // Y position
        this.#img.width * this.#scale, 
        this.#img.height * this.#scale
      );
    }
  }
}
