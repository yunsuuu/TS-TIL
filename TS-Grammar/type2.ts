import {이름, 나이, Name} from "./export-import";
// ./ -> 현재경로, ts 파일 확장자는 붙이지 않아도 됨
// a.ts 파일에서 '이름'이라는 변수를 import(불러오기)해서 사용
let test :Name = "kim";

// 실습1
import {Name, Age} from "./export-import"; // a.ts에 있는 Name, Age 타입을 가지고 와서 사용
let 이름 = "kim";
let 나이 :Age = (a) => { return a + 10 };

// import 사용하여 Car 오브젝트 데이터 수정
import {Car, Bike} from "./export-import";
let car :Car = { wheel : 4, model : "Sonata" };

// 실습2
import { ObjFunction } from "./export-import";

let testFunc :ObjFunction = function(a){
  console.log(a);
}
testFunc({abc : "hi"});