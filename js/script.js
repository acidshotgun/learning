'use strict';




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


// if (4 == 9) {
//     console.log('OK');
// }   else {
//     console.log('ERROR');
// }


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







//TODO.........................................................................................................
//TODO ---------------------------HOMEWORK---------------------------------------------------------------------
//TODO.........................................................................................................


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
//     console.log('Мы довольны');
// } else {
//     console.log('Мы уходим прочь');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);



//! 1. При регистрации на сайтах требуется вводить пароль дважды. Это сделано для безопасности, 
//! поскольку такой подход уменьшает возможность неверного ввода пароля.

//! Напишите программу, которая сравнивает пароль и его подтверждение. 
//! Если они совпадают, то программа выводит: «Пароль принят», иначе: «Пароль не принят».

//  let password = prompt('Введите пароль'),
//     passwordConfirm = prompt('Подтвердите пароль');

// if (password === passwordConfirm) {
//     alert('Пароль принят');
// }    else {
//     alert('Пароль не принят');
// }

// console.log(password, passwordConfirm);



//! 2. Напишите программу, которая определяет, является число четным или нечетным.

// let number = +prompt('Введите число');

// if (number % 2 == 0) {
//     alert('Число четное');
// } else {
//     alert('Число нечетное');
// }


//!Напишите программу вывода на экран трех последовательно идущих чисел, каждое на отдельной строке.
//! Первое число вводит пользователь, остальные числа вычисляются в программе.\

// let number = +prompt('Введите число');

// console.log(number);
// console.log(number + 1);
// console.log(number + 2);



// !Напишите программу, которая считывает три целых числа и выводит на экран их сумму.

// let num1 = +prompt('Введите первое число'),
//     num2 = +prompt('Введите второе число'),
//     num3 = +prompt('Введите третье число');

// alert(num1 + num2 + num3);


//! Напишите программу, вычисляющую объём куба и площадь его полной поверхности, по введённому значению длины ребра.

// let num = +prompt('Введите число');

// console.log('Объем', '=', num ** 3);
// console.log('Площадь полной поверхности', '=', 6 * (num ** 2));



// let num1 = +prompt('Введи первое число'),
//     num2 = +prompt('Введи второе число'),
//     counterPlus = 0,
//     counterMinus = 0;

// for (let i = num1; i <= num2; i++) {
//     if (i % 2 == 0) {
//         counterPlus++;
//     } else {
//         counterMinus++;
//     }
// }

// alert(`Четных чисел: ${counterPlus} \n Нечетных чисел: ${counterMinus}`);

//!----------------------------------------------------------------------------------

const objNumber = {
    numCount: 0,
    numPlus: 0,
    numMinus: 0,
    numList: [],
    numMax: 0, 
    numMin: 0
};

objNumber.numCount = +prompt('Сколько чисел?');

for (let i = 0; i < objNumber.numCount; i++) {
    let randomNumber = +prompt('Введи число');
    if (randomNumber != '' && randomNumber != null) {
        objNumber.numList[i] = randomNumber;
        if (randomNumber % 2 == 0) {
            objNumber.numPlus++;
        } else {
            objNumber.numMinus++;
        }
    } else {
        alert('Пустое значение');
        i--;
    }
}

objNumber.numMax = Math.max.apply(null, objNumber.numList);
objNumber.numMin = Math.min.apply(null, objNumber.numList);

console.log(objNumber);

