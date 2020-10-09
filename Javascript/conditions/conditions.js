// if/else if/else

/**
 * true 1/false 0
 * if(условие){
 *  тело условия
 * }else{
 *  
 * }
 */

//  +, -, /, *, %

// >, <, >=, <=, !=, ==, ===

// && - AND
// || - OR


if (10 > 10) {
    console.log("If Work")
} else if (10 == 10) {
    console.log("Else If 1 Work")
} else if (10 == 10) {
    console.log("Else If 2 Work")
} else {
    console.log("Else Work")
}


if (10 === '10') {
    console.log("True")
}


// let num1 = Number(prompt("Enter number 1"))

// console.log("you enter", num1)
// console.log("Number", 123)
// console.log("String", "Hello")


// let n1 = Number(prompt("Enter number 1"))
// let n2 = Number(prompt("Enter number 2"))


if (10 < 6 || 20 == 20) {
    console.log("If Work AND/OR")
} else {
    console.log("Else Work AND/OR")
}

// В високосном годе 366 дней, в обычном 365.
// a. Если год не делится на 4, значит он обычный.
// b. Иначе надо проверить не делится ли год на 100.
// c. Если не делится, значит это не столетие и можно сделать вывод, что год
// високосный.
// d. Если делится на 100, значит это столетие и его следует проверить его делимость на 400.
// e. Если год делится на 400, то он високосный.
// f. Иначе год обычный.


// let year = Number(prompt("Enter year: "))

// if (year % 4 != 0) {
//     console.log(365)
// } else {
//     if (year % 100 == 0 && year % 400 != 0) {
//         console.log(365)
//     } else {
//         console.log(366)
//     }
// }


// if (year % 4 != 0 || year % 100 == 0 && year % 400 != 0) {
//     console.log(365)
// } else {
//     console.log(366)
// }


let num1 = Number(prompt("Enter number 1: "))
let num2 = Number(prompt("Enter number 2: "))
let num3 = Number(prompt("Enter number 3: "))
let num4 = Number(prompt("Enter number 4: "))

let sumEven = 0,
    sumOdd = 0

if (num1 % 2 == 0)
    sumEven = sumEven + num1
else
    sumOdd = sumOdd + num1

if (num2 % 2 == 0)
    sumEven = sumEven + num2
else
    sumOdd = sumOdd + num2

if (num3 % 2 == 0)
    sumEven += num3
else
    sumOdd += num3


if (num4 % 2 == 0)
    sumEven += num4
else
    sumOdd += num4