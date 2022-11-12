import { clear, drawCircle } from "../utils/mainCanvasUtils.js";

export function render(time, ctx, screen, data) {
  ctx.clearRect(0, 0, screen.width, screen.height);
  for (let i = 0; i < data.length - 2; i++) {
    drawCircle(data[i], ctx);
  }
}
