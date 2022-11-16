'use strict';

//!-------------------------------------
// let number = 50;

// while (number < 55) {
//     console.log(number);
//     number++;
// }


//!-------------------------------------
// let number = 50;

// do {
//     console.log(number);
//     number++;
// }
// while (number < 55);


//!-------------------------------------
// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }


//!-------------------------------------
// let number = 50;

// for (let i = 1; i < 10; i++) {
//     console.log(number);
//     number++;
// }


//!-------------------------------------
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }


//!-------------------------------------
// for (let i = 1; i < 10; i++) {
//     if (i === 8) {
//         continue;
//     }
//     console.log(i);
// }


//!-------------------------------------
// let number = +prompt('Put a number');

// while (number < 30) {
//     if (number === 25) {
//         break;
//     }
//     console.log(number);
//     number++;
// }


//!-------------------------------------
// for (let i = 0; i < 3; i++) {
//     console.log('Hello world');
//     for (let j = 10; j < 13; j++) {
//         if (j === 10) {
//             console.log('I');
//         } else if (j === 11) {
//             console.log('learning');
//         } else {
//             console.log('JavaScript');
//         }
//     }
// }

//!-------------------------------------
let result = '';
const length = 6;

for (let i = 1; i <= length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);


//!-------------------------------------
// label: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue label;
//             console.log(`Third level: ${k}`);
//         }
//     }    
// }


