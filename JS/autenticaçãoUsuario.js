function autenticacaologin(event) {
    event.preventDefault();
    
    let email = document.getElementById('email-input-entrar').value;
    let password = document.getElementById('loginpassword').value;

    // Verifica se já há dados salvos no localStorage
    let usuariosSalvos = localStorage.getItem("usuarios");
    let usuarios = [];

    if (usuariosSalvos) {
        // Se houver, converte os dados salvos em um array de objetos JavaScript
        usuarios = JSON.parse(usuariosSalvos);
    }

    // Adiciona o novo usuário ao array de usuários
    usuarios.push({ emailusuario: email, senhausuario: password });

    // Salva o array atualizado no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    
}

// Agora você pode recuperar os usuários salvos e fazer o que quiser com eles, como imprimir na tela
let usuariosRecuperados = localStorage.getItem("usuarios");

// Se houver usuários salvos, exiba-os
if (usuariosRecuperados) {
    let usuarios = JSON.parse(usuariosRecuperados);
    usuarios.forEach(usuario => {
        console.log(usuario.emailusuario);
        console.log(usuario.senhausuario);
    });
}
