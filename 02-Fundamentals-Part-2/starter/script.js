"use strict";
//##########FUNCTIONS###########
/*
function logger(){
    console.log("My name is Marty");
}
//calling / running / invoking function
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

//##########PRACTICE #1 FUNCTIONS###########
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const usa = describeCountry("United States of America", 328, "Washington D.C.");
console.log(usa);
const china = describeCountry("China", 1393, "Beijing");
console.log(china);
const argentina = describeCountry("Argentina", 44.49, "Buenos Aires");
console.log(argentina);
//##########FUNCTION DECLARATIONS VS EXPRESSIONS###########
//Function Declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge1(1990);
//Function Expression
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}
const age2 =calcAge2(2011);
console.log(age1, age2);
//##########PRACTICE #2 FUNCTION DECLARATIONS VS EXPRESSIONS###########
function percentageOfWorld1(population){
    return (population / 7900) * 100;
}
console.log(percentageOfWorld1(328));
console.log(percentageOfWorld1(44.49));
console.log(percentageOfWorld1(33));

const percentageOfWorld2 = function(population){
    return (population / 7900) * 100;
}
console.log(percentageOfWorld2(328));
console.log(percentageOfWorld2(44.49));
console.log(percentageOfWorld2(33));

//##########ARROW FUNCTIONS###########
//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2017);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(1990, "Marty"));

//##########PRACTICE #3 ARROW FUNCTIONS###########
const percentageOfWorld3 = population => (population / 7900) * 100;
console.log(percentageOfWorld3(328));
console.log(percentageOfWorld3(44.49));
console.log(percentageOfWorld3(33));

//##########FUNCTIONS CALLING OTHER FUNCTIONS###########
function cutFruitPieces(fruit){
    return fruit * 4;
}
function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice;
}
console.log(fruitProcessor(2,3));

//##########PRACTICE #4 FUNCTIONS CALLING OTHER FUNCTIONS###########
function describePopulation(country, population){
    const percent = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percent} percent of the world.`
}
function percentageOfWorld1(population){
    return (population / 7900) * 100;
}
console.log(describePopulation("China", 1441));
console.log(describePopulation("USA", 328));
console.log(describePopulation("Argentina", 44.49));
//##########Coding Challenge #1###########
const calcAverage = (rnd1, rnd2, rnd3) => (rnd1 + rnd2 + rnd3) / 3;
function checkWinner(avgDolphins, avgKoalas){
    console.log(avgDolphins, avgKoalas);
    if(avgDolphins >= 2 * avgKoalas){
       console.log(`Dolphins win! (${avgDolphins} vs ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win! (${avgKoalas} vs ${avgDolphins})`);
    }else{
        console.log("No one doubled the other teams scores...")
    }
}
const koalasScores1 = calcAverage(65,54,49);
const dolphinsScores1 = calcAverage(44,23,71);
const koalasScores2 = calcAverage(23,34,27);
const dolphinsScores2 = calcAverage(85,54,41);
checkWinner(dolphinsScores1, koalasScores1);
checkWinner(dolphinsScores2, koalasScores2);
//##########INTRODUCTION TO ARRAYS###########
const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1990, 1984, 2008, 2020);
console.log(y[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

//Exercise
function calcAge(birthYear){
    return 2037 - birthYear;
}
const  years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years[3]));
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
//##########PRACTICE #5 INTRODUCTION TO ARRAYS###########
function percentageOfWorld1(population){
    return (population / 7900) * 100;
}
const populations = [1141, 328, 44.49, 33];
console.log(populations.length);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);
//##########BASIC ARRAY OPERATIONS###########
const friends = ["Michael", "Steven", "Peter"];

//Add Elements
const newLength = friends.push("Jay");
console.log(friends, newLength);

friends.unshift("John");
console.log(friends);

//Remove Elements
const removedElement = friends.pop();
console.log(friends, removedElement);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Peter"));
console.log(friends.includes("Bob"));

if(friends.includes("Peter")){
    console.log("You have a friend called Peter");
}
//##########PRACTICE #6 BASIC ARRAY OPERATIONS###########
const neighbors = ["Canada", "Mexico"];
console.log(neighbors);
neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop();
console.log(neighbors);
if(!neighbors.includes("Germany")){
    console.log("Probably not a central Euorpean country.")
}
neighbors[0] = "Kingdom of Canada";
console.log(neighbors);
//##########Coding Challenge #2###########
function calcTip(bill){
    return bill >= 50 && bill <=300 ? bill * .15 : bill * .2;
}
console.log(calcTip(100));
const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(totals);
//##########INTRODUCTION TO OBJECTS###########
const marty = {
    firstName: "Marty",
    lastName: "Wernimont",
    age: 2037 - 1990,
    job: "Developer",
    friends: ["Michael", "Peter", "Steven"]
}
console.log(marty);
//##########PRACTICE #7 INTRODUCTION TO OBJECTS###########
const myCountry = {
    country: "USA",
    capital: "Washinton D.C.",
    language: "English",
    population: 328,
    neighbors: ["Canada", "Mexico"]
}
//##########DOT VS BRACKET NOTATION###########
const marty = {
    firstName: "Marty",
    lastName: "Wernimont",
    age: 2037 - 1990,
    job: "Developer",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(marty.lastName);
console.log(marty["lastName"]);

const nameKey = "Name";
console.log(marty["first" + nameKey]);
console.log(marty["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Marty? Choose between firstName, lastName, age, job, and friends.");
if(marty[interestedIn]){
    console.log(marty[interestedIn]);
}else{
    console.log("Invalid request. Choose between firstName, lastName, age, job, and friends.")
}

marty.location = "USA";
marty["twitter"] = "@mwernimont87";
console.log(marty);
//Challenge
//Marty has 3 friends, and his best friend is called Michael
console.log(`${marty.firstName} has ${marty.friends.length} friends, and his best friend is called ${marty.friends[0]}`);
//##########PRACTICE #8 DOT VS BRACKET NOTATION###########
const myCountry = {
    country: "USA",
    capital: "Washinton D.C.",
    language: "english",
    population: 328,
    neighbors: ["Canada", "Mexico"]
}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`);
myCountry.population = myCountry.population + 2;
console.log(myCountry.population);
myCountry["population"] = myCountry["population"] - 2;
console.log(myCountry.population);
//##########OBJECT METHODS###########
const marty = {
    firstName: "Marty",
    lastName: "Wernimont",
    birthYear: 1990,
    job: "developer",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,
    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }
    // calcAge: function(){
    //     return 2037 - this.birthYear;
    // }
    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
};
console.log(marty.calcAge());
console.log(marty.age);
//Challenge
// "Marty is a 47 year old developer, and he has a drivers license."
console.log(marty.getSummary());
//##########PRACTICE #9 OBJECT METHODS###########
const myCountry = {
    country: "USA",
    capital: "Washinton D.C.",
    language: "english",
    population: 328,
    neighbors: ["Canada", "Mexico"],
    describe: function(){
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
    },
    checkIsland: function(){
        return this.isIsland = this.neighbors.length > 0 ? false : true;
    }
}
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);
//##########Coding Challenge #3###########
const mark = {
    fullName: "Mark Miller",
    height: 1.69,
    mass : 78,
    calcBMI: function(){
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI
    }
}
const john = {
    fullName: "John Smith",
    height: 1.95,
    mass : 92,
    calcBMI: function(){
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI
    }
}
john.calcBMI();
mark.calcBMI();
if(mark.BMI > john.BMI){
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);
}else{
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
}
//##########ITERATION: THE FOR LOOP###########
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}
//##########PRACTICE #10 ITERATION: THE FOR LOOP###########
for(let voter = 1; voter <= 50; voter++){
    console.log(`Voter number ${voter} is voting.`);
}
*/
//##########LOOPING ARRAYS, BREAKING AND CONTINUING###########
