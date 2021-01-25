'use strict';
const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//##########LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES###########
/*
//##########OPTIONAL CHAINING (?.)###########
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
//Example
const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Jonas', email: 'htello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User array empty');
//##########LOOPING ARRAYS: THE FOR-OF LOOP###########
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log(...menu.entries());

//##########CODING CHALLENGE #1###########
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago, Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

function printGoals(...players) {
  let scoringPlayers = '';
  for (let i = 0; i < players.length; i++) {
    scoringPlayers += `${players[i]} `;
  }
  console.log(`Total Goals Scored: ${players.length}`);
  console.log(`Scoring Players: ${scoringPlayers}`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);

//##########THE NULLISH COALESCING OPERATOR (??)###########
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
//Nulllish: null and undefined (NOT 0 or "")
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

//##########SHORT CIRCUITING (&& AND ||)###########
console.log('------OR------');
// Use ANY data type, return ANY data type, short circuiting evaluation
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('------AND------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');
//practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//##########REST PATTERN AND PARAMETERS###########
//Destructuring
//Spread, because on the right side of the =
const arr = [1, 2, ...[3, 4]];
//Rest, because its on the left of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
restaurant.orderPizza('Pepperoni');


//##########DESTRUCTURING ARRAYS###########
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
//Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, h]] = nested;
console.log(i, j, h);
//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
//##########DESTRUCTURING OBJECTS###########
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 11;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
//##########THE SPREAD OPERATOR###########
const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
//Join 2 or more arrays
const menu = [...restaurant.starterMenu, ...mainMenuCopy];
console.log(menu);

//Iterables arrays, strings, maps and sets, but not objects
const str = 'Jonas';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(...str);
//Real World Example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Italian Place';
console.log(restaurantCopy);
console.log(restaurant);
*/
