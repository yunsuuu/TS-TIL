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
  readonly name : String // readonly - 읽기전용, 선언해준 순간부터 수정 불가
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

// homework
type Obj = {
  color? :string,
  size :number,
  readonly position :number[],
}

let test :Obj = {
  size : 123,
  position : [1, 2, 3] 
}