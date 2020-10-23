let parList = document.querySelectorAll('.JsPar')
parList.forEach(elem=>{
    elem.innerText = "Hello JS DOM"
    elem.style.cssText = "color: aqua; text-align: right;"

    elem.style.color = 'aqua'
    elem.style.textAlign = 'right'

    elem.addEventListener('click', function(e){
        e.target.style.background = 'orange'
    })
})

// for(let i = 0; i < parList.length; i++){
//     parList[i].innerText = "Hello JS DOM"
// }

$('.JqPar').text('Hello JQ DOM').css({
    color: 'lightgreen',
    textAlign: 'center',
    textTransform: 'uppercase'
}).click(function(){
    $(this).css('background', 'lightblue')
})


// $('.showBox').click(function(){
//     $('.box').show()
// })

// $('.hideBox').click(function(){
//     $('.box').hide()
// })

// $('.toggleBox').click(function(){
//     $('.box').toggle()
// })


$('.showBox').click(function(){
    $('.box').fadeIn()
})

$('.hideBox').click(function(){
    $('.box').fadeOut()
})

$('.toggleBox').click(function(){
    $('.box').fadeToggle()
})

$('.item_title').click(function(){
    $('.item_description').slideToggle()
})




// camelCase, PascalCase, snake_case, UPPER_SNAKE_CASE 
