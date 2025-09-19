// 클로저
// 자바스크립트 -> 접근제어자
// 객체나, 변수가 있으면 -> 아예 const를 사용해서 '재할당을 아예 막아버리거나'
// 특정 접근은 가능하고, 내부에만 수정하게 하는...

const obj = {
  money: 0,
  increase: function () {
    this.money++;
  },
};
obj.increase(); // 함수를 실행을 하면 -> 그 결과로만 -> 특정한 프로퍼티(값) 수정하게
// 폐쇄적인 결과를 만들고 싶어함
console.log(obj.money);
obj.money = 100; // 이런식으로 수정하는 걸 막고 싶어하는데... 내장 기능으로는 불가능함.

// 만약에 외부에서 특정한 곳에 접근을 막고 싶으면... 한가지.
// 함수에게 속한 변수는 접근할 수 없음. 객체나 클래스. 접근이 가능한데 '함수'.

const c = {
  number: 0,
  count: function () {
    this.number++; // 1 증가.
  },
};
c.count();
console.log("c.number", c.number);
c.number = 100;
console.log("c.number", c.number);
function makeCounter() {
  let number = 0; // 함수 스코프에 존재하는데 외부에 접근할 수 없음
  return {
    count() {
      number++;
    },
    get() {
      return number;
    },
  };
}
const myCounter = makeCounter();
myCounter.count();
myCounter.count();
console.log(myCounter.get());
myCounter.count();
console.log(myCounter.get());

// 인자, 매개변수, 구조분해할당, 나머지매개변수, arguments...
