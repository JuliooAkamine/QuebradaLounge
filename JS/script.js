/* Função que quando clica aparece o menu lateral */
function openNav() {
    document.getElementById("sidenav-overlay").style.width = "90%";
    document.getElementById("fechar-menu").style.width = "100%";

    // Oculta a barra de rolagem do corpo da página
    document.body.style.overflow = "hidden";

    // Adiciona o ouvinte de evento de rolagem
    preventDefaultScrollFunction = function(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    };
    // Defina uma variável global para armazenar a função de rolagem
    window.addEventListener('scroll', preventDefaultScrollFunction);
}

// Função para desaparecer o menu lateral
function closeNav() {
    document.getElementById("sidenav-overlay").style.width = "0";
    document.getElementById("fechar-menu").style.width = "0";
    
    // Restaura a barra de rolagem do corpo da página
    document.body.style.overflow = "auto";

    // Remove o ouvinte de evento de rolagem que impede a rolagem
    if (preventDefaultScrollFunction) {
        window.removeEventListener('scroll', preventDefaultScrollFunction);
    }
}
