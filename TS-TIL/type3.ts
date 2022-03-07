// type alias(타입변수) - 타입이 복잡할 때 변수에 담아쓰기
type AnimalType = string | number | undefined
let 동물 :AnimalType;

type CoworkerType = { name : string, age : number }
let 동료 :CoworkerType = { name : "yun", age: 20 };

// const 변수는 등호로 재할당만 막는 역할, const로 담은 object 수정은 자유롭게 가능
// const 출생지역 = "seoul";
// 출생지역 = "busan"; // 에러발생

// 오브젝트 내부 자료 변경하는 문법
const 출생지역 = { region : "seoul" }
출생지역.region = "busan"; // 변경가능

type Girlfriend = {
  readonly name : String // readonly - 읽기전용, 선언한 순간부터 수정 불가
}

const gf :Girlfriend = {
  name : "yun"
}
// gf.name = "kim" // readonly가 설정되어 에러발생

// type 변수 union type으로 합치기 가능
type Name1 = string;
type Age = number;
type person = Name1 | Age;

type PositionX = { x :number };
type PositionY = { y :number };
type NewType = PositionX & PositionY; // { x :number, y :number }; // obj를 & 연산자로 extend 하기 

let position :NewType = { x : 10, y : 20};

// 실습1
type Obj = { // type alias - type 변수명(타입이 복잡할 때 변수명으로 저장)
  color? :string,
  size :number,
  readonly position :number[],
}
 
let test1 :Obj = {
  size : 123,
  position : [1, 2, 3] 
}

// 실습2
type User = { // 타입을 검사하는 type alias
  name :string,
  phone :number,
  email? :string, // email - 옵션
}
type Adult = { adult :boolean } // 미성년자 여부

type NewUser = User & Adult; // & 기호로 type extend 하기

let userInfo :NewUser = {
  name: "kim",
  phone: 123,
  // email: "abc@naver.com",
  adult: true,
}

// Literal Types - 특정 문자나 숫자만 가질 수 있게 제한을 두는 타입(더욱 엄격한 타입지정 실드)
// 자료를 여러개 저장할 수 있는 const 변수(const 변수의 업그레이드 버전)
// 광범위하게 string으로 지정하는 것이 아닌 '이름'이라는 변수에는 kim or park 문자만 들어올 수 있게 지정 가능

// Literal type 장점
// - 변수에 뭐가 들어올지 더 염격하게 관리 가능
// - 자동완성 힌트 유용

let 이름 :"yun"; // 이 변수에는 무조건 "yun"만 들어올 수 있음
// 이름 = "kim"; // 에러발생

let ItsMe : "여자" | "솔로";
ItsMe = "솔로"

function test2(x :"hello") :1 | 0 { // 1과 0만 return 가능  
  return 1
}
test2("hello")

// 실습
// 가위, 바위, 보 중 1개 입력 가능, 가위, 바위, 보만 들어올 수 있는 Array를 return
function rsp(x :"가위" | "바위" | "보") :("가위" | "바위" | "보")[]{
  return ["가위"]
}
rsp("가위"); // ["가위"]

// const 변수의 한계
// - const 변수에는 변하지 않는 값을 저장할 수 있는데,2개 이상 값 저장 못함
// - Literal type 사용하면 2개 이상 값 저장 가능
// - const 변수 = "yun"; let 변수 = "yun" | "soo";

// Literal type의 문제점
var 자료 = {
  name : "yun"
} as const 
// as const 효과
// 1) obj value값을 그대로 타입으로 지정(name의 타입은 string이 아닌 yun)
// 2) obj 속성들에 모두 readonnly 붙여줌(지정한 타입은 더 이상 수정불가)
// -> 자료.name = 123 으로 바꾸면 에러 발생(readonly가 적용됐기 때문에 수정불가)
자료.name // -> "yun"

function test3(x :"yun") { 
  // x :"yun" -> "yun"이라는 자료만 들어올 수 있다는 뜻 아님, "yun"이라는 타입만 들어올 수 있다는 뜻!

}
test3("yun") // -> "yun"
test3(자료.name) // -> 에러발생, 자료.name의 타입은 string(타입이 "yun"이 아님), 이를 해결하기 위해 as const 사용