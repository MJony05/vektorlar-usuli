"use strict";
let x = +prompt("x="),
  N = +prompt("N="),
  sum = 0;
let gx, fx;
if (x >= -2 && x <= 0) {
  gx = x * -1;
} else if (x >= 0 && x <= 2) {
  gx = x;
}
for (let n = 1; n <= N; n += 2) {
  sum = sum + (1 / (n * n)) * Math.cos((3.14159 * n * x) / 2);
}
fx = 1 - (8 / (3.14159 * 3.14159)) * sum;
console.log(gx);
console.log(fx);
