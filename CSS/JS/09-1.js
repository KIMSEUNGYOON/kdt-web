//async/await
//비동기 처리 패턴 중 가장 최신 문법
//promise 기반 코드를 더 가독성 있게 하기 위해 등장

//구조
// 함수 앞에 async 키워드 붙이기
// 비동기 처리 메서드 앞에 await 키워드 붙이기(해당작업을 기다려 줄것)
// async와 await 세트!! 같이쓰자
// async function 함수명(){
//     await 비동기처리_메서드명();
// }

//1초 뒤에 과일 배열을 출력하는 코드 작성
// function fetchFruits() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       const fruits = ["🥭", "🫐", "🌶️"]; //과일 배열
//       //resolve(fruits);
//       reject(new Error("알 수 없는 에러발생 아이템 가져올수없다"));
//     }, 1000);
//   });
// }
// //#1 promise then()사용시
// fetchFruits()
//   .then(function (fruits) {
//     console.log(fruits);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// async function printItems() {
//   try {
//     const fruits = await fetchFruits();
//     console.log(fruits);
//   } catch (error) {
//     console.log(error);
//   }
// }

// printItems();
// function goMart() {
//   console.log("마트에 가서 어떤 음료살지 고민임");
// }
// function pickDrink() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       console.log("고민끝");
//       product = "젤콜라";
//       price = 4000;
//       resolve();
//     }, 3000);
//   });
// }

// function pay() {
//   console.log(`상품명:${product} 가격:${price}`);
// }

// async function exec() {
//   goMart(); //1번실행
//   await pickDrink(); //2번실행->기다려 줘야함
//   pay(); //2번이 완료되어야 3번 실행

//   //장점 : 코드 실행순서가 명확히보인다!
// }
// let product;
// let price;
// exec();
// 실습2. Promise -> async/await 기본코드
// call, back, hell 함수: 실습 23의 함수와 동일
// function call(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(name);
//       resolve(name); // 작업 성공시 then(name)
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("back");
//       resolve("back"); // 작업 성공시 then('back')
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("callback hell");
//     }, 1000);
//   });
// }
// async function exec() {
//   let name = await call("kim");
//   console.log(`${name} 반가워`);
//   let txt = await back();
//   console.log(`${txt}를 사용했구나`);
//   let hall = await hell();
//   console.log(`여기는 ${hall}`);
// }

// exec();
function changeBgColor(newColor) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}

changeBgColor("red")
  .then(function () {
    return changeBgColor("orange");
  })
  .then(function () {
    return changeBgColor("yellow");
  })
  .then(function () {
    return changeBgColor("green");
  })
  .then(function () {
    return changeBgColor("blue");
  });
