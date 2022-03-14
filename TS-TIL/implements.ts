// implements 키워드
// interface는 obj 타입지정할 때 사용 + class 타입 확인할 때도 사용
// ** 단, implements 키워드 필요

// class Car로부터 생상되는 obj들은 model, price 속성을 가짐, 근데 class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶을 때 interface + implements 키워드 사용

interface CarType {
  model :string,
  price :number
}

class Car implements CarType { 
  // 이 class(Car)가 interface에 있는 속성을 가지고 있는가
  // price 속성을 제거하면 에러 발생
  model :string;
  price :number = 1000;
  constructor(a :string){
    this.model = a;
  }
}
let 붕붕 = new Car("morning");

interface CarType1 {
  model :string,
  tax :(price :number) => number;
}
class Car1 implements CarType1 {
  model; // type :any
  tax(a){ // a :any
    return a * 0.1;
  }
}
// CarType에 있던 model :string 반영되지 않음, 마찬가지로 tax() 함수에 있던 number 타입도 반영되지 않음
// -> implements는 class 타입을 체크하는 용도지, 할당하지 않음!