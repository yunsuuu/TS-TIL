// never type - function return 값에 붙일 수 있는
// 조건1. return값이 없어야 함
// 조건2. endpoint가 없어야 함(함수실행이 끝나지 않아야 함)
function 함수1() :never{
  throw new Error() // 강제로 에러 내는 코드 - 에러가 발생하면 함수 실행 중단(endpoint가 없는 함수)
  while(true){ // while 반복문 조건을 true로 지정하면 무한반복

  }
}
// never 타입 거의 사용하지 않음 -> 결과를 return 하기 싫으면 void 타입 사용하면 되기 때문
// function 함수() :void{
// }

// never type 등장하는 경우
// 1) 파라미터가 never 타입이 되는 경우(코드를 이상하게 짜서 잘못된 narrowing을 사용했을 때)
function 함수2(parameter :string){
  if(typeof parameter === "string"){
    console.log(parameter);
  } else {
    console.log(parameter); 
    // parameter :never -> 여기서 never은 절대 일어날 수 없는 경우를 의미
    // 파라미터의 타입을 string으로 지정해줬으니 else가 발생하는 경우는 말이 안됨(never)
  }
}

// 2) 자동으로 never 타입을 가지는 경우
let fun = function(){ // () => never (이상한 경우를 return하면 never로 알려줌)
  throw new Error() // 일부러 에러 발생
}

// 자바스크립트에서 함수를 만드는 2가지 방법
function 함수선언문(){
  throw new Error() // 함수선언문이 아무것도 return 하지 않고 끝나지도 않을 경우 void 타입이 자동으로 return 타입으로 할당
}

let 함수표현식 = function(){
  throw new Error() // 함수표현식이 아무것도 return 하지 않고 끝나지도 않을 경우 never 타입이 자동으로 return 타입으로 할당
}