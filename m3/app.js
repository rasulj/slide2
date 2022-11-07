const upbtn = document.querySelector('.up-button');
const downbtn = document.querySelector('.down-button');
const mainslide = document.querySelector('.main-slide');
const sidbar = document.querySelector('.sidebar');
let slidecound = mainslide.querySelectorAll('div').length
const container = document.querySelector('.container')
let activSlide = 0

sidbar.style.top = `-${(slidecound - 1)*100}vh`


upbtn.addEventListener('click',()=>{
changeSlide('up')
})

downbtn.addEventListener('click',()=>{
    changeSlide('down')
})


function changeSlide(direction){
if(direction ==='up'){
    activSlide++
}
if(activSlide === slidecound){
    activSlide = 0
}
    else if (direction === 'down'){
        activSlide--
    }
    if(activSlide < 0){
        activSlide = slidecound - 1
    }
 const height = container.clientHeight
mainslide.style.transform = `translateY(-${activSlide * height}px)`

sidbar.style.transform = `translateY(${activSlide * height}px)`
}

 













