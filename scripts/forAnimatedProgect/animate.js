import { render } from "./render.js";
import { update } from "./update.js";

export function animate(time, ctx, screen, data, timeRate) {
  data = update(data, time, timeRate);
  render(time, ctx, screen, data);
  requestAnimationFrame((time) => animate(time, ctx, screen, data, timeRate));
}
