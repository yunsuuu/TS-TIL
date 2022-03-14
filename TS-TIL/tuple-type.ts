// tuple type - array 자료에 붙일 수 있는 타입, 자료의 위치까지 정확히 지정할 수 있는 타입(더 엄격)
let 멍멍 :(string | boolean)[] = ["dog", true];

// 첫자료는 string, 둘째자료는 boolean
let tupleType :[string, boolean]= ["dog", true];
// let tupleType :[string, boolean]= ["dog", 123]; -> 타입지정 안 해준 number 넣으면 에러 발생

// tuple 안에 옵션표시 가능
let option :[string, number, boolean?]= ["dog", 10, true];
// let option :[string, number?, boolean]= ["dog", 10, true]; -> 에러발생(물음표 친 옵션타입은 항상 마지막에 위치)

// rest parameter 타입지정시 tubple 가능
function Test5(...x :[number, string]){ // 배열 첫자료는 number, 둘째자료는 string
  console.log(x);
}
Test5(111, "222");

// array 2개를 spread 연산자로 합치는 경우 타입지정은?
let arr = [1, 2, 3];
let arr2 :[number, number, ...number[]]= [4, 5, ...arr]; // spread 연산자 - [4, 5, 1, 2, 3];
// ...number[] -> array 들어오는데 몇개인지 미정일 때(rest parameter 문법)

// 실습
let work1 :[string, number, boolean] = ["동서녹차", 4000, true];

// 실습2
let work2 :[string, number, ...boolean[]] = ["동서녹차", 4000, true, false, true, true, false, true];

// 실습3
function test7(...rest :[ string, boolean, ...(number | string)[] ]){

}
test7("lala", true, 100);

// 실습4
function test8(...x :(string | number)[]){
  let result :[string[], number[]] = [[], []];
  x.forEach((a) => {
    if(typeof a === "string"){
      result[0].push(a); // string[]
    } else {
      result[1].push(a); // number[]
    }
  })
  return result;
}
test8("b", 5, 6, 8, "a"); // return [["b", "a"], [5, 6, 8]]
