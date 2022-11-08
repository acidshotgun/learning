'use strict';


//.........................................................................................................


// const objectTest = {
//     name: 'Tom',
//     age: 28,
//     job: 'softwareDevolper',
//     car: null,
//     lovelyFood: [],
//     wife: {
//         name: 'Jessika',
//         age: 27,
//         job: 'webDesign',
//         car: null,
//         lovelyFood: []
//     }
// };

// objectTest.lovelyFood[0] = prompt("Tom's lovely food number one");  
// objectTest.lovelyFood[1] = prompt("Tom's lovely food number two");
// objectTest.car = prompt("Tom's car");

// objectTest.wife.lovelyFood[0] = prompt("Jessika's lovely food number one");
// objectTest.wife.lovelyFood[1] = prompt("Jessika's lovely food number two");
// objectTest.wife.car = prompt("Jessika's car");


// console.log(objectTest.lovelyFood[0], objectTest.lovelyFood[1], objectTest.car);
// console.log(objectTest.wife.lovelyFood[0], objectTest.wife.lovelyFood[1], objectTest.wife.car);


//.........................................................................................................


// const user = 'TomDelonge';

// alert(`Привет, ${user}!`);


// const isChecked = true,
//     isClose = false;

// console.log(isChecked && isChecked);


//.........................................................................................................


// const testCommit = {
//     name: 'Tomas',
//     age: 20
// };


//.........................................................................................................


if (4 == 9) {
    console.log('OK');
}   else {
    console.log('ERROR');
}


//.........................................................................................................


// const testObject = {
//     name: 'Tomas',
//     work: 'Devoloper'
// };

// testObject.age = +prompt("Your age?");

// if (testObject.age == 18) {
//     alert("Cool!");
// }   else if (testObject.age > 18) {
//     alert("WOOOOOOW");
// }   else {
//     alert("Go home!");
// }

// console.log(testObject);


//.........................................................................................................


// let number = 49;

// (number == 50) ? console.log("OK") : console.log('Error');

//.........................................................................................................


// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log('Я сыт');
// } else if (hamburger || fries) {
//     console.log('Я не наелся');
// } else {
//     console.log('Я все еще голоден');
// }

//.........................................................................................................

// const hamburger = 2;
// const fries = 1;

// if (hamburger === 3 && fries) {
//     alert('Все сыты');
// } else {
//     alert('Мы уходим');
// }

// (hamburger && fries) ? console.log('Я сыт') : console.log('Я не наелся');

//.........................................................................................................


// const hamburger = 3;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим');
// }

// console.log(hamburger || cola || fries);

//.........................................................................................................


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
    console.log('Мы довольны');
} else {
    console.log('Мы уходим прочь');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


