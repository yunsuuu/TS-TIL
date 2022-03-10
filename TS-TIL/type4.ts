// 함수와 methods에 type alias 지정하는 법

// 함수 타입도 type alias로 저장해서 사용할 수 있다
// 예를 들어 숫자 2개를 파라미터로 입력할 수 있고, 숫자를 return 하는 함수를 별명을 지어서 사용하려면
type NumOut = ( x :number, y :number ) => number;
let newFunction :NumOut = function(x, y) {
  return x + y
};

// 실습1 - 오브젝트 자료 안에 함수 타입 지정하는 법
// plusOne - 숫자를 넣어서 숫자를 return 하는 함수
// changeName - 아무것도 return 하면 안됨

type Info = {
  name : string,
  age : number,
  plusOne : ( x :number ) => number,
  changeName : () => void,
}
let 회원정보 :Info = {
  name : "yun",
  age : 30,
  plusOne(x) {
    return x + 1
  },
  changeName : () => {
    console.log("hi");
  },
};
회원정보.plusOne(1);
회원정보.changeName();

// 실습2 - 아래 함수 2개 만들고 타입지정하기
// cutZero() - 문자 입력, 맨 앞에 '0'이 있으면 0 제거 후 문자 type으로 return
// removeDash() - 문자 입력, 모든 대시기호(-) 제거 후 그 값을 숫자 type으로 return

type CutType = {
  cutZero : ( x : string ) => string,
  removeDash : ( x : string ) => number,
}

let result :CutType = {
  cutZero(x) {
    let result = x.replace(/(^0+)/,""); // 문자열 맨 앞 0 제거 
    return result;
  },
  removeDash(x) {
    let result = x.replace(/(\-)/g,""); // 문자열 내 "-" 기호 모두 제거
    return parseFloat(result); // 문자열을 숫자로 변환
  }
}
result.cutZero("012345");
result.removeDash("010-1234-5678");

// 실습3 - 콜백함수
// 실습2에서 만든 함수들을 파라미터로 넣을 수 있는 함수 제작
// 파라미터 3개 생성(string, cutZero, removeDash)
type FuncType1 = ( x : string ) => string
type FuncType2 = ( x : string ) => number

function callBack(x :string, func1 :FuncType1, func2 :FuncType2) {
  let result = func1(x); // 10-1111-2222
  let result2 = func2(result); // 1011112222
  console.log(result2);
}
callBack("010-1111-2222", result.cutZero, result.removeDash);