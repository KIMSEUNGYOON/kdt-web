//promise(프로미스)
//:비동기 함수 동기처리하기 위해 만든 객체
//:성공, 실패 분리해서 반환

//=>성공이든 실패든 무언가의 "최종결과"
//resolved : 성공
//reject:실패
//프로미스를 콜백함수 전달할 필요없음. 그냥 호출하면 됨

//1. 프로미스 생성하는 코드
// promiJse1 함수의 return 값이 promise객체
// resolve():성공한 경우 실행,프로미스 사용시 then 매소드와 연결
// reject():실패한 경우 실행, 프로미스 사용시 catch 매서드와 연결
// function promise1(flag){
//     //flag:true,false
//     return new Promise(function(resolve,reject){
//         if(flag){
//             resolve(`promise 상태는 fulfilled!! then으로 연결됩니다 이 때의 flag는 ${flag}입니다`
//             );
//         else{
//             reject('promise 상태는 rejected!! catch로 연결됩니다 이떄의 flag는 ${flag}입니다');

//         };
//     });
// }

// //2.프로미스 사용(소비)하는 코드
// promise1(true).then(function(result){
//     console.log(result);
// })
// .catch(function(error){
//     console.log(error);
// })
// function goMart() {
//   console.log("마트에 가서 어떤 음료살지 고민");
// }

// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("고민끝~!");
//       product = "제로콜라";
//       price = 4000; //2000->상품명,가격 출력 그대로 4000->금액 부족메세지 출력
//       if (price <= 2000) {
//         resolve();
//       } else {
//         reject();
//       }
//       resolve();
//     }, 3000);
//   });
// }
// function pay() {
//   console.log(`상품명:${product},가격:${price}`);
// }
// function nopay() {
//   console.log("금액부족~!");
// }
// let product; //undefined
// let price; //undefined
// goMart();
// pickDrink().then(pay).catch(nopay);

// promise 체이닝(chaining)
// 함수를 이용해 (4+3)*2-1=13 연산을 해보자!
// 1.add(4,3)
// 2.mul(add(4,3),2)
// 3.submul(mul(add(4,3),2),1)
// add->mul->sub 순으로 연산필요

// step1 콜백함수로 해결하기
// 


step2 : promise 체이닝 이용
장점 1 : then 메서드 연속 사용가능->순차적작업가능
    콜백 지옥에서 탈출

장점 2 : 예외 처리 간편
=>마지막에 catch 구문에서 한번에 에러처리가능