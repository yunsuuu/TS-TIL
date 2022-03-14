// Generic 함수 - 파라미터로 타입을 입력하는 함수
// answer + 1 과 같은 오류를 해결하기 위해 Generic 함수 사용
// 장점 : narrowing보다 간결, 확장성도 높음
function 함수<T>(x :T[]) :T{ // 함수 파라미터로 직접 작명해준 type을 넣어줌
  // array 입력하면 첫 자료 return 해주는 함수
  return x[0];  
}
let answer = 함수<number>([4, 2]);
let answer2 = 함수<string>(["4", "2"]); // 확장성 높음
console.log(answer); // 4 출력
console.log(answer + 1);

// extends 키워드로 파라미터에 넣을 수 있는 타입 제한 가능
function 함수2<T2 extends number>(x :T2){ // number와 비슷한 속성을 가지고 있는지 if문으로 체크하는 개념
  return x - 1; // extends 하기 전, myType2만 넣었을 때 코드에 에러 발생 -> x 자리에 number가 들어올지 아닐지 불확실하기 때문
  // extends number로 타입 파라미터에 제한두기(myType2가 우측에 있는 속성을 가지고 있는지 체크)
  // 일종의 narrowing (단, narrowing보다 간결하게 타입을 제한할 수 있음)
}
함수2<number>(3); // return 2

// 커스텀 타입도 extends 가능
// 예제 - 파라미터에 문자를 넣으면 자릿수를 세어서 출력해주는 함수
interface LengthCheck {
  length :number; // length라는 프로퍼티가 있다고 가정
}
function 자릿수<T3 extends LengthCheck>(x :T3){ // T3이 LengthCheck 속성을 가지고 있는지 체크
  return x.length; // T3이 LengthCheck 속성을 만족하면 return 해라
}
// let a = 자릿수<number>("hello"); // number에 length 못 붙임 -> 에러발생
// string, []은 .length 붙일 수 있음
let a = 자릿수<string>("hello");
let b = 자릿수<string[]>(["hello"]);

// 실습 - 문자를 넣으면 문자 갯수, array를 집어넣으면 array 안의 자료 갯수를 콘솔창에 출력해주는 함수
function Test2<T4 extends string | string[]>(x :T4){ // T4가 string | string[]의 속성을 가지면 콘솔해줘라
  console.log(x.length);
}
let a1 = Test2<string>("hello"); // 4
let a2 = Test2<string[]>(["hello", "hi", "hihi"]); // 3

// 실습2 - data라는 JSON 자료를 object{} 자료로 변환해서 return 해주는 함수 만들기, return된 object의 타입은 Animal
interface Animal {
  name :string;
  age :number;
}

// JSON 개념
// object 자료형인데 글자로 바꾸려고 전부 따옴표 쳐놓은 자료를 JSON이라고 칭함
// 서버랑 통신할 때 가끔 사용
// JSON -> object 변환하고 싶을 때 직접 따옴표를 제거, 또는 JSON.parse() 소괄호 안에 JSON 자료를 넣으면 그 자리에 따옴표가 제거된 object가 반환

let data = '{"name" : "dog", "age" : 1}';
// JSON 문자열을 객체로 변환 -> JSON.parse(data)

function Test3<T5>(x :string) :T5{
  let jsonObj = JSON.parse(x); // json 문자열을 객체로 변환
  return jsonObj;
}
let a3 = Test3<Animal>(data); // Animal type을 가짐

// 실습3 - class 수정
class Test4<T6>{
  name;
  constructor(a :T6){
    this.name = a;
  }
}
let result = new Test4<string>("lala");
result.name;