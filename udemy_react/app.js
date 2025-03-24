// import apiKey from './util';
// import { abc as def, english } from './util';

// import * as util from './util';

// console.log(def);

// ------------------------------------------------
// function createGreeting(userName, message = 'hello') {
//   // console.log(userName);
//   // console.log(message);
//   return 'hi I am ' + userName + message;
// }
// const gree = createGreeting('max');
// console.log(gree);

// ----------------------------------------
// export default (useName, message) => {
//   console.log('hello');
// };

// ------------------------------------------
// const user = {
//   name: 'daeun',
//   age: 23,
//   greet() {
//     console.log('hello');
//     console.log(this.age);
//   },
// };
// console.log(user.name);
// user.greet();

// ----------------------------------------
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log('hi');
//   }
// }
// const user1 = new User('daeun', 23);
// console.log(user1);
// user1.greet();

// -----------------------------------------
const hobbies = ['sports', 'cooking', 'reading'];
hobbies.push('working');

const index = hobbies.findIndex((item) => item === 'sports');
// 배열의 모든 원소에 대해 findIndex를 실행함
console.log(index);

const editedHobbies = hobbies.map((item) => item + '!');
// const editedHobbies = hobbies.map((item) => ({ text: item }));
// 객체로 만들 때 소괄호로 감싸줘야함
console.log(editedHobbies);
// map은 배열의 모든 원소를 다른 원소로 바꿀 수 있음
// 배열의 모든 원소를 입력값으로 받음
// map은 새 배열을 반환함

// -----------------------------------
// const [firstName, lastName] = ['Max', 'Daeun'];
// const { name, age } = {
//   name: 'daeun',
//   age: 23,
// };
// 객체에서의 이름은 원하는대로 지을 수 없음
// const {name:useName} 콜론을 사용해서 별칭 할당할 수 있음

// -----------------------------------------
const hobbies1 = ['sports', 'cooking'];
const newhobbies = ['reading'];
const mergehobbies = [...hobbies1, ...newhobbies];
console.log(mergehobbies);

const User = {
  name: 'daeun',
  age: 23,
};
const extendedUser = {
  isAdmin: true,
  ...User,
};
console.log(extendedUser);
// ------------------------------------------
const hobbies = ['sports', 'cooking'];

for (const hobby of hobbies) {
  console.log(hobby);
}
// ------------------------------------------
function handleTimeout() {
  console.log('timed out!');
}
const handleTimeout2 = () => {
  console.log('timed out...again!');
};
setTimeout(handleTimeout);
// 소괄호를 붙이면 안됨
setTimeout(() => {
  console.log('more timing out...');
}, 2000);

// -----------------------------------------------
function greeter(greetFn) {
  greetFn();
}
greeter(() => {
  console.log('hi');
});
// ------------------------------------------------
function init() {
  function greet() {
    console.log('hi');
  }
  greet();
}
init();
