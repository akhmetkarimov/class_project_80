function openCloseModal(turn){
    if(turn === 'open'){
        document.querySelector('.main_modal').classList.add('active')
    }else{
        document.querySelector('.main_modal').classList.remove('active')
    }
}


let allImages = document.querySelectorAll('.my_image')
let imageModal = document.querySelector('#image_modal')

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let index = 0

allImages.forEach((image) => {
    image.addEventListener('click', function(e) {
        
        let target = e.target
        let parent = target.parentNode
        index = [].indexOf.call(parent.children, target)

        document.querySelector('.main_modal').classList.add('active')
        imageModal.src = e.target.currentSrc
    })
})


next.addEventListener('click', function(e){
    index += 1

    if(index >= allImages.length){
        index = 0
    }

    imageModal.src = allImages[index].src
})



prev.addEventListener('click', function(e){
    index -= 1
    
    if(index <= -1){
        index = allImages.length - 1
    }

    imageModal.src = allImages[index].src
    
})



