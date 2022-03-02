// 타입을 엄격하게 관리
// 타입으로 지정될 수 있는 것 - string / number / boolean / null / undefined / bigint / [] / {} 등
// 타입 지정 변수명은 대문자로 시작

// 'me'라는 변수에는 string(문자) type만 들어올 수 있음
let Me :string = "soo";
// me = 123; -> 변수에 숫자가 들어가면 에러 발생

// 'arr'라는 변수에는 string이 담긴 array만 들어올 수 있음
let Arr :string[] = ["kim", "yun"];

// 'obj'라는 변수에는 object type만 들어올 수 있음
let Obj :{ name :string } = { name : "yun" } 
// let obj :{ name? : string } = { name : "yun" }
// -> name 뒤에 물음표 붙으면 'name' 속성은 옵션(name이  있을 수도 있고, 없을 수도 있음)
// let obj :{ name? : string } = { } -> name 속성이 없어도 에러 나지 않음

// Union type - 다양한 타입이 들어올 수 있게 지정
// 'name'이라는 변수에는 string or number가 들어올 수 있음
let Name :string | number = "yun";
// string이 가득 담긴 array or number 가능
// let Name :string[] | number = "yun";

// Type alias - type은 변수에 담아쓸 수 있음
type Name = string | number;
let person :Name = 123;

// 함수에 타입 지정하기
function 함수(x :number) :number {
  return x * 2;
}
// 이  함수는 파라미터로 number, return값으로 number 반환
// 함수("123"); // 변수 '함수'에 string을 넣으면 에러 발생

// array에 쓸 수 있는 tuple 타입
type Member = [number, boolean];
let yun :Member = [123, true];
// 무조건 첫번째는 number, 두번째는 boolean
// 첫번째에 string이 입력되면 에러 발생

// 아래와 같이 object 내 지정할 속성이 많을 때
// type Yun = {
//   name : string,
//   age : number,
// }
// let soo : Yun = { name : "yun"};

// 위의 코드를 아래와 같이 간결하게 바꿀 수 있음
type Mini = {
  [key :string] :string,
  // string으로 된 모든 object 속성의 타입은 string을 가져야 함
}
let soo :Mini = { name : "yun"};