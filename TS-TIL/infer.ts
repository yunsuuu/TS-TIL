// 삼항연산자 -> 조건식이 참이면 A타입 남기고, 거짓이면 B타입 남기는 코드 가능
type 에이지<T> = T;
let a1 :에이지<string>; // a라는 변수는 string 타입을 가짐

// type if문은 삼항연산자로 작성, 조건식은 extends 써야함
type If<T> = T extends string ? string : unknown; // extends 문법 사용
// T가 string에 속하냐(왼)
// 파라미터로 들어온 type이 string이면 변수 a2 type = string, 아닌 경우 unknown type 반환
let a2 :If<string>;
