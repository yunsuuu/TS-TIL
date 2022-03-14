// 아래 변수들이 유용해서 다른 파일에서도 사용하고 싶음
// export -> import순으로 진행

// export - 내보내기 
export const 이름 = "yun";
export const 나이 = 20;
// type도 export, import 가능
export type Name = string | boolean;
export type Age = (a :number) => number;

// 실습1
export type Car = {
  wheel : number,
  model : string,
}
export interface Bike { // type 키워드와 유사, 오브젝트 자료형 타입 정할 때 주로 사용 ( type = {} type과 달리 등호 생략)
  wheel : 2,
  model : string,
}
// type Bike = {
//   wheel : 2,
//   model : string,
// }

// 실습2
export type ObjFunction = (a? :object) => void // 값을 return 하지 않음 
// a? = 파라미터가 있어도 되고, 없어도 되고
// 파라미터 a는 object type을 가짐

// namespace - TypeScript 타입변수 숨기는 문법
// 예전 타입스크립트에서 export 하는 작업
namespace 네임스페이스 {
  export type Test = string | number;
}
let 테스트 :네임스페이스.Test= "kim";

// 실습3 - namespace 활용
namespace Dog1 {
  export type Dog = string;
}
namespace Dog2 {
  export interface Dog { name : string };
}
let dog1 :Dog1.Dog = "bark";
let dog2 :Dog2.Dog = { name : "paw" };