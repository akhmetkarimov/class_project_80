let allImages = document.querySelectorAll('.my_image')
let mainImage = document.querySelector('#main_image')

let index = 0

allImages.forEach((image) => {
    image.addEventListener('click', function(e) {
        removeActive()
        let target = e.target
        let parent = target.parentNode
        index = [].indexOf.call(parent.children, target)

        e.target.classList.add('active')
        mainImage.src = e.target.currentSrc
    })
})


function removeActive(){
    allImages.forEach((image) => {
        image.classList.remove('active')
    })
}
