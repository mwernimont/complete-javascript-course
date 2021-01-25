'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      //Creating NEW variable wth same name as outer scope variable
      const firstName = 'Steven';
      //Reassigning outer scopes variable
      output = 'NEW OUTPUT';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = 'Marty';
calcAge(1990);

//Variables
console.log(me);
// console.log(job);
// console.log(year);
var me = 'Marty';
let job = 'Developer';
const year = 1990;

//Functions
console.log(add(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function add(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Products Deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1990);

const calcAge2 = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge2(1990);

const marty = {
  birthYear: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.birthYear);
  },
};

marty.calcAge();

const matilda = {
  birthYear: 2017,
};

matilda.calcAge = marty.calcAge;
matilda.calcAge();

const f = marty.calcAge;
f();

//var firstName = 'Matilda';
const marty = {
  birthYear: 1991,
  firstName: 'Marty',
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.birthYear);
    //Solution #1 Self variable
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
    // };
    // isMillenial();
    //Solution #2 Arrow Function
    const isMillenial = () => {
      console.log(this);
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

marty.greet();
marty.calcAge();
//Arguements keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

//##########PRIMITIVES VS OBJECTS###########
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Marty',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me: ', me);

//Primitive Types
let lastName = 'Wernimont';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference Types
const jessica = {
  firstName: 'Jesscia',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica, marriedJessica);
//marriedJessica = {};
//Copying Objects
const jessica2 = {
  firstName: 'Jesscia',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Steve', 'John');
console.log(jessica2, jessicaCopy);
*/
