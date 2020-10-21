// function openModal(){
//     document.querySelector('.main_modal').classList.add('active')
// }

// function closeModal(){
//     document.querySelector('.main_modal').classList.remove('active')
// }


function openCloseModal(turn){
    if(turn === 'open'){
        document.querySelector('.main_modal').classList.add('active')
    }else{
        document.querySelector('.main_modal').classList.remove('active')
    }
}

