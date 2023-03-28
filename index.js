//setTimeout()
//setTimeout(code,delay):delay 동안 기다리다가 code 함수 실행
//:delay(ms단위) 동안 기다리다가 code 함수 실행

// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);

// console.log(3);

// // setTimeout ->1초 후에 body 태그의 배경색상을 빨간색으로 바꾸기

// setTimeout(function () {
//   //1. body 태그선택
//   //2. 배경 색상을 빨간색으로 변경
//   document.querySelector("body").style.backgroundColor = "red";
// }, 1000);

// //1초후에  h1태그 글자 색상을 파란색

// setTimeout(function () {
//   document.querySelector("h1").style.backgroundColor = "blue";
// }, 1000);

// function changeColor() {
//   document.querySelector("h1").style.backgroundColor = "blue";
// }
// setTimeout(changeColor, 1000);

//비동기처리
//ex) 편의점에 들어가서 음료수를 사고 나오는 상황

// function goMart() {
//   console.log("마트에 가서 어떤 음료살지 고민");
// }

// function pickDrink() {
//   //setTimeout을 이용해 3초 고민한후에 코드 실행
//   setTimeout(function () {
//     console.log("고민끝~!");
//     product = "제로콜라";
//     price = 2000;
//   }, 3000);
// }
// function pay(product, price) {
//   console.log(`상품명:${product},가격:${price}`);
// }
// let product;//undefined
// let price;//undefined
// goMart();
// pickDrink();
// pay(product, price);

// 콜백 함수로 해결해보자
// 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// 어떤 함수의 파마리터(매개변수,인자)로 쓰임
// function goMart() {
//   console.log("마트에 가서 어떤 음료살지 고민");
// }

// function pickDrink(callback) {
//   //callback : 매개변수가 될 콜백함수
//   //setTimeout을 이용해 3초 고민한후에 코드 실행
//   setTimeout(function () {
//     console.log("고민끝~!");
//     product = "제로콜라";
//     price = 2000;
//     callback(product, price); // 매개변수로 넘긴 콜백함수를 실행
//   }, 3000);
// }

// let product; //undefined
// let price; //undefined
// goMart();
// pickDrink(function pay(product, price) {
//   console.log(`상품명:${product},가격:${price}`);
// });
// pay(product, price);

// ##콜백 지옥
// 콜백 함수가 반복되어 코드의 들여쓰기가 너무 깊어짐
// =>가독성/유지보수성 하락

// 1초마다 배경색이 변경되는 코드
// 빨->주->노->초->파

// setTimeout(function () {
//   document.querySelector("body").style.backgroundColor = "red";
//   setTimeout(function () {
//     document.querySelector("body").style.backgroundColor = "orange";
//     setTimeout(function)(){
//         document.querySelector('body').style.backgroundColor='yellow';
//     },1000);
//   }, 1000);
// }, 1000);
