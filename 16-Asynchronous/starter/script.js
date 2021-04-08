'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imageContainer = document.querySelector('.images');

///////////////////////////////////////
//Old School
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}M people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//         </div>
//     </article>
//     `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

//Callback HELL
// const getCountryAndNeighbor = function (country) {
//   //Ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //Render country 1
//     renderCountry(data);
//     //Get neighbor country
//     const [neighbor] = data.borders;
//     if (!neighbor) return;
//     //Ajax call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbor('germany');

//FETCH API + PROMISES
// const request = fetch(`https://restcountries.eu/rest/v2/name/portugal`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    //Manual error handling
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
const getCountryData = function (country) {
  //Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) throw new Error('No neighbor found!');

      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong ${err.message} Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

//CODING CHANLLENGE #1
// function whereAmI(lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       //Manual error handling
//       if (!response.ok)
//         throw new Error(`Something went wrong! (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city} ${data.country}!`);
//       getCountryData(data.country);
//     })
//     .catch(err => console.error(`${err} 👻👻👻`));
// }

// whereAmI(-33.933, 18.474);

//////////////////////////
//EVENT LOOP PRACTICE
// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 100000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

//////////////////////////
//BUILDING A SIMPLE PROMISE
// const lottery = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening.');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lottery.then(res => console.log(res)).catch(err => console.error(err));

// //Promisifying setTimeout
// const wait = seconds =>
//   new Promise(resolve => setTimeout(resolve, seconds * 1000));

// wait(2)
//   .then(() => {
//     console.log('I waited for the timeout');
//     return wait(1);
//   })
//   .then(() => console.log('I waited a whole other second'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(x => console.error(x));

//////////////////////////
//PROMISIFYING THE GEOLOCATION API
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(new Error(err))
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// function whereAmI() {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       //Manual error handling
//       if (!response.ok)
//         throw new Error(`Something went wrong! (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city} ${data.country}!`);
//       getCountryData(data.country);
//     })
//     .catch(err => console.error(`${err} 👻👻👻`));
// }

// btn.addEventListener('click', whereAmI);

//CODING CHANLLENGE #2
//Timing helper function
// const wait = seconds =>
//   new Promise(resolve => setTimeout(resolve, seconds * 1000));

// //Create image funtion
// function createImage(imgPath) {
//   return new Promise(function (resolve, reject) {
//     const image = document.createElement('img');
//     image.src = imgPath;
//     image.addEventListener('load', () => {
//       imageContainer.append(image);
//       resolve(image);
//     });
//     image.addEventListener('error', () => reject(new Error('Image not found')));
//   });
// }

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => (currentImg.style.display = 'none'))
//   .catch(err => console.error(err));

//////////////////////////
//CONSUMING PROMISES WITH ASYNC/AWAIT
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     //Geo location
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     //Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();
//     //Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     renderError(`Something went wrong ${err.message}`);
//     //Reject promise returned from async function
//     throw err;
//   }
// };
// console.log('1: will get location');
// // const city = whereAmI();
// // console.log(city);
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(err.message);
//   }
//   console.log('3: Finished getting location');
// })();

//////////////////////////
//RUNNING PROMISES IN PARALLEL
// const getThreeCountries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c1}`
//     // );
//     // const [data2] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c2}`
//     // );
//     // const [data3] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c3}`
//     // );
//     const data = await Promise.all([
//       getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// getThreeCountries('portugal', 'canada', 'tanzania');

//////////////////////////
//OTHER PROMISE COMBINATORS: RACE, ALLSETTLED AND ANY
//RACE
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
//   timeout(0.1),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// //allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ]).then(res => console.log(res));

// //Any [ES2021]
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ]).then(res => console.log(res));

//CODING CHANLLENGE #3
//Timing helper function
const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

//Create image funtion
function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;
    image.addEventListener('load', () => {
      imageContainer.append(image);
      resolve(image);
    });
    image.addEventListener('error', () => reject(new Error('Image not found')));
  });
}

const loadNPause = async function () {
  try {
    //Load img 1
    let img = await createImage('img/img-1.jpg');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('img/img-2.jpg');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(`${err} 💥`);
  }
};
// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);
    const imgEl = await Promise.all(imgs);
    console.log(imgEl);
    imgEl.forEach(function (el) {
      el.classList.add('parallel');
    });
  } catch (err) {
    console.log(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
