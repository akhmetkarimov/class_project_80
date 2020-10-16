document.querySelector('h1').innerText = "Hello DOM heading"
document.querySelector('.myText').innerHTML = "Hello DOM paragraph <a href = 'https://youtube.com'>Youtube</a>"
document.querySelector('#mySpan').innerText = "Hello DOM span"
document.querySelector('.myDiv > a').innerText = "Hello DOM Anchor"

document.querySelector('div.myDiv > a').href = "https://decode.kz"
document.querySelector('.myDiv > a').id = "myId"
document.querySelector('.myDiv > a').style = "color: red"

document.querySelector('.myDiv > a').className = "myClass"
document.querySelector('.myDiv > a').className += " mySecondClass"

document.querySelector('.myDiv > a').classList.add('myThirdClass')
document.querySelector('.myDiv > a').classList.remove('myClass')


let elemClasList = document.querySelector('.myDiv > a').classList
let elemClassName = document.querySelector('.myDiv > a').className

console.log(elemClasList)
console.log(elemClassName)

let liList = document.querySelectorAll('.myList li')

liList.forEach(elem => {
    elem.innerText = "Item DOM"
})


document.getElementById('myH2').innerText = "Hello DOM heading 2"

let parList = document.getElementsByClassName('myClass2')

for (let i = 0; i < parList.length; i++) {
    parList[i].innerText += " Hello DOM paragraph"
}