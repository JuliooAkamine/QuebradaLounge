

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
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 5000,
        infinite: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "0px",
        arrows: false,
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

