test_function(56) // arguments

function test_function(a) { // paramenters
    console.log(a)
    console.log("In function")
}

test_function(999) // call
test_function("Hello") // call
test_function([1, 2, 3, 4, 5]) // call
test_function({ 'key': 'value' }) // call


arrow_test_function = (param) => {
    console.log(param)
    console.log("In arrow function")
}

arrow_test_function()


function call_me(message) {
    alert(message)
}


function sum_elem(num) {
    let sum = 0
    while (num > 0) {
        if (num == 0) {
            break
        }
        let digit = num % 10
        sum += digit
        num = Math.floor(num / 10)
    }

    return sum
}


function filter_array(arr) {
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (sum_elem(arr[j]) > sum_elem(arr[j + 1])) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    console.log(arr)
}

filter_array([12, 43, 123, 44, 22])

// 12 43 123 44 22
// 12 43 44 123 22
// 12 43 44 22 123 
// 12 43 22 44 123
// 12 22 43 44 123


// let isEven = 11 % 2 == 0 ? true : false

// console.log(isEven)

// let age = Number(prompt("Enter your age: "))

// let msg = age < 5 ? "Hello little baby!" : age < 18 ? "Hey!" : age < 100 ? "Hello Mr/Mrs" : "incorrect age"

// alert(msg)