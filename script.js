let blur = document.querySelector('#blur')
let sepia = document.querySelector('#sepia')
let invert = document.querySelector('#invert')
let range = document.querySelector('.range1')
let box = document.querySelector('.img')
let persentage = document.querySelector('.persentage')

let currentEffect

range.addEventListener('input', () =>{
    if(currentEffect === 'blur')blurEffect()
    if(currentEffect === 'sepia')sepiaEffect()
    if(currentEffect === 'invert')invertEffect()
    persentage.textContent =`${range.value}%`
})

blur.addEventListener('click',() => {
    blurEffect()
})

sepia.addEventListener('click',() => {
    sepiaEffect()
})

invert.addEventListener('click',() => {
    invertEffect()
})

function blurEffect(){
    box.style.filter = `blur(${range.value}px)`
    currentEffect = 'blur'
}

function sepiaEffect(){
    box.style.filter = `sepia(${range.value}%)`
    currentEffect = 'sepia'
}

function invertEffect(){
    box.style.filter = `invert(${range.value}%)`
    currentEffect = 'invert'
}

blurEffect()