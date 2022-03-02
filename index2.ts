// let 이름: string = "yun";
// let 나이 = 24;
// let 결혼했니: boolean  = true;
// null - 텅 비었음
// undefined - 변수 만들어졌지만 정의되지 않았음

// Array 자료형 타입 정하기
let 회원들: string[] = ["yun", "kim"]
// '회원들'이라는 변수에는 array만 들어올 수 있음

// Object 자료형 타입 정하기
let 회원 :{name: string, age: number} = {
  // '동료들'이라는 변수에는 object만 들어올 수 있음
  // name은 무조건 string, age는 무조건 number
  name: "yun",
  age: 24,
}

let 사람 = "yun"; // 타입지정 별도로 하지 않아도 자동으로 지정되어있음(타입지정 생략 가능)

// homework
let 이름:string = "yunsu";
let 나이: number = 24;
let 최애음식: string = "tomato";

let favorite: { song: string, singer: string } = {
  song: "isn't she lovely",
  singer: "ohhyuk",
}

let project: { 
  member: string[], 
  days: number, 
  started: boolean 
} = {
  member: ["kim", "yun"],
  days: 30,
  started: true,
}