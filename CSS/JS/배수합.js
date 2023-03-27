let n = 1;
let sum = 0;
while (n > 0 && n < 100) {
  if (n % 2 === 0 || n % 3 === 0) {
    sum = sum + n;
  }
  n++;
}
console.log(sum);
