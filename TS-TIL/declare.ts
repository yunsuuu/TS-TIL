// declare.js에 있는 데이터를 ts 파일에서 사용하고 싶음

// declare - 이미 정의된 변수나 함수를 재정의 할 수 있음
declare let a :number; // 어딘가에 분명 변수 a 있으니 에러내지 말아달라
console.log(a + 1);