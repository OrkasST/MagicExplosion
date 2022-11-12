// import { animate, drawOnScreen } from "./scripts/mainCanvasFunctions.js";
import { animate } from "./scripts/forAnimatedProgect/animate.js";
import { drawOnScreen } from "./scripts/forNonAnimatedProjects/draw.js";

const screen = document.getElementById("screen");
const ctx = screen.getContext("2d");

//setting width & height
const width = 800,
  height = 800;
screen.width = width;
screen.height = height;

//calling functions
const data = [
  { x: 20, y: 100, r: 20, color: "#00c5ba" },
  20,
  100
];
let timeRate = 1;

// drawOnScreen(ctx);
animate(0, ctx, { width, height }, data, timeRate);

//before using comment requestAnimationFrame
//setInterval(animate, 200);
