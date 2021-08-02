var nav = document.querySelector('nav');
var navList = document.querySelector('.nav-list');
var menu = document.querySelector('.menu');
var logo = document.querySelector('.logo h1');

if(window.scrollY > 0) {
    nav.classList.add('nav-js');
    menu.querySelector('i').style.color = 'black'
}

window.addEventListener('scroll' , function(){
    var scrollY = window.scrollY;
    console.log(scrollY);
    if(scrollY > 0){
        nav.classList.add('nav-js');
        menu.querySelector('i').style.color = 'black'
    }else {
        nav.classList.remove('nav-js');
        menu.querySelector('i').style.color = 'white'

    }
})

// ----------- SWIPER------
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    }
  });


//   ----------------------- NAV------------


menu.addEventListener('click' , function(){
    navList.classList.toggle('nav-list-js');
    nav.classList.toggle('nav-menu')
})