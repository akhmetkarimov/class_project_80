// while(условие){
//     ...
//     ...
// }

// if(условие){
//     ...
//     ...
//     ...
// }


// let start = 1

// while (start <= 10) {
//     console.log(start)
//     start += 1
// }


// let username = prompt("Enter user name: ")
// let errors = 0

// while (username !== "admin") {
//     username = prompt("Enter valid user name: ")
//     errors++
// }

// alert("welcome")
// alert("Count of incorrect: " + errors)




// let start = -123

// while (start <= 100) {
//     if (start % 2 == 0) {
//         console.log(start)
//     }
//     start++
// }


// Найти сумму только не четных положительных от -10 до 120 

// let start = -10
// let sum_numbers = 0
// while (start <= 120) {
//     if (start % 2 !== 0 && start > 0) {
//         sum_numbers += start
//     }
//     start++;
// }
// console.log("Sum odd possitve: ", sum_numbers);

// Найти факторял числа 5! = 1 * 2 * 3 * 4 * 5 = 120

// let input_number = Number(prompt("Enter number for factorial: "))
// let factorial_res = 1
// let turns = 1
// while (turns <= input_number) {
//     factorial_res *= turns
//     turns++
// }
// console.log("Factorial Res: ", factorial_res)


// for(start; condition; step){
//     ...
//     ... 
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }


// let start = 0

// do {
//     console.log('DO')
//     start++
// }
// while (start > 10)


// Вы должны вести 3 заначения и сделать так чтобы цикл работал по тем значением которые вы указали. 
// start, end, step, 

// let start = Number(prompt("enter start of loop")) // 5
// let end = Number(prompt("enter end of loop")) // 20
// let step = Number(prompt("enter step of loop")) // 3

// 5, 8, 11, 14, 17, 20


// for(start; condition; step){
//     ...
//     ... 
// }


// let f1 = 1;
// let f2 = 2;

// let n = Number(prompt("Enter count of fib"));

// console.log(f1);
// console.log(f2);
// for (let i = 3; i <= n; i++) {
//     console.log(f1 + f2);
//     let temp = f1; // 1
//     f1 = f2; // 2
//     f2 = temp + f1; // 1 + 2
// }