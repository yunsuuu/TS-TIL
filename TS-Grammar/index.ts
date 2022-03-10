// class type
class Person {
  name :string; // 위에 변수를 미리 만들어놓아야 아래에서 this.name 사용 가능
  constructor(a :string){
    this.name = a;
  }
  함수(a :string){
    console.log(`안녕 ${a}`);
  }
}
Person.prototype.함수 = function(){} // Person의 모든 자식들은 '함수'를 가져다 쓸 수 있음
let 사람1 = new Person("kim");
let 사람2 = new Person("lee");

// 실습 - data 라는 속성에 number 타입 지정해주기
class 펄슨 {
  data = 0; // 타입지정 따로 해주지 않아도 자동으로 number 타입으로 지정됨
  // 굳이 타입 지정한다면 data :number = 0;
}
let john = new 펄슨();
let yun = new 펄슨();

console.log(john.data); // john.data = "2" -> string 넣으면 에러 발생
console.log(yun.data);

// 실습2
// { model : "소나타", price : 300 } 이렇게 생긴 오브젝트를 복사해주는 클래스 생성
// 복사된 오브젝트 자료들은 .tax()라는 함수를 사용 가능한데, 현재 오브젝트에 저장된 price의 10분의 1을 출력
// model, price, tax()함수의 return값의 타입 지정까지

class Car {
  model :string;
  price :number;
  constructor(a :string, b :number){
    this.model = a;
    this.price = b;
  }

  tax() :number{
    return this.price * 0.1; // b가 아니라 this.price
  }
}
let car1 = new Car("소나타", 3000);
console.log(car1) // { model : "소나타", price : 3000 };
console.log(car1.tax()) // 300;

// 실습3 - class인데 파라미터가 잔뜩 들어가는 class Word 생성
// 오브젝트 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면
// 숫자는 전부 오브젝트 안의 num 속성 안에 array 형태로 저장
// 문자는 전부 오브젝트 안의 str 속성 안에 array 형태로 저장
// 클래스 만들 때 넣을 수 있는 숫자와 문자 갯수 제한 없음(타입 지정)

class Word {
  num :number[];
  str :string[];

  constructor(...ele){
    // Rest Parameter - 매개변수 이름 앞에 점 3개(...)를 붙여서 정의한 매개변수
    // 함수에 전달된 인수들의 목록을 배열로 전달 받음
    let numbers :number[] = [];
    let strings :string[] = [];

    ele.forEach((i) => {
      if(typeof i === "string"){
        strings.push(i);
      } else {
        numbers.push(i);
      }
    })
    this.num = numbers; // 숫자로 가득한 배열 { num : [3, 6] }
    this.str = strings; // 문자로 가득한 배열 { str : ["kim", "soo"] }
  }
}
let word = new Word("kim", 3, 6, "soo");
console.log(word.num); // [3, 6]
console.log(word.str); // ["kim", "soo"]