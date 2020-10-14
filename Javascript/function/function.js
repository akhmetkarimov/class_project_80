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