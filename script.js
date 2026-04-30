import GameState from './Gamestate.js';

var canvas = document.getElementById('main-canvas');
canvas.height = window.innerHeight;
canvas.width = Math.floor(canvas.height * 0.55859375);
/* Initialize Context */
var ctx = canvas.getContext('2d');

var myGameState = new GameState(canvas);
myGameState.run(canvas, ctx);

document.addEventListener('keydown', (event) => {
  myGameState.handleEvent(event);
});
