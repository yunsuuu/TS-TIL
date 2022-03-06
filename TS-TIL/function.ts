// 함수는 총 두 군데 타입 지정이 가능 - 함수로 들어오는 자료(파라미터), 함수에서 나가는 자료(return)

import { table } from "console";

// 파라미터 괄호 안에 파라미터값에 대한 타입 지정, 파라미터 괄호 옆에 결과값에 대한 타입 지정
function 함수(x :number) :number {
  return x * 2
}
// 함수("6") -> 에러
함수(6);

// void 타입 - return할 자료가 없는 함수의 타입으로 사용
function 함수(x :number) :void { // 실수로 뭔가 return 하는 것을 사전에 막을 수 있음(return 방지 장치)
  // return 1 + 1 // -> 에러발생
  1 + 1 // return으로 남기는 값 없이 1 + 1만 하고 싶을 때 void 사용
}

// 자바스크립트와의 차이점 - 파라미터에 타입을 지정하면 필수 파라미터가 됨
function 함수(y :number) :void {
  return y * 2
}
// 함수() // 에러발생
함수(20); // 함수 호출할 때 파라미터 필수

// 파라미터가 옵션일 경우 - 함수 호출할 때 파라미터를 넣어도 되고, 안 넣어도 되고
// z? :number => z :number | undefined 와 같은 의미
function 함수(z? :number) :number {
  return z * 3
}
함수() // 가능 -> 파라미터에 값을 넣지 않아도 에러 발생X -> 파라미터 우측에 ?를 넣어줘서
함수(2) // 가능

function 함수(x :number | string) :void {
  console.log(x + 3) // 에러발생
  // 애매한 타입들은 미리 타입 검사 필요
  if(x의 타입이 숫자면){
    console.log(x + 3)
  }
}

// 실습 - 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고, 파라미터를 비우면 "이름이 없습니다"를 출력하는 함수
function sayHi(name? :string) :void{
  if(name){ // 파라미터(name)가 있으면
    console.log(`안녕하세요 ${name}`);
  } else {
    console.log("이름이 없습니다!");
  }
}
sayHi();
sayHi("홍길동");

// 실습 - 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수
// 예를 들어 "123" 문자를 입력하면 3이 return 되어야 함
// 숫자도 마찬가지로 1234 입력하면 4가 return 되어야 함
// 숫자 또는 문자 이외의 자료가 들어오면 안됨
function count(x :number | string) :number{
  // 자릿수를 세어 출력하는 코드
  if(typeof x === "number") {
    return x.toString.length;
  } else if(typeof x === "string") {
    console.log("자릿수를 셀 수 없습니다!");
  }
}

// 결혼 가능 확률을 알려주는 함수
function 결혼가능한가(money :number, house :boolean, charm :string) :string | void{
  let score :number = 0;
  score += money; // score = score + money
  if(house === true){
    score += 500;
  }
  if(charm === "상"){
    score += 100;
  }
  if(score >= 600){
    return "결혼가능";
  }
}
console.log(결혼가능한가(100, true, "상"));

// 파라미터의 타입이 애매할 때 Type Narrowing 사용해야함
// 어떤 변수의 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작 가능
// if문 등으로 타입을 하나로 정해주는 것을 의미
function narrowing(x :string | number) {
  if(typeof x === "string"){ // typeof로 타입이 무엇인지 확인
    return x + "1";
  } else {
    return x + 1;
  }
}
narrowing(123);

// 주의! if문을 썼으면 else, else if로 끝까지 마무리 해줘야함(에러방지)
function 내로잉(x: number | string) {
  if(typeof x === "number"){
    let array :number[] = [];
    array[0] = x;
  }

  // Narrowing으로 판정해주는 문법들
  // 1) typeof 변수 
  // 2) 속성명 in 오브젝트 자료 
  // 3) 인스턴스 instanceof 부모
}
내로잉(123);

// Type Assertion
// 타입을 간편하게 assert 할 수도 있음
// 변수명 as string
function assert(x : number | string) {
  return (x as number) + 1 // x를 number로 생각해 주세요.
}

// as 키워드 특징
// union type 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할 수행 - number 타입을 as string로 바꾸는 것은 불가
// 단지 타입실드 임시 해제용 - 실제 코드 실행결과는 as 있을 때나 없을 때나 거의 동일

// 실습1
// 숫자 여러개를 array 자료에 저장, 숫자와 문자가 섞인 array를 입력하면 숫자만 담긴 배열로 변환되어 나오는 클리닝함수 만들기
function Q1(x :(number | string)[]) {
  let arr :number[] = []; // number로 가득찬 배열
  x.forEach((el) => {
    if(typeof el === "number"){
      arr.push(el);
    } else if (typeof el === "string"){
      arr.push(parseInt(el));
    }
  });
  return arr;
}
console.log( Q1([1, 2, "3", 4, "5"]) );

// 실습2
let t1 = { subject : "math" };
let t2 = { subject : ["science", "english"] };
let t3 = { subject : ["science", "art", "korean"] };

function Q2(x :{ subject :string | string[] }) {
  if(typeof x.subject === "string"){
    return x.subject;
  } else if(Array.isArray(x.subject)){ // isArray() - 파라미터로 입력 받은 obj가 배열인지 여부를 boolean값으로 리턴
    return x.subject[x.subject.length - 1]; // 마지막 배열값
  } else {
    return "끝";
  }
}