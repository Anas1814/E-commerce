let countDownDate = new Date("june 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// swiper slide js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});


// animations

ScrollReveal().reveal(".top-nav", {
  origin: "top",
  distance: "20px",
  opacity: 0,

});

ScrollReveal().reveal(".nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 200,

});

ScrollReveal().reveal(".header", {
  origin: "left",
  distance: "20px",
  opacity: 0,
  delay: 400,

});

ScrollReveal().reveal(".section", {
  origin: "right",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 300,

});

ScrollReveal().reveal(".footer", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 300,

});


// mobile nav
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-nav');

hamburger.addEventListener("click", ()=> {
  nav.classList.toggle("mobile-nav-hide")
});

// add to cart

const AddtoCart = document.querySelectorAll(".add-to-cart");

AddtoCart.forEach((button)=>{
  button.addEventListener("click", () =>{
    const id = button.getAttribute("data-id")
    const title = button.getAttribute("data-title")
    const image = button.getAttribute("data-image")
    const price = button.getAttribute("data-price")

    const cartItem = {id, title, image, price};
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  });

});