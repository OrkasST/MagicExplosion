let lastUpdate = 0;
let isTimeSlowed = false;

export function update(data = null, time = 0, timeRate) {
  // if (time - lastUpdate >= data[data.length - 1]) {
  //   lastUpdate = time;
  //   return data = [{ ...data[0], r: data[0].r + speed }, data[data.length - 1]];
  // }

  if (isTimeSlowed) timeRate = 0.05;
  else timeRate = 1;

  let speed = data[1] / data[data.length - 1] * (time - lastUpdate) * timeRate;
  lastUpdate = time;
  return data = [{ ...data[0], r: data[0].r + speed }, data[1], data[data.length - 1]];
}

document.addEventListener('click', () => {
  if (!isTimeSlowed) {
    isTimeSlowed = true;
  } else {
    isTimeSlowed = false;
  }
})