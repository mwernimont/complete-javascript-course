//Values and Variables
const country = "United States of America";
const continent = "North America";
const isIsland = false;
const language = "english";
let population = 328;
const finlandPopulation = 6;
const averageCountryPopulation = 33;
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// console.log("%c" + description, 'background: #222; color: #bada55');

// if(population > averageCountryPopulation){
//     console.log(`The ${country}'s population is above average.`);
// }else{
//     console.log(`The ${country}'s population is ${averageCountryPopulation - population} million below average.`);
// }

// console.log("9" - "5"); //Guess 4
// console.log("19" - "13" + "17") //Guess "617"
// console.log("19" - "13" + 17); //Guess 23
// console.log("123" < 57); //Guess False
// console.log(5 + 6 + "4" + 9 - 4 - 2)// Guess 1143

//Equality Operators
// const numNeighbors = Number(prompt("How many neighbor countries does your country have?"));
// if(numNeighbors === 1){
//     console.log("Only 1 border.");
// }else if(numNeighbors > 1){
//     console.log("More than 1 border.")
// }else{
//     console.log("No borders");
// }

//Logical Operators
// if(population < 50 && language === "english" && !isIsland){
//     console.log(`You should live in ${country}!!`);
// }else{
//     console.log(`${country} does not match your criteria`);
// }

//Switch Statement
switch(language){
    case "mandarin":
    case "chinese":
        console.log("Most number of native speakers!");
        break;
    case "spanish":
        console.log("and place in number of native speakers");
        break;
    case "english":
        console.log("3rd Place");
        break;
    case "hindi": 
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too")
}

