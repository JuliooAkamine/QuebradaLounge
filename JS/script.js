//Carrosel slick
$(document).ready(function () {
    $('.carrosel').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: true,
    }); 
})
$(document).ready(function () {
    $('.produtos').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows:true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              arrows:true,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});

$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
    }); 
})
/* Função que quando clica aparece o menu lateral */
function openNav() {
    document.getElementById("sidenav-overlay").style.width = "70%";
    document.getElementById("fechar-menu").style.width = "100%";

    // Oculta a barra de rolagem do corpo da página
    document.body.style.overflow = "hidden";
}

// Função para desaparecer o menu lateral
function closeNav() {
    document.getElementById("sidenav-overlay").style.width = "0";
    document.getElementById("fechar-menu").style.width = "0";

    // Restaura a barra de rolagem do corpo da página
    document.body.style.overflow = "auto";
}


// 

