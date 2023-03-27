/*console.log("connected?");
for (let i = 0; i < 10; i++) {
  console.log("안녕", i);
}

for (let i = 0; i < 10; i += 2) {
  console.log(`안녕 ${i}`);
}

for (let i = 0; i < 10; i = i + 3) {
  console.log(i);
}
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}
let n = 11;
let sum = 0;
for (let i = 1; i <= 11; i++) {
  sum = sum + i;
}
console.log(sum);

let fruits = ["사과", "배", "포도", "망고"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let numsArr = [90, 50, 30, 20, 11];
let numsSum = 0;
for (let i = 0; i < numsArr.length; i++) {
  numsSum = numsSum + numsArr[i];
}
console.log(numsSum);

//1~20짝수일때의 합구하기
let sum2 = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    sum2 = sum2 + 1;
  }
}
console.log(sum2);

let sum3 = 0;
let num3 = Number(prompt("숫자를 입력하세요"));
for (let i = 1; i < num3 + 1; i++) {
  if (i % 2 === 1 && i % 13 === 0) {
    console.log(i);
  }
}

/*for (let i = 2; i < 10; i++) {
  console.log(`${i}단`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i}X${j}=${i * j}`);
  }
}*/

let n2 = 1;
while (n2 <= 5) {
  console.log(n2);
  n2++;
}

n2 = 10;
while (n2 >= 5) {
  console.log(n2);
  n2--;
}

n2 = 10;
while (n2 >= 1) {
  if (n2 % 2 == 0) {
    console.log(n2);
  }
  n2--;
}
n2 = 1;
while (true) {
  console.log("안녕");
  if (n2 === 10) {
    break;
  }
  n2++;
}
n2 = 0;
while (comfirm("계속 진행?")) {
  n2++;
  alert(`${n2}번째 alert 창`);
}

let sum3=0;
for(let i=0;i<10;i++){
  if(i%2===0){
    continue;
  }
  sum3+=1;
}
console.log(sum3);
