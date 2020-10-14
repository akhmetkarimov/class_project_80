// let a = 123;
// //         1   2   3   4   5
let asd = [11, 23, 34, 12, 21, 12, 434, 222];
// //         0   1   2   3   4   5    6   7
// console.log(asd);
// console.log("LENGTH ", asd.length);
// asd.push(55)
// console.log(asd)
// asd.pop()
// console.log(asd)
// asd.pop()
// console.log(asd)
// asd.unshift(123)
// console.log(asd)

// console.log(asd[5]);
// // asd[5] = 999;
// console.log(asd);

// for (let i = 0; i < asd.length; i++) {
//     console.log("Index: ", i, " Value: ", asd[i]);
// }

// for (let i in asd) {
//     console.log("FOR IN INDEX: ", i, "Values: ", asd[i]);
// }
// console.log("MAP");
// asd.map((elem, index) => {
//     console.log(elem, index)
// })

// console.log("FOR EACH");
// asd.forEach((elem) => {
//     console.log(elem)
// })

// push(elem) - добавление элемента в конец массива
// pop() - удаляет элемент с конца массива
// shift() - удаляет элемент с начало массива
// unshift(elem) - добавление элемента в начало массива


// let max = asd[0]
// let min = asd[0]

// for (let i = 0; i < asd.length; i++) {
//     if (asd[i] > max) {
//         max = asd[i]
//     }
//     if (asd[i] < min) {
//         min = asd[i]
//     }
// }

// console.log("MAX: ", max)
// console.log("MIN: ", min)

// asd.sort()

// console.log(asd[asd.length - 1], asd[0])


let obj = {
    key: "Helloo key value",
    key1: 234,
    qwerty: [1, 2, 4, 5, 56, 4]
}

console.log(obj.key)
console.log(obj.key1)

console.log(obj['key'])
console.log(obj['key1'])

console.log(obj)


let phone = {
    model: "IPhone",
    version: "11 Pro",
    memory: "256GB",
    camera: 3
}

let phone2 = {
    model: "Samsung",
    version: "Note 20 Ultimate",
    memory: "256GB",
    camera: 3
}

let phones = [

    {
        model: "IPhone",
        version: "11 Pro",
        memory: "256GB",
        camera: 3
    },

    {
        model: "Samsung",
        version: "Note 20 Ultimate",
        memory: "256GB",
        camera: 3
    }

]

console.log(phones)

for (let elem of asd) {
    console.log(elem)
}

let arr = [
    1,
    2,
    3,
    4
]

let as = {
    name: "yedil",
    surname: "awqeqwe"
}

let arr_obj = [

    {
        name: "test name",
        surname: "test surname"
    },

    {
        name: "test 1 name",
        surname: "test 1 surname"
    },

    {
        name: "test 2 name",
        surname: "test 2 surname"
    },


]


// // *
// // **
// // ***
// // ****
// // *****
// // ******

// for (let i = 1; i <= 6; i++) {

//     let str = ""

//     for (let j = 1; j <= i; j++) {
//         str += "*"
//     }

//     console.log(str)
// }


// //      *
// //     **
// //    ***
// //   ****
// //  *****
// // ******

// for (let i = 1; i <= 6; i++) {

//     let str = ""

//     for (let k = 6; k > i; k--) {
//         str += " "
//     }

//     for (let j = 1; j <= i; j++) {
//         str += "*"
//     }

//     console.log(str)
// }

// //      *
// //     ***
// //    *****
// //   *******
// //  *********
// // ***********

// for (let i = 1; i <= 6; i++) {

//     let str = ""

//     for (let k = 6; k > i; k--) {
//         str += " "
//     }

//     for (let j = 1; j <= 2 * i - 1; j++) {
//         str += "*"
//     }

//     console.log(str)
// }

// // ***********
// //  *********
// //   *******
// //    *****
// //     ***
// //      *

// for (let i = 6; i >= 1; i--) {

//     let str = ""

//     for (let k = 6; k > i; k--) {
//         str += " "
//     }

//     for (let j = 1; j <= 2 * i - 1; j++) {
//         str += "*"
//     }

//     console.log(str)
// }


// let ass_arr = {
//     names: ["name1", "name2"],
//     surnames: ["surname1", "surname2"],
//     salary: [100, 200]
// }

// ass_arr.names.map(elem => {
//     console.log(elem)
// })

// ass_arr.surnames.map(elem => {
//     console.log(elem)
// })

// for (let elem in ass_arr) {
//     for (let elem_in of ass_arr[elem]) {
//         console.log(elem, elem_in)
//     }
// }

// for (let i = 0; i < ass_arr.names.length; i++) {
//     console.log(ass_arr.names[i], ass_arr.surnames[i], ass_arr.salary[i])
// }


let test_obj = {
    qwe: 123,
    asd: 222
}

console.log(test_obj)

test_obj.new_key = 555

console.log(test_obj)

test_obj.avg_salay = 112234

console.log(test_obj)

console.log(test_obj.asd)
console.log(test_obj['asd'])

test_obj['aaaa'] = 999

console.log(test_obj)


// let students = [{
//         name: "Student 1",
//         grade: 90
//     },
//     {
//         name: "Student 2",
//         grade: 45
//     },
//     {
//         name: "Student 3",
//         grade: 70
//     }
// ]