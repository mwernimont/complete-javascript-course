// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
//PROBLEM I
// //We work for a comapny building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude.  Kepp in mind
// that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
//1) Understanding the problem
// - What is temperaturer amplitude? Answer: Difference between highest and lowest temp
// - How to compute the max and min temperatures.
// - Whats a sensor error?  And what to do?
//2) Breaking up into sub-problems
// - How to ignore errors?
// - Find Max value in temperature array
// - Find minimum value
// - Subtract min from max (amplitude) and return it
//PROBLEM II
//Function should now recieve two arrays of temps
//1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Merge the arrays
//2) Breaking up into sub-problems
// - Merge two arrays

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const temp1 = [40, 5, 7];
const temp2 = [10, -30, 4];
const amplitude = calcTempAmplitude(temp1, temp2);
console.log(amplitude);

//DEBUGGING
function measureKelvin() {
  const measurement = {
    type: "temperature",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")),
  };
  console.table(measurement);
  //   console.warn();
  //   console.error();
  const kelvin = measurement.value + 273;
  return kelvin;
}
console.log(measureKelvin());
*/
//CODING CHALLENGE
function printForecast(arr) {
  let string = "";
  let celcius = "\u2103";
  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]}${celcius} in ${i + 1} day(s) ... `;
  }
  return "... " + string;
}

console.log(printForecast([12, 5, 5, 0, 4]));
