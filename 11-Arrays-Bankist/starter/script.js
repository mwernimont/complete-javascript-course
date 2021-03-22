'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
//##########SIMPLE ARRAY METHODS###########
let arr = ['a', 'b', 'c', 'd', 'e'];
//SLICE - CREATES SHALLOW COPY ARRAY
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
//SPLICE - MUTATES ARRAY
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
//REVERSE - MUTATES ARRAY
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['f', 'j', 'i', 'g'];
console.log(arr2.reverse());
console.log(arr2);
//CONCAT - DOES NOT MUTATE ARRAY
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
//JOIN
console.log(letters.join(' - '));
//##########LOOPING ARRAYS: FOREACH###########
//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log('----- FOR EACH -----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0; function(200);
// 1; function(450);
//so on...
//##########FOREACH WITH MAPS AND SETS###########
//Map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
//##########CODING CHALLENGE #1###########
function checkDogs(dogsJulia, dogsKate) {
  const juliaCorrected = dogsJulia.slice(1, -2);
  const dogs = [...juliaCorrected, ...dogsKate];
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog #${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog #${i + 1} is still a puppy 🐶`);
    }
  });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('----- Second Data Set -----');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
//##########DATA TRANSFORMATIONS: MAPS, FILTER, REDUCE###########
//##########THE MAP METHOD###########
const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});
console.log(movementsDescriptions);
//##########THE FILTER METHOD###########
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
//##########THE REDUCE METHOD###########
console.log(movements);
//accumulator is like a snowball
const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration #${i}: ${acc}`);
  return acc + curr;
}, 0);
console.log(balance);
//Maximum value
const maximum = movements.reduce(function (acc, curr) {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
}, movements[0]);
console.log(maximum);
//##########CODING CHALLENGE #2###########
function calcAverageHumanAge(ages) {
  ages
    .map(age => (age > 2 ? 16 + age * 4 : 2 * age))
    .filter(age => age >= 18)
    .reduce(function (acc, age, i, arr) {
      return acc + age / arr.length;
    }, 0);
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
console.log();

//##########THE MAGIC OF CHAINING METHODS###########
//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * 1.1;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
//##########THE FIND METHOD###########
const firstWithdrawal = movements.find(function (mov) {
  return mov < 0;
});
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
//##########SOME EVERY METHOD###########
console.log(movements);
//EQUALITY
console.log(movements.includes(-130));
//SOME CONDITION
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);
//EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
//##########FLAT AND FLATMAP###########
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
//Flat only goes 1 level deep
console.log(arrDeep.flat());
//Set the depth
console.log(arrDeep.flat(2));

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr);
console.log(overallBalance);
//Flat Map - only ever goes 1 level deep
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => acc + curr);
console.log(overallBalance2);
//##########SORTING ARRAYS###########
//STRINGS
const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);
console.log(movements);
//return < 0 A, B (keep order)
// return > 0 B, A (switch order)
//asceding
// movements.sort(function (a, b) {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);
//desceding
// movements.sort(function (a, b) {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
//##########MORE WAYS OF CREATING AND FILLING ARRAYS###########
const arr = [1, 2, 3, 4, 5, 6, 7];
const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));
//Empty arrays + fill method
x.fill(1);
x.fill(2, 3, 5);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
//##########ARRAY METHODS PRACTICE###########

//1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

//2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

//Prefixed ++ operator
let a = 10;
console.log(++a);

//3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

//4.
//this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
//##########CODING CHALLENGE #4###########
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//1.
dogs.forEach(function (dog) {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);
//2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarahs dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);
//3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4.
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

//7.
console.log(dogs.filter(checkEatingOkay));

//8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
*/
//##########PROJECT: "BANKIST" APP###########
//##########CREATING DOM ELEMENTS###########
function displayMovements(movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov} €</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function calcDisplayBalance(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
}
function calcDisplaySummary(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interest}€`;
}
//##########COMPUTING USER NAMES###########
function createUsernames(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}
createUsernames(accounts);

function updateUI(acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display account balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
}
//##########IMPLEMENT LOGIN###########
//Event handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;
    //Clear Input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});
//##########IMPLEMENT TRANSFERS###########
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});
//##########IMPLEMENT LOAN###########
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
//##########THE FINDINDEX METHOD###########
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const user = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  if (user === currentAccount.username && pin === currentAccount.pin) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    //Delete Account
    accounts.splice(index, 1);
    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
//##########SORT MOVEMENTS###########
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
