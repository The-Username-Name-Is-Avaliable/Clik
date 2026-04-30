export default class Background {
  #img;
  #shouldDraw = false;
  #parallaxMultiplier;
  #scale;

  constructor(canvas) {
    this.#parallaxMultiplier = 0.7;
    this.#img = new Image();
    
    this.#img.onload = () => {
      this.#scale = canvas.width / this.#img.naturalWidth;
      this.#shouldDraw = true;
      console.log("Loaded! Scale is:", this.#scale);
    };

    this.#img.src = "./background.png"; 
  }

  draw(ctx, canvas, frame) {
    if (this.#shouldDraw) {
      var xPos = (frame%(canvas.width/this.#parallaxMultiplier))*this.#parallaxMultiplier;
      ctx.drawImage(
        this.#img, 
        -xPos, // X position
        0, // Y position
        this.#img.width * this.#scale, 
        this.#img.height * this.#scale
      );
      ctx.drawImage(
        this.#img, 
        canvas.width-xPos-1, // X position
        0, // Y position
        this.#img.width * this.#scale, 
        this.#img.height * this.#scale
      );
    }
  }
}
