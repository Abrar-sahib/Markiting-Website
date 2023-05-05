
// window.addEventListener('scroll', function() {
//   console.log('scrolled');
// })

$(".clint-carousel").owlCarousel({
    margin: 295,
    loop: true,
    items:1,
    nav:true,
    center:true,
    navigation:true,
    responsive:true,
    mergeFit:true,
    // autoWidth:true,
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: false,
      },
      300:{
        items:1,
        nav: false,
      },
      600:{
        items:1,
        nav: false,
      },
      1000:{
        items:1,
        margin: 695,
        nav: false
      },
      1400:{
        items:1,
        margin: 895,
        nav: false
      },
      1800:{
        items:1,
        margin: 1495,
        nav: false
      },
      2800:{
        items:1,
        margin: 1095,
        nav: false
      },
    }
});

var owlClint = $('.clint-carousel');
owlClint.owlCarousel();

$('.owl-prev-clint').click(function() {
  // console.log('dfdsf');
  owlClint.trigger('next.owl.carousel',[500]);
})
$('.owl-next-clint').click(function() {
  // console.log('dfdsf');
  owlClint.trigger('prev.owl.carousel', [500]);
})



$(".carousel").owlCarousel({
  margin: 25,
  loop: true,
    items:4,
    nav:false,
    // center:true,
    navigation:true,
    // mergeFit:false,
    autoWidth:true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    // responsive:true,
    responsive: {
      0:{
        items:1,
        nav: false,
        margin:10,
        center:true
      },
      300:{
        items:1,
        nav: false,
        margin:10,
        center:true
      },
      600:{
        items:1,
        nav: false,
        margin:10,
        center:true
      },
      1000:{
        items:3,
        nav: false,
        center:false
      },
      1400:{
        items:4,
        nav: false,
        center:false
      },
      1800:{
        items:4,
        nav: false,
        center:false
      },
    }
});
var owl = $('.carousel');
owl.owlCarousel();

$('.owl-prev-study').click(function() {
  // console.log('dfdsf');
  owl.trigger('next.owl.carousel',[500]);
})
$('.owl-next-study').click(function() {
  // console.log('dfdsf');
  owl.trigger('prev.owl.carousel', [500]);
})


const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  console.log('scrolled');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#171b1e'
    navbar.style.paddingTop = '10px'
    navbar.style.paddingBottom = '10px'

    // navbar.classList.add(".scro");
  } else {
    navbar.classList.remove(".scro");
  }
});

const hamBurger = document.querySelector(".burger");
const navManu = document.querySelector(".nav-links");

hamBurger.addEventListener("click", () => {
  // console.log("clicked");
  hamBurger.classList.toggle('active');
  navManu.classList.toggle('active');
  
})

// const navUl = document.querySelector(".a-link");

// navUl.addEventListener("click", () => {
//   hamBurger.classList.remove('active');
//   navManu.classList.remove('active');
// })

const links = document.querySelectorAll('.nav-ul a')

links.forEach(l => {
  // BIND CLICK EVENT ON ALL LINKS
  l.addEventListener('click', () => {
    // ON CLICK, REMOVE active CLASS FROM navBarLinks
    navManu.classList.remove('active')
  })
})