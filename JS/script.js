

//Carrosel slick
$(document).ready(function () {
    $('.carrosel').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: true,
    }); 
    
  
})

// Slick Center
function slickfy() {
    $(document).ready(function () {
        $('.produtos').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            autoplaySpeed: 5000,
            infinite: true,
            centerMode: true,
            centerPadding: "0px",
            arrows: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 720,
                    settings: "unslick"
                }
            ]
          });
    });
}

slickfy()
$(window).resize(function(){
    var $windowWidth = $(window).width();
    if ($windowWidth < 10000) { /* Adicionar o máximo de @media que iremos usar em nossa página */
        slickfy();
    }
})

// Slick carossel 2
function slickfy2() {
    $(document).ready(function () {
        $('.slider').slick({
            autoplay: false,
            autoplaySpeed: 4000,
            dots: false,
            arrows: true,
            mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 865,
                        settings: "unslick"
                    }
                ]
        }); 
    })
}
slickfy2()
$(window).resize(function(){
    var $windowWidth = $(window).width();
    if ($windowWidth < 10000) { /* Adicionar o máximo de @media que iremos usar em nossa página */
        slickfy2();
    }
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
    document.body.style.overflowX = "clip";
    document.body.style.overflowY = "auto";
}


// Animações ao scrollar



const observer = new IntersectionObserver(
    function(entries){
        entries.forEach((entry) => {
            if(entry.isIntersecting === true){
                entry.target.classList.add("show")
            }else{
                entry.target.classList.remove("show")
            }
        });
    },
   
)

const elements = document.querySelectorAll(".hidden");

elements.forEach((entry) =>{
    observer.observe(entry);
})

setTimeout(function(){
    document.getElementById('modal-18anos').style.scale = '1'
}, 700)

document.getElementById('body').style.overflowY = 'hidden'
document.getElementById('main').style.filter = 'blur(2px)'
document.getElementById('header').style.filter = 'blur(2px)'

function modal(){
    document.getElementById('container-modal-18anos').style.display = 'none'
document.getElementById('body').style.overflowY = 'scroll'
document.getElementById('main').style.filter = 'blur(0)'
document.getElementById('header').style.filter = 'blur(0)'
   
}

function nao(){
   document.getElementById('body').style.display = 'none'
   document.write('<h1>Desculpe você não tem idade suficiente para acessar este site.</h1>')
  
}

/* Funções para abrir e fechar modal do formulário de agendamento */
function abrirAgendamento() {
    document.getElementById("form-agenda").classList.remove('hidenAgenda')
    document.getElementById('formAgenda').style.animationName = "zoomIn"

    // Oculta a barra de rolagem do corpo da página
    document.body.style.overflow = "hidden";

}
function fecharAgendamento() {
    document.getElementById('formAgenda').style.animationName = "zoomOut"
    setTimeout(function(){
        document.getElementById("form-agenda").classList.add('hidenAgenda')
            // Restaura a barra de rolagem do corpo da página
            document.body.style.overflowX = "clip";
            document.body.style.overflowY = "auto";
    }, 300)
}