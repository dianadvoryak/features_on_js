let getNavbarMenu = document.getElementById("navbar_menu")
getNavbarMenu.style.top = "-100px";
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        getNavbarMenu.style.top = "0px";
    } else {
        getNavbarMenu.style.top = "-100px";
    }
}

let getMenu = document.querySelector('.menu')
let getBody = document.querySelector('body')
let getBurgerMenu = document.querySelector('.burger_menu')
let getLi = document.querySelectorAll('.menu__item')
let getLiIcon = document.querySelectorAll('.menu__item-s')

getLi.forEach((item) => {
		item.addEventListener('click', function(ev){
			Rotate(item)
	})
})
getLiIcon.forEach((item) => {
		item.addEventListener('click', function(ev){
			Rotate(item)
	})
})


function Rotate(click){
    getBurgerMenu.classList.toggle('rotate')
		getMenu.classList.toggle('active')
		getBody.classList.toggle('hidden')
}


const down_button = document.querySelector('.down-button') 
const up_button = document.querySelector('.up-button') 
const slider = document.querySelector('.slider') 
const sld = document.querySelectorAll('.sld') 
const slidesCount = slider.children.length
let currentSlide = 0


down_button.addEventListener('click', () => {
	currentSlide++
	if(currentSlide > 0){
		currentSlide = (slidesCount-1) * (-1)
	}
	for(let i of sld){
		i.style.transform = `translateY(-${currentSlide*(-100)}%)`
	}
})

up_button.addEventListener('click', () => {
	currentSlide--
	if(currentSlide === (slidesCount * (-1))){
		currentSlide = 0
	}
	for(let i of sld){
		i.style.transform = `translateY(${currentSlide*100}%)`
	}
})