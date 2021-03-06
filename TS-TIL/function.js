// 함수는 총 두 군데 타입 지정이 가능 - 함수로 들어오는 자료(파라미터), 함수에서 나가는 자료(return)
// 파라미터 괄호 안에 파라미터값에 대한 타입 지정, 파라미터 괄호 옆에 결과값에 대한 타입 지정
function 함수(x) {
    return x * 2;
}
// 함수("6") -> 에러
함수(6);
// void 타입 - return할 자료가 없는 함수의 타입으로 사용
function 함수(x) {
    // return 1 + 1 // -> 에러발생
    1 + 1; // return으로 남기는 값 없이 1 + 1만 하고 싶을 때 void 사용
}
// 자바스크립트와의 차이점 - 파라미터에 타입을 지정하면 필수 파라미터가 됨
function 함수(y) {
    return y * 2;
}
// 함수() // 에러발생
함수(20); // 함수 호출할 때 파라미터 필수
// 파라미터가 옵션일 경우 - 함수 호출할 때 파라미터를 넣어도 되고, 안 넣어도 되고
// z? :number => z :number | undefined 와 같은 의미
function 함수(z) {
    return z * 3;
}
함수(); // 가능 -> 파라미터에 값을 넣지 않아도 에러 발생X -> 파라미터 우측에 ?를 넣어줘서
함수(2); // 가능

// 실습 - 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고, 파라미터를 비우면 "이름이 없습니다"를 출력하는 함수
function sayHi(name) {
    if (name) { // 파라미터(name)가 있으면
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name));
    }
    else {
        console.log("이름이 없습니다!");
    }
}
sayHi();
sayHi("홍길동");
// 실습 - 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수
// 예를 들어 "123" 문자를 입력하면 3이 return 되어야 함
// 숫자도 마찬가지로 1234 입력하면 4가 return 되어야 함
// 숫자 또는 문자 이외의 자료가 들어오면 안됨
function count(x) {
    // 자릿수를 세어 출력하는 코드
    if (x) {
        return x;
    }
}