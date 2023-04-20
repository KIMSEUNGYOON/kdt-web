//단축평가 ||(논리합) &&(논리곱)

const a = 20;
const b = 10;

a < b && console.log("A가 큽니다");
//a>b가 트루면 && 뒤에 바로 실행 faluse 면 실행 자체 x
//논리곱은 조건식일때

function test(name) {
  const obj = {
    a: name || "기본이름", //name에 아무값 안들어오면 "기본이름"넣음
  };
  console.log(obj);
}
test();
test("홍길동");
