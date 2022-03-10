// type, interface 키워드로 타입 변수 생성 가능
// 오브젝트 타입의 경우 interface 키워드도 사용 가능

type Sqaure = {
  color :string,
  width :number,
}

// interface Square { // interface로 type 지정할 때 등호 생략
//   color :string,
//   width :number,
// }

let square :Sqaure= { // Sqarue 타입지정하지 않아도 자동으로 string, number 타입지정됨
  color : "red",
  width : 100,
}

// 실습1 - 학생, 선생 변수의 타입 지정하기
interface Type1 { name :string }
interface Type2 { name :string, age :number }

// 위의 코드를 extends로 복사하여 name 중복 제거 (interface 장점)
interface Student { name :string }
// interface Student { score :number }
// Student { name :string, scroe :number } - interface는 중복선언해도 에러 발생X
interface Teacher extends Student { age :number }
// interface도 & 기호 사용 가능 - let 변수 :Student & Teacher = { name : "kim", age : 30 }

let 학생 :Student = { name : "kim" };
let 선생 :Teacher = { name : "yun", age : 25 };

// type alias의 경우 extends 안 되고, & 기호로 type 교차하여 오브젝트 합칠 수 있음(중복코드제거)
// intersection type 교차타입 - 타입을 복사하는 것이 아니라 두 타입을 전부 만족하는 타입
type Animal  = { name :string }
// type Animal = { score :number } - type은 중복선언 불가
type Cat = { age :number } & Animal // 중복코드제거

// type, interface 의 차이점 - interface는 중복선언 가능, type은 중복선언 불가능

// 실습2 - interface를 이용해서 간단하게 타입 만들기
interface Product {
  brand :string,
  serialNumber :number,
  model :string[],
}

let product :Product = {
  brand : "Samsung",
  serialNumber : 1360,
  model : [ "TV", "phone" ],
}

// 실습3 - array 안에 object 여러 개가 필요, 쇼핑몰 장바구니 구현하려고 함
interface Basket {
  product :string,
  price :number
}
interface Basket2 extends Basket { 
  card :boolean 
}

let basket :Basket[] = [
  { product : "삼다수", price : 800 }
]
let basket2 :Basket2[] = [
  { product : "청소기", price : 7000, card : false }
]

// 실습4 - object 안에 함수 2개 넣기
interface Calculator { // 함수타입 type 지정할 때 () => {}
  plus : ( a :number, b :number ) => number,
  minus : ( a :number, b :number ) => number
}
let calculator :Calculator = {
  plus(a , b){
    return a + b;
  },
  minus(a, b){
    return a - b;
  }
}
calculator.plus(1, 2);
calculator.minus(5, 3);