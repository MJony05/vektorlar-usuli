const V = +prompt("variantni kiriting");
let n,
  p = 0.3 + V / 100;
if (V <= 10) {
  n = 11;
} else if (V > 10 && V <= 20) {
  n = 10;
} else if (V > 20) {
  n = 9;
} else {
  alert("Error");
}
let k1 = Math.floor(n / 2),
  k2 = k1 + 3,
  k3 = k2 + 2,
  k4 = k3 + 1;

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
const cnk = function (n, k) {
  const c = factorialize(n) / (factorialize(k) * factorialize(n - k));
  return c;
};

function pnk(n, k, p) {
  const q = 1 - p;
  return cnk(n, k) * p ** k * q ** (n - k);
}
const p1 = pnk(n, k1, p);
console.log("P1=" + p1); // 1-misol
let p2 = 0;
for (let i = k1; i <= k2; i++) {
  p2 += pnk(n, i, p);
}
console.log("P2=" + p2); //2-misol

let p3 = 0;
for (let i = 0; i <= k3; i++) {
  p3 += pnk(n, i, p);
}
console.log("P3=" + p3); // 3-misol

let p4 = 0;
for (let i = k2; i <= n; i++) {
  p4 += pnk(n, i, p);
}
console.log("P4=" + p4); // 4-misol

const p5 = 1 - pnk(n, 0, 1);
console.log("P5=" + p5); // 5-misol

let p6 = 0;
for (let i = 0; i <= n; i++) {
  if (p6 < pnk(n, i, p)) {
    p6 = pnk(n, i, p);
  } else {
    continue;
  }
}
console.log("P6=" + p6); // 6-misol
