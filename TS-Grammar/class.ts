// class 많이 만들어서 개발하려면 public, private, protected, static 키워드 유용
class User {
  name = "yun";
  constructor(a){
  this.name = a;
  }
}
new User("kim");

// 1. public 키워드 - public이 붙은 속성은 모든 자식들이 수정 가능
class User1 {
  public name = "yun"; // 필드에서 변수 지정
  constructor(a){ // User로부터 뽑히는 object들의 속성을 {} 안에 지정
  this.name = a;
  }
}
let user1 = new User1("kim");
user1.name = "park"; // public은 생략 가능(써도 안 써도 무방)

// 2. private 키워드 - private가 붙으면 class 중괄호 안에서만 수정, 이용 가능
// ** 데이터를 외부로부터 보호하고 싶을 때 자주 사용하는 패턴
class User2 {
  name :string;
  private familyName :string = "yun"; // 수정되면 안 되는 중요한 속성들을 private으로 수정, 이용 방지
  constructor(a){
  this.name = this.familyName + a;
  }

  // class{} 밖에서 familyName을 변경해야 하는 특이사항이 생길 경우
  이름변경함수(){
  this.familyName = "park";
  }
}
let user2 = new User2("soo"); // yunsoo
console.log(user2.name); // yunsoo
// console.log(user2.familyName); // class {} 바깥에서 familyName 사용시 에러발생
user2.이름변경함수(); // familyName 속성에 private 키워드가 적용되었지만 이름변경함수를 통해 class {} 밖에서도 수정 가능

// public 키워드 사용하면 this.속성 생략가능 (위, 아래 코드 동일)
class Person1 {
  name;
  constructor( name :string ){
  this.name = "yun";
  }
}
let person1 = new Person1("yun"); // Person1 { name : "yun" }

class Person2 {
  constructor( public name :string ){

  }
}
let person2 = new Person2("yun"); // Person2 { name : "yun" }

// class를 복사하고 싶으면 extends 붙이면 됨
class User3 {
  x = 10; // 필드값
}

class NewUser extends User3 {
  // User3 내부에 있던 오브젝트 속성들 모두 복사
}
let newUser = new NewUser();
console.log(NewUser); // NewUser {x: 10}

// 3. protected 키워드 - private과 유사한데 확장성 높음, extends된 class 내부에서 사용 가능, 자식들은 사용 불가능
class User4 {
  protected x = 10;
}
class NewUser4 extends User4 {
  doThis(){
  this.x = 20; 
  // User4의 x에 protected를 적용해줬기 때문에 extends된 NewUser4 class에서 x 조작 가능
  // protected가 아닌 private을 사용하면 x 조작 불가 
  }
}

// 4. static 키워드 - 부모 class에 직접 부여(자식에게 오브젝트 속성 물려주지 않음)
class User5 {
  static x = 10;
  y = 20;
}
let user5 = new User5(); // 자식
console.log(user5); // {y: 20} -> static을 붙인 x는 복사하지 않음

// ** private / protected / public + static 사용 가능
class ex {
  private static x = 10;
}

// static 키워드 활용예시
class Test {
  static skill = "js"; // 중요한 속성이기 때문에 자식들이 이용하지 못하게 static 키워드 지정
  intro = Test.skill + "전문가입니다";
}
let test = new Test();
console.log(test); // {intro: "js 전문가입니다"}

// skill명을 ts로 변경하고 싶음
Test.skill = "ts";

let test2 = new Test();
console.log(test2); // {intro: "ts 전문가입니다"}

// private 키워드 활용예시
class Test1 {
  private skill = "js"; // js가 수정되지 않게 private으로 조작 막음
  intro = this.skill + "전문가입니다";

  // skill명을 수정하고 싶음
  changeSkill(a :string){
    this.skill = a;
  }
}
let test1 = new Test1();
console.log(test1); // {intro: "js 전문가입니다"}
test1.changeSkill("ts"); // {intro: "ts 전문가입니다"}

// 실습1 - 다음 x, y, z 속성의 특징을 설명
class Homework {
  private static x = 10;
  // Homework{} 내부에서만 수정, 조작 가능, 자식요소에는 x = 10; 물려주지 않음
  public static y = 20;
  // 자식요소에 y = 20 물려주지 않음
  protected z = 30;
  // private과 유사하게 class {} 내부에서 수정 가능하지만 조금 더 확장성이 높아 extends된 class 내부에서도 수정, 조작 가능
}

// 실습2 - x 속성에 숫자를 더해주는 함수
class Homework1 {
  private static x = 10; // extends한 class 내부에서 x값 조작 가능, static으로 자식에게 속성 물려주지 않음 
  public static y = 20;

  addOne(a :number){
    return 10 + a;
  }
}
Homework1.addOne(3); // 10 + 3 = 13
Homework1.addOne(4) // 10 + 4 = 14
