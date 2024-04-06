//slider
let swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },
});

//tabs
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.work__item');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active')

    tabsItem.forEach(function(element){ element.classList.remove('work__item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work__item--active');
  });
});


//accordion
new Accordion('.accordion__list', {
	elementClass: 'accordion__item',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__bottom',
	activeClass: 'accordion--active',
});

//burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav-link');

burger.addEventListener('click',

  function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function(el){
  el.addEventListener('click', function(){
    
    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
    
  });
});

//form-search
document.querySelector(".nav-search").addEventListener("click", function() {
  document.querySelector(".form--top").classList.add("form__active");
  this.classList.add("active");
})
document.querySelector(".form-close").addEventListener("click", function() {
   let form = document.querySelector(".form--top");
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
});

