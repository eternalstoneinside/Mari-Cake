//hamburger menu
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu-gumb');
  
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
//hamburger menu dessert
let menuBtnDessert = document.querySelector('.menu-btn-dessert');
let menuDessert = document.querySelector('.menu-gumb-dessert');
  
  menuBtnDessert.addEventListener('click', function(){
    menuBtnDessert.classList.toggle('active');
    menuDessert.classList.toggle('active');
})
//
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//ScrollToTop
window.onload = function() {

     var scrolled;
     var timer;

     document.getElementById('top').onclick = function() {
          scrolled = window.pageYOffset;
          scrollToTop();
     }
     function scrollToTop() {
          if (scrolled > 0) {
               window.scrollTo(0, scrolled);
               scrolled = scrolled - 50; //50 - скорость прокрутки
               timer = setTimeout(scrollToTop, 10);
          }
          else {
               clearTimeout(timer);
               window.scrollTo(0,0);
          }
     }
}

//okno
const btnOpen = document.getElementById('btn-open');
const btnOpenTwo = document.getElementById('btn-open2');
const btnClose = document.getElementById('btn-close');
const modal = document.getElementById('wrapper-modal');
const overlay = document.getElementById('modal-overlay');

btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
})

// btnOpenTwo.addEventListener('click', () => {
//     modal.classList.add('active');
// })

const closeModal = () => {
    modal.classList.remove('active');
}

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//accordion
const accordions = document.querySelectorAll('.accordion-item');

for(item of accordions) {
  item.addEventListener('click', function() {
    if(this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
        for(el of accordions) {
          el.classList.remove('active');
        }
        this.classList.add('active');
    }
  })
}

//Map
function initMap() {
     // The location of Uluru
     const uluru = { lat: 55.7579763, lng: 37.6212048 };
     // The map, centered at Uluru
     const map = new google.maps.Map(document.getElementById("contacts__map"), {
       zoom: 10,
       center: uluru,
     });
     // The marker, positioned at Uluru
     const marker = new google.maps.Marker({
       position: uluru,
       map: map,
     });
}
//okno
const btnOpenCart = document.getElementById('popup-cart-open');
const btnCloseCart = document.getElementById('popup-close');
const modalCart = document.getElementById('popup-cart');

btnOpenCart.addEventListener('click', () => {
    modalCart.classList.add('active');
})

const closeModalCart = () => {
    modalCart.classList.remove('active');
}

btnCloseCart.addEventListener('click', closeModalCart);

//counter
let count = document.getElementById("buttonCountNumber");

document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus <= 19){
    count.innerHTML++;
  }
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
  }
}