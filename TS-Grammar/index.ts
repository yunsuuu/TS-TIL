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
    // ...rest parameter - 매개변수 이름 앞에 점 3개(...)를 붙여서 정의한 매개변수
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

// rest parameter
function 함수(...a :number[]){ // rest 파라미터는 항상 [] 안에 담겨오기 때문에 타입지정도 array처럼 해주면 됨
  // ...a : 파라미터가 무제한 들어올 수 있음
  // 다른 파라미터가 있으면 ...a는 맨 뒤에만 사용 가능
  console.log(a) // rest parameter 자리에 들어온 데이터는 전부 []에 담아줌 -> a = [1, 2, 3, 4, 5, 6]
}
함수(1, 2, 3, 4, 5, 6);

// ...spread operator (array or object의 괄호를 벗기고 싶을 때)
let arr = [1, 2, 3]
let arr2 = [4, 5]
let arr3 = [...arr, ...arr2] // arr3 = [1, 2, 3, 4, 5]

// destructuring - array, object 안에 있는 데이터를 빼서 변수로 만들고 싶을 때
// 아래와 같이 사용해도 되지만 코드를 간결하게 하는 새로운 문법 존재 (destructuring)
// let 사람 = { student : true, age : 20 }
// let student = 사람.student;
// let age = 사람.age;

let [변수1, 변수2] = ["안녕", 100]
// 변수1 = "안녕" / 변수2 = 100

// object 자료도 마찬가지로
let { student, age } = { student : true, age : 20 } // true, 20이라는 데이터를 변수로 따로 빼서 저장하고 싶을 때
// let { student : student, age : age } 가 생략되어 위처럼 사용

// 실습 - object 안에 있던 자료를 통째로 함수 파라미터로 집어넣고 싶을 때(destructuring 문법 활용)
// 함수 파라미터 작명할 때 destructuring 쓰면 object 넣기 쉬워짐
let 오브젝트 = { student : true, age : 20 }
type 오브젝트타입 = { student :boolean, age :number }
function 함수1({student, age} :오브젝트타입){ // 파라미터 작명할 때 a, b 대신 destructuring 문법과 유사한 { student, age }를 파라미터로 넣어주기
  console.log(student, age) // 결과값으로 true, 20 반환 
}

함수1(오브젝트) // = 함수1( { student : true, age : 20 }) 과 같음
// 함수 파라미터에 데이터를 넣어주는 작업 = 변수 만드는 작업

// 실습2 - 숫자 여러개를 입력하면 최댓값을 return 해주는 함수
function maxNum(...a :number[]){
  if(a.length === 0){
    return 0; // 빈 배열이면 0을 리턴
  } else {
    
  }
}
maxNum(1, 4, 5, 2, 3, 7); // return 7