// index signature - obj 타입지정 한번에 가능
interface StrType {
  age : "20"; // literal type(age에는 20만 들어올 수 있음)
  [key :string] :string // 모든 속성에 string 타입 지정해주기 = {모든속성 :string}
  // 오브젝트에서 지정한 key값은 모두 문자화
}
// interface StrType { // 반복 피하기
//   name : "string",
//   age : "string",
//   location : "string"
// }
let user1 = {
  name : "yun",
  age : "20",
  location : "seoul"
}
let user2 = {
  0 : "yun",
  1 : "20",
  2 : "seoul"
}
user2[0]; // "yun"

// obj 안에 obj 들어간 경우 타입 지정
interface CSS { // CSS { "font-size" }
  "font-size" : CSS | number // 재귀함수처럼 계속해서 중첩
}
let css :CSS = {
  "font-size" : {
    "font-size" : {
      "font-size" : 14
    }
  }
}

// 실습1
interface ObjType {
  [key : string] :string | number
}
let obj :ObjType = {
  model : "k5",
  brand : "kia",
  price : 6000,
  year : 2030,
  date : "6월",
  percent : "5%",
  dealer : "kim",
}

interface Obj1Type {
  "font-size" :number,
  [ key : string ] :Obj1Type | number,
}

let obj1 :Obj1Type = {
  "font-size" : 10,
  "secondary" : {
    "font-size" : 12,
    "third" : {
      "font-size" : 14
    }
  }
}