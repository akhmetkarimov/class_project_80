const outputWords = ['HTML', 'CSS', 'JS', '2020', 'Laptop', 'New Title for Type']
let charPosition = 0
let wordTurn = 0

let outputSpan = document.querySelector('#output')

setTimeout(printWord, 150)

function printWord(){
    if(outputWords[wordTurn].length > charPosition){
        outputSpan.innerText += outputWords[wordTurn].charAt(charPosition)
        charPosition++
        setTimeout(printWord, 150)
    }else{
        setTimeout(deleteWord, 50)
    }
}

function deleteWord(){
    if(charPosition >= 0){
        outputSpan.innerText = outputWords[wordTurn].substr(0, charPosition)
        charPosition--
        setTimeout(deleteWord, 50)
    }else{
        wordTurn++
        
        if(outputWords.length <= wordTurn){
            wordTurn = 0
        }

        setTimeout(printWord, 150)
    }
}

let counter = 0

function StartCount(){
    setInterval(function(){
        document.querySelector('#counter').innerText = counter
        counter += 1
    }, 1000)
}






































// setTimeout
// setInterval

// setTimeout(function, time, agrs)

// function testTime(name){
//     alert("Hello " + name)
// }

// setTimeout(function(){
//     alert("Hello time out")    
// }, 3000)

// setTimeout(testTime, 5000, "Yedil")


// setInterval(function(){
//     alert("Hello interval 2 seconds")
// }, 2000)
