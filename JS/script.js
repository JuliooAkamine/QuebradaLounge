/* Função que quando clica aparece o menu lateral */
function openNav() {
    document.getElementById("sidenav-overlay").style.width = "85%"
    document.getElementById("fechar-menu").style.width = "100%"
    document.body.style.overflow = "hidden"
}

// função para desaparecer o menu lateral
function closeNav() {
    document.getElementById("sidenav-overlay").style.width = "0"
    document.getElementById("fechar-menu").style.width = "0"
    document.body.style.overflow = "scroll"
}