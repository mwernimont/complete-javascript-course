//#######DATA TYPES#######
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonass");

// javaScriptIsFun = "YES!";
// console.log(javaScriptIsFun);

// let year;
// console.log(year);

// year = 1990;
// console.log(year);

// console.log(typeof null);

//LET CONST AND VAR
// let age = 30;
// age = 31;

// const birthYear = 1990;

//#######OPERATORS#######
// const now = 2037;
// const ageMarty = now - 1990;
// const ageSara = now - 2018;
// console.log(ageMarty, ageSara);

// console.log(ageMarty * 2, ageMarty / 10, 2 ** 3);
// // 2** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Marty";
// const lastName = "Wernimont";
// console.log(firstName + " " + lastName);
// //Assignment operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++ // x = x + 1;
// x--;
// x--;
// console.log(x);

// //comparison operators
// console.log(ageMarty > ageSara); // > < >= <=
// console.log(ageSara >= 18);

// const isFullAge = ageSara >= 18;

// console.log(now - 1991 > now - 2019)

//#######Operator Precedance#######
// const now = 2037;
// const ageMarty = now - 1990;
// const ageSara = now - 2018;
// console.log(now - 1991 > now - 2019);
// let x, y;
// x = y = 25 -10 -5; //x = y = 10
// console.log(x, y);
// const averageAge = (ageMarty + ageSara) / 2;
// console.log(ageMarty, ageSara, averageAge);

//#######STRINGS AND TEMPLATE LITERALS#######
// const firstName = "Marty";
// const job = "developer";
// const birthYear = 1990;
// const year = 2037;
// const marty = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "."; 
// console.log(marty);

// const martyNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
// console.log(martyNew);

// console.log(`I'm a string using back ticks!`);

// console.log(`String with
// multiple
// lines`);

//#######TAKING DECISIONS: IF/ELSE STATEMENTS#######
// const age = 18;

// if(age >= 18){
//     console.log(`Sara can start her driving license 😎`);
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`Sara has ${yearsLeft} years before she can start driving.`)
// }

// const birthYear = 1990;
// let century;
// if(birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }

// console.log(century);

//#######TYPE CONVERSION AND COERCION#######
//type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(String(23), 23);

// //type coercion
// console.log("I am " + 23 + " years old.");
// console.log("23" - "10" - 3);
// console.log("23" * "2");
// console.log("23" > "18");

// let n = "1" + 1; //11
// n = n - 1; //10
// console.log(n);

//#######TRUTHY AND FALSY VALUES#######
//5 Falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("lime"));
// console.log(Boolean({}));

// const money = 0;
// if(money){
//     console.log("Don't spend it all.")
// }else{
//     console.log("You should get job.")
// }

// let height;
// if(height){
//     console.log("Yay height is defined");
// }else{
//     console.log("Height is UNDEFINED");
// }

//#######EQUALITY OPERATORS#######
// const age = 18;
// if(age === 18) console.log("You just became an adult. STRICT");

// if(age == 18) console.log("You just became an adult. LOOSE");

// const favorite = Number(prompt("What is your favorite number?"));
// console.log(favorite);

// if(favorite === 23){
//     console.log("Cool 23 is an amazing number!");
// }else if(favorite === 7){
//     console.log("7 is also a cool number");
// }else if(favorite === 9){
//     console.log("9 is also a cool number");
// }
// else{
//     console.log("Number is not 23 or 7 or 9");
// }

// if(favorite !== 23){
//     console.log("Number is not 23");
// }

//#######LOGICAL OPERATORS#######
// const hasDriversLicense = true;
// const hasGoodVision = true;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision){
//     console.log("Sara is able to drive.")
// }else{
//     console.log("Comeone else should drive.")
// }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log("Sara is able to drive.")
// }else{
//     console.log("Someone else should drive.")
// }

//#######SWITCH STATEMENT#######
const day = "wednesday";
switch(day){
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record Videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend")
        break;
    default:
        console.log("Not a valid day!");
}

if(day === "monday"){
    console.log("Plan course structure");
    console.log("Go to coding meetup");
}else if(day === "tuesday"){
    console.log("Prepare theory videos");
}else if(day === "wednesday" || day === "thursday"){
    console.log("Write code examples");
}else if(day === "friday"){
    console.log("Record Videos");
}else if(day === "saturday" || day === "sunday"){
    console.log("Enjoy the weekend")
}else{
    console.log("Not a valid day!");
}