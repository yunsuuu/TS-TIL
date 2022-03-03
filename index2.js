// let 이름: string = "yun";
// let 나이 = 24;
// let 결혼했니: boolean  = true;
// null - 텅 비었음
// undefined - 변수 만들어졌지만 정의되지 않았음
// Array 자료형 타입 정하기
var 회원들 = ["yun", "kim"];
// '회원들'이라는 변수에는 array만 들어올 수 있음
// Object 자료형 타입 정하기
/// 자료 안에 들어갈 타입은 내가 만들 object와 똑같이 지정
var 회원 = {
    // '동료들'이라는 변수에는 object만 들어올 수 있음
    // name은 무조건 string, age는 무조건 number
    name: "yun",
    age: 24,
};
var 나 = "yun"; // 타입지정 별도로 하지 않아도 자동으로 지정되어있음(타입지정 생략 가능)
// 실습
var favorite = {
    song: "isn't she lovely",
    singer: "ohhyuk",
};
var project = {
    member: ["kim", "yun"],
    days: 30,
    started: true,
};
// Union Type - 타입 2개 이상 합친 새로운 타입
var 사람 = 123; // number or string
// 실습
// let 배열 = [1, "2", 3]; // 숫자, 문자 섞였을 때 타입지정
var 배열 = [1, "2", 3];
var 오브젝트 = { a: 123 };
// any 타입 - 모든 자료형 허용
var 애니;
// 타입으로 접근하는 개념이 아닌 타입실드 해제문법(오히려 타입이 아님)
// '애니'라는 변수는 타입을 해제시켜라 
애니 = 123;
애니 = true;
애니 = [];
// unknown 타입 - any 대신 사용, 모든 자료형 허용
var 언노운;
// 언노운 = 123;
// 언노운 = {};
// unknown 타입이 any보다 안전한 이유
// unknown은 버그를 알려줌
// any는 실드 해제 문법이기 때문에 버그가 발생해도 알려주지 않음
// 타입스크립트의 엄격함에 대해
// -> 간단한 수학연산도 타입이 맞아야함
언노운 - 1; // 버그 발생(언노운은 unknown 타입인데 사칙연산에 대입했기 때문)
var age;
age + 1;
// 버그 발생 이유
// string + 1(가능)
// number + 1(가능)
// string | number =  -> string | number 라는 새로운 union 타입이기 때문, 
var 나이 = 1;
나이 - 1; // 에러 발생 이유: 나이 = 값으로 1(number)을 줬지만 타입은 unknown이기 때문
// homework
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false; // number | boolean
학교.friend = ["Lee", 학교.teacher]; // string | string[]
