/*
let a = 2,
  b = 3;
const func = (x) => {
  return x * x * x - 5 * x - Math.cos(x);
};
let xn = 2;
console.log("x0=" + xn);
for (let i = 0; i < 100; i++) {
  let xnn = xn - (func(xn) * (b - xn)) / (func(b) - func(a));
  if (xnn - xn > 0.001) {
    xn = xnn;
    console.log("x" + (i + 1) + "=" + xnn);
  } else break;
}
*/

let a = 0,
  b = 4,
  n = 3,
  h = (b - a) / n,
  S = 0;
for (let i = 1; i <= n - 1; i++) {
  let x = a + i * h;
  S += 1 / (1 + Math.sqrt(2 * x + 1));
}
let fx0 = 1 / (1 + Math.sqrt(2 * a + 1));
let fxn = 1 / (1 + Math.sqrt(2 * b + 1));
S = h * (S + (fx0 + fxn) / 2);
console.log(S);

const nexia3 = {
  color: "red",
  isBuy: true,
};
Object.assign(newCar, nexia3);
// const newCar = Object.assign({}, nexia3);
newCar.color = "blue";
console.log(nexia3);
console.log(newCar);
