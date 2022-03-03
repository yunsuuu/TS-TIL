// 타입을 엄격하게 관리
// 타입으로 지정될 수 있는 것 - string / number / boolean / null / undefined / bigint / [] / {} 등
// 타입 지정 변수명은 대문자로 시작
// 'me'라는 변수에는 string(문자) type만 들어올 수 있음
var Me = "soo";
// me = 123; -> 변수에 숫자가 들어가면 에러 발생
// 'arr'라는 변수에는 string이 담긴 array만 들어올 수 있음
var Arr = ["kim", "yun"];
// 'obj'라는 변수에는 object type만 들어올 수 있음
var Obj = { name: "yun" };
// let obj :{ name? : string } = { name : "yun" }
// -> name 뒤에 물음표 붙으면 'name' 속성은 옵션(name이  있을 수도 있고, 없을 수도 있음)
// let obj :{ name? : string } = { } -> name 속성이 없어도 에러 나지 않음
// Union type - 다양한 타입이 들어올 수 있게 지정
// 'name'이라는 변수에는 string or number가 들어올 수 있음
var Name = "yun";
var person = 123;
// 함수에 타입 지정하기
function 함수(x) {
    return x * 2;
}
var yun = [123, true];
var soo = { name: "yun" };
