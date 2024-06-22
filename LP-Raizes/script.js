/* ABRE E FECHA O MENU QUANDO CLICAR NO ICONE: HAMBURGUER(ABRIR) e X(FECHA) */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  })
}

/*QUANDO CLICAR EM UM ITEM DO MENU , ESCONDER O MENU*/
const links = document.querySelectorAll('nav ul li a');
console.log(links)

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  })
}

/* Função adicionando box-shadow no header quando der scroll*/
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
   /*  header.style.backgroundColor = "rgba(252, 249, 238, 1)"; */
  } else {
    header.classList.remove('scroll');
    /* header.style.backgroundColor = "transparent"; */

  }
}

/* Testimonials carousel swiper (slider)*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

/* Scroll Reveal , mostrar conteúdo ao rolar a pagina(scroll)*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1100,
  reset: true
})
ScrollReveal().reveal(
  `#home .image, #home .button, #home .text,
  #about .image, #about .text ,
  #products header, #products .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text,#contact .button, #contact .links,
  footer .brand, footer .social
   `, {
    interval: 100
  });

/* Função voltar para o Topo*/
const backToTopButton = document.querySelector('.back-to-top');

function backToTop() {

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visivel na página */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if(checkpointStart && checkpointEnd){
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
    }else{
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
    }
  }
}

/* GOOGLE MAPS */
function init_map() {
  var myOptions = {
    zoom: 17,
    center: new google.maps.LatLng(-20.51648499992217, -43.71024075116219),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
  marker = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(-20.51648499992217, -43.71024075116219)
  });
  infowindow = new google.maps.InfoWindow({
    content: '<strong> Nativa Natural - Açaí & Smoothie Bowls<br> Granolas Raízes </strong><br>Av. Mariza de Souza Mendes <br>'
  });
  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
  });
  infowindow.open(map, marker);
}

google.maps.event.addDomListener(window, 'load', init_map);

/* When scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
})