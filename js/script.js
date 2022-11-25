'use strict';

//!----------------------------------------------------------------------------------

const objNumber = {
    lastInput: 0,
    evenNum: 0,
    oddNum: 0,
    numList: [],
    numMax: 0, 
    numMin: 0,
    numSumm: 0,
    privat: false
};


let answerOfNum;

function questionOfNum() {
    answerOfNum = +prompt('Сколько чисел ты сейчас вводишь?');

    while (answerOfNum == '' || answerOfNum == null || isNaN(answerOfNum)) {
        answerOfNum = +prompt('Сколько чисел ты сейчас вводишь?');
    }
    objNumber.lastInput = answerOfNum;
    return(answerOfNum);
}

function fillNumSum(result) {
    objNumber.numSumm = objNumber.numSumm + result;
}

fillNumSum(questionOfNum());


function fillObject() {
    for (let i = 0; i < objNumber.lastInput; i++) {
        let randomNumber = +prompt('Введи число');
        if (randomNumber != '' && randomNumber != null) {
            objNumber.numList[i] = randomNumber;
            if (randomNumber % 2 == 0) {
                objNumber.evenNum++;
            } else {
                objNumber.oddNum++;
            }
        } else {
            alert('Пустое значение');
            i--;
        }
    }
}

fillObject();

function numMaxMin() {
    objNumber.numMax = Math.max.apply(null, objNumber.numList);
    objNumber.numMin = Math.min.apply(null, objNumber.numList);
}

numMaxMin();

function showMyObj(hidden) {
    if (!hidden) {
        console.log(objNumber);
    }
}

showMyObj(objNumber.privat);



// //!----------------------------------------------------------------------------------
//! ТОТ НОД КОТОРЫМ РАБОТАЮ В ДАННЫЙ МОМЕНТ НО НИЧЕГО НЕ ПОЛУЧАЕТСЯ
// еда = колории

// let amountPositions;

// function questionAboutFood() {
//     amountPositions = +prompt('Сколько позиций ты сегодня съел');
//     while (amountPositions == '' || amountPositions == null || isNaN(amountPositions)) {
//         amountPositions = +prompt('Сколько позиций ты съел');
//     }
   
// }

// questionAboutFood();

// const caloriesCalculatorDB = {
//     monday: {
//         eatPosCount: 0,
//         eatAndСalories: {},
//         allCalories: 0
//     },
//     tuesday: {},
//     wednesday: {},
//     thursday: {},
//     friday: {},
//     saturday: {},
//     sunday: {},
//     sumWeekColories: 0
// };

// function entry() {
//     caloriesCalculatorDB.monday.eatPosCount = amountPositions;

//     for (let i = 0; i < caloriesCalculatorDB.monday.eatPosCount; i++) {
//         const a = prompt('Позиция еды'),
//               b = prompt('Сколько это колорий');

//         if (a != '' && b != '' && a != null && b != null && isNaN(a) && isNaN(b) == false) {
//             caloriesCalculatorDB.monday.eatAndСalories[a] = b;
//         } else {
//             alert('ERROR');
//             i--;
//         }
//     }
// }

// console.log(caloriesCalculatorDB);
// entry();










//11111111111111111111111111111111111111111111111111111111111111111111111111

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 1000;
// }

// showFirstMessage('Hello World!');
// console.log(num);




// function calculator(a, b) {
//     return(a + b);
// }

// console.log(calculator(10, 10));
// console.log(calculator(10, 0));
// console.log(calculator(10, 1));
// console.log(calculator(5, 4));



// function ret() {
//     num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum); 





//* ДОП ЗАНЯТИЕ

// const usdCurr = 2,
//       eurCurr = 5;

// function convert(amount, curr) {
//     console.log(amount * curr);
// }

// convert(2000, usdCurr);
// convert(2000, eurCurr);


//* ДОП ЗАНЯТИЕ
//* return

// //? Переменные допустим (курсы и скидка).
// const usdCurr = 28,
//       eurCurr = 5;
// const discount = 0.9;

// //? Ф-я конвертирует нашу валюту.
// function convert(amount, curr) {
//     return amount * curr;
// }

// //? Ф-я, исп. результат 1-й ф-и и применяющая скидку.
// function promo(result) {
//     console.log(result * discount);
// }

// //? Вызов 2-й ф-и, где аргумент это результат второй ф-и.
// //? Результат используем благодаря RETURN!!
// //? Либо через доп. переменную result и ---> promo(result), где result это результат первой ф-и.
// promo(convert(500, usdCurr));
// promo(convert(500, eurCurr));


//* Методы и св-ва

//* lenght

// const str = 'teSt';
// const arr = [1, 2, 3, 5];

// console.log(str.length);
// console.log(str);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());



//* indexOf

// const fruit = 'Действие приводит к противодействию';
// const arrr = [1, 2, 3, 5];


// console.log(fruit.indexOf('противодействию'));
// console.log(arrr.indexOf(5));



//* slice

// const logg = 'Some people loves books';

// console.log(logg.slice(5, 12));
