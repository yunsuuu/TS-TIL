let obj2 = { name : "yun", age : 20 }
// key값 모두 출력하고 싶을 때
Object.keys(obj2); // obj2가 가지고 있는 key값들을 array 배열에 담아서 출력
// ["name", "age"]

// keyof - key값 전부 가지고 오는
interface Test8 {
  // age :number,
  // name :string
  [key : string] :number // 모듬 속성은 number 타입을 가지게
}
// Test8Keys의 타입은 string | number
type Test8Keys = keyof Test8 // "age" | "name"
// obj가 가지고 있는 key값을 모두 가지고 와서 union 타입으로 만들어줌
let a8 :Test8Keys = "name";

type Taxi = {
  color :boolean,
  model :boolean,
  price : boolean | number
}
// 타입변환기
type TypeChanger<T> = {
  [key in keyof T] :string // keyof T -> 파라미터로 들어온 obj 타입의 key값(color | model | price)
} // 왼쪽에 있는 key 값이 오른쪽에 있는 union type(color | model | price)에 있으면 string으로 지정
type NewType1 = TypeChanger<Taxi> // <T> = <Taxi>

// 실습
type Bus = {
  color :string,
  model :boolean,
  price :number
}
type TypeChanger2<T> = {
  [key in keyof T] :string | number
}
type NewType2 = TypeChanger2<Bus>

// 실습2
type Obj1 = {
  name :string,
  age :number,
  married :boolean
}
type TypeChanger3<myType, T> = {
  [key in keyof myType] :T; // Obj1에 있는 key값("name" | "age" | "married")을 T로 바꿔줌
}
type NewType3 = TypeChanger3<Obj1, boolean>;
type NewType4 = TypeChanger3<Obj1, string[]>;
