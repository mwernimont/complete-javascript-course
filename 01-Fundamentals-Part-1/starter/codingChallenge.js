// const markMass1 = 78;
// const markHeight1 = 1.69;
// const markMass2 = 95;
// const markHeight2 = 1.88;
// const johnMass1 = 92;
// const johnHeight1 = 1.95;
// const johnMass2 = 85;
// const johnHeight2 = 1.76;

// const markBMI1 = markMass1 / (markHeight1 ** 2);
// const johnBMI1 = johnMass1 / (johnHeight1 ** 2);
// const markBMI2 = markMass2 / (markHeight2 ** 2);
// const johnBMI2 = johnMass2 / (johnHeight2 ** 2);

// const markHigherBMI1= markBMI1 > johnBMI1;
// const markHigherBMI2= markBMI2 > johnBMI2;

// if(markHigherBMI1){
//     console.log(`Mark's BMI (${markBMI1}) is higher than John's BMI (${johnBMI1})`);
// }else{
//     console.log(`John's BMI (${johnBMI1}) is higher than Mark's BMI (${markBMI1})`);
// }

// if(markHigherBMI2){
//     console.log(`Mark's BMI (${markBMI2}) is higher than John's BMI (${johnBMI2})`);
// }else{
//     console.log(`John's BMI (${johnBMI2}) is higher than Mark's BMI (${markBMI2})`);
// }

// There are two gymnastics teams, Dolphins and Koalas. 
// They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:

// 1.Calculate the average score for each team, using the test data below

// 2.Compare the team's average scores to determine the winner of the competition, and print it to the console. 
// Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// 3.Bonus1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher 
// score than the other team, and the same time a score of at least 100 points. Hint:Use a logical operator to test 
// for minimum score, as well as multiple else-if blocks 😉

// 4.Bonus2:Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both 
// have a score greater or equal 100 points. Otherwise, no team wins the trophyTest 

// data:
// §Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// const averageKoalaScore = (88 + 91 + 110) / 3;
// const averageDolphinsScore = (96 + 108 + 89) / 3;
// if(averageKoalaScore > averageDolphinsScore && averageKoalaScore >= 100){
//     console.log(`Koalas average of (${averageKoalaScore}) beats the Dolphins (${averageDolphinsScore}), Koalas take home the trophy!`);
// }else if(averageKoalaScore > averageDolphinsScore && averageKoalaScore < 100){
//     console.log(`Koalas average of (${averageKoalaScore}) beats the Dolphins (${averageDolphinsScore}), but did not meet the required minimum 100 points to win the trophy!`);
// }else if(averageKoalaScore < averageDolphinsScore && averageDolphinsScore >= 100){
//     console.log(`Dolphins average of (${averageDolphinsScore}) beats the Koalas (${averageKoalaScore}), Dolphins take home the trophy!`);
// }else if(averageKoalaScore < averageDolphinsScore && averageDolphinsScore < 100){
//     console.log(`Dolphins average of (${averageDolphinsScore}) beats the Koalas (${averageKoalaScore}), but did not meet the required minimum 100 points to win the trophy!`);
// }else if(averageKoalaScore === averageDolphinsScore && averageKoalaScore >= 100 && averageDolphinsScore >= 100){
//     console.log(`It's a draw folks! Koalas: ${averageKoalaScore} Dolphins: ${averageDolphinsScore}`);
// }else{
//     console.log(`It's a tie (Koalas: ${averageKoalaScore} Dolphins: ${averageDolphinsScore}), but neither team met the 100 point minimum.  No one wins the trophy.`)
// }

// §Data Bonus1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// const averageKoalaScore = (109 + 95 + 123) / 3;
// const averageDolphinsScore = (97 + 112 + 101) / 3;
// if(averageKoalaScore > averageDolphinsScore && averageKoalaScore >= 100){
//     console.log(`Koalas average of (${averageKoalaScore}) beats the Dolphins (${averageDolphinsScore}), Koalas take home the trophy!`);
// }else if(averageKoalaScore > averageDolphinsScore && averageKoalaScore < 100){
//     console.log(`Koalas average of (${averageKoalaScore}) beats the Dolphins (${averageDolphinsScore}), but did not meet the required minimum 100 points to win the trophy!`);
// }else if(averageKoalaScore < averageDolphinsScore && averageDolphinsScore >= 100){
//     console.log(`Dolphins average of (${averageDolphinsScore}) beats the Koalas (${averageKoalaScore}), Dolphins take home the trophy!`);
// }else if(averageKoalaScore < averageDolphinsScore && averageDolphinsScore < 100){
//     console.log(`Dolphins average of (${averageDolphinsScore}) beats the Koalas (${averageKoalaScore}), but did not meet the required minimum 100 points to win the trophy!`);
// }else if(averageKoalaScore === averageDolphinsScore && averageKoalaScore >= 100 && averageDolphinsScore >= 100){
//     console.log(`It's a draw folks! Koalas: ${averageKoalaScore} Dolphins: ${averageDolphinsScore}`);
// }else{
//     console.log(`It's a tie (Koalas: ${averageKoalaScore} Dolphins: ${averageDolphinsScore}), but neither team met the 100 point minimum.  No one wins the trophy.`)
// }

// §Data Bonus2: Dolphins score 97, 112 and101. Koalas score 109, 95 and 106
// const averageKoalaScore = (109 + 95 + 106) / 3;
// const averageDolphinsScore = (97 + 112 + 101) / 3;
// if(averageKoalaScore > averageDolphinsScore && averageKoalaScore >= 100){
//     console.log(`Koalas average of (${averageKoalaScore}) beats the Dolphins (${averageDolphinsScore}), Koalas take home the trophy!`);
// }else if(averageKoalaScore > averageDolphinsScore && averageKoalaScore < 100){
//     console.log(`Koalas average of (${averageKoalaScore}) beats the Dolphins (${averageDolphinsScore}), but did not meet the required minimum 100 points to win the trophy!`);
// }else if(averageKoalaScore < averageDolphinsScore && averageDolphinsScore >= 100){
//     console.log(`Dolphins average of (${averageDolphinsScore}) beats the Koalas (${averageKoalaScore}), Dolphins take home the trophy!`);
// }else if(averageKoalaScore < averageDolphinsScore && averageDolphinsScore < 100){
//     console.log(`Dolphins average of (${averageDolphinsScore}) beats the Koalas (${averageKoalaScore}), but did not meet the required minimum 100 points to win the trophy!`);
// }else if(averageKoalaScore === averageDolphinsScore && averageKoalaScore >= 100 && averageDolphinsScore >= 100){
//     console.log(`It's a draw folks! Koalas: ${averageKoalaScore} Dolphins: ${averageDolphinsScore}`);
// }else{
//     console.log(`It's a tie (Koalas: ${averageKoalaScore} Dolphins: ${averageDolphinsScore}), but neither team met the 100 point minimum.  No one wins the trophy.`)
// }


const bill = 40;
const tip =  bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
const total = bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${total}`);