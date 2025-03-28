// 일반함수와 화살표함수

//함수형 변수

let hi = function () {
  return '안녕하세요';
};

console.log(hi());

//일반함수의 매개변수

function sayHi(method) {
  console.log(method());
}

sayHi(hi);
//화살표 함수 변경

let sum = (a, b) => {
  return a + b;
};
