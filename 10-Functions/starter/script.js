'use strict';
/*
//##########DEFAULT PARAMETERS###########
const bookings = [];
function createBooking(
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('HL321', undefined, 1000);
//##########HOW PASSING ARGUEMENTS WORKS VALUE VS REFERENCE###########
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

function checkIn(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('check in');
  } else {
    alert('Wrong passport');
  }
}
checkIn(flight, jonas);
console.log(flight, jonas);

function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 10000000);
}

newPassport(jonas);
checkIn(flight, jonas);
//##########FIRST-CLASS AND HIGHER-ORDER FUNCTIONS###########
//JS treats functions as FIRST-CLASS CITIZENS
//This means that functions are SIMPLY VALUES
//Functions are just another "TYPE" OF OBJECT

//Higher Order Function
//A function that receives another functions as an argument, that RETURNS  an ew function, or both
//This is only possible because of first-class functions
//##########FUNCTIONS ACCEPTING CALLBACK FUNCTIONS###########
const oneWord = function (str) {
  return str.replaceAll(' ', '');
};
const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};
//Higher Order Function
const tranformer = function (str, fn) {
  console.log(str);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

tranformer('JavaScript is the best', upperFirstWord);
tranformer('JavaScript is the best', oneWord);
//JS uses callbacks all the time
const highFive = function () {
  console.log('👋');
};
document.body.addEventListener('click', highFive);

['Jona', 'Martha', 'Adam'].forEach(highFive);
//##########FUNCTIONS RETURNING FUNCTIONS###########
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');
//##########THE CALL AND APPLY METHODS###########
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: `${name}`,
    });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//Does not work
// book(23, 'Sarah Williams');
//CallMethod
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 234, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 435, "Liam O'brian");
console.log(swiss);

//Apply Method - not used much anymore
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
//Spread operator is more used
book.call(swiss, ...flightData);
//##########THE BIND METHOD###########
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: `${name}`,
    });
  },
};
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
const book = lufthansa.book;
//book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Marty Wernimont');
bookEW23('Martha Cooper');

//With Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value + value * 0.23;
console.log(addVAT(300));

function tax(rate) {
  return function (value) {
    console.log(value + value * rate);
  };
}

const addVAT2 = tax(0.23);
addVAT2(300);
//##########CODING CHALLENGE #1###########
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    //Register
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
//##########IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)###########
//IIFE
(function () {
  console.log('This will never run again');
})();
(() => console.log('This will also never run again'))();
//##########CLOSURES###########
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
//Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
//Re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);

//##########CODING CHALLENGE #2###########
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
