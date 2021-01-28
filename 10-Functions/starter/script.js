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
*/
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
