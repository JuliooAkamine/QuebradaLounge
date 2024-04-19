function addProductToCart(event) {
    var cardProduto = event.target.closest('.card-produto');
    var imagem = cardProduto.querySelector('.product-image').src;
    var productTitle = cardProduto.querySelector('.product-title').textContent;
    var productPrice = cardProduto.querySelector('.product-price').textContent;

    var novoProduto = {
        title: productTitle,
        image: imagem,
        price: productPrice
    };

    // Recuperar o carrinho atual do localStorage, ou iniciar um novo carrinho se não existir
    var carrinho = localStorage.getItem('carrinho') ? JSON.parse(localStorage.getItem('carrinho')) : [];
    
    // Verifica se o produto já está no carrinho
    var produtoExistente = carrinho.find(function(produto) {
        return produto.title === novoProduto.title;
    });
    
    if (produtoExistente) {
        // Se o produto já estiver no carrinho, exibe uma mensagem ou executa outra ação desejada
        alert('Este produto já está no carrinho.');
        return; // Não adiciona o produto novamente ao carrinho
    }

    carrinho.push(novoProduto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Animação do botão (ajustar conforme sua necessidade)
    var botao = document.querySelector('#modal-addtocart');
    botao.style.right = '0px';
    setTimeout(function(){
        botao.style.right = '-550px';
    }, 5000);
}


document.addEventListener('DOMContentLoaded', function() {
    var carrinho = localStorage.getItem('carrinho');
    carrinho = JSON.parse(carrinho) || [];

    var containerProdutos = document.getElementById('produtos-carrinho');
    containerProdutos.innerHTML = '';  // Limpa o conteúdo anterior

    

    

    carrinho.forEach(function(produto, index) {
        containerProdutos.innerHTML += `
            <div class="card-produto-carrinho">
                <div class="icone-lixeira" onclick="removeItemFromCart(${index})"><img src="../assets/icons/icons-lixo.svg" alt="Remover item"></div>
                <div class="card-produto-img">
                    <img src="${produto.image}" alt="Imagem do produto">
                </div>
                <div class="card-produto-descricao">
                    <p class="product-title-carrinho">${produto.title}</p>
                </div>
                <div class="card-produto-precoUni">
                    <span class="product-price-carrinho">${produto.price}</span>
                </div>
                <div class="card-produto-quantidadeUni">
                    <img onclick="subtrair()" id="subtracao" src="../assets/icons/minus-icon.svg" alt="ícone de subtração">
                    <span id="contador-itens-carrinho">1</span>
                    <img onclick="adicionar()"  id="adicao" src="../assets/icons/plus-icon.svg" alt="ícone de adição">
                </div>
                <div class="card-produto-subtotal">
                    <h6>Subtotal</h6>
                    <span id="subtotal">${produto.price}</span>
                </div>
            </div>
        `;
    });
    
});


function removeItemFromCart(index) {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1); // Remove o item no índice especificado
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o carrinho no localStorage

    // Re-renderiza a lista de produtos no carrinho após a remoção
    var containerProdutos = document.getElementById('produtos-carrinho');
    containerProdutos.innerHTML = '';  // Limpa o conteúdo anterior

    carrinho.forEach(function(produto, index) {
        containerProdutos.innerHTML += `
            <div class="card-produto-carrinho">
                <div class="icone-lixeira" onclick="removeItemFromCart(${index})"><img src="../assets/icons/icons-lixo.svg" alt="Remover item"></div>
                <div class="card-produto-img">
                    <img src="${produto.image}" alt="Imagem do produto">
                </div>
                <div class="card-produto-descricao">
                    <p class="product-title-carrinho">${produto.title}</p>
                </div>
                <div class="card-produto-precoUni">
                    <span class="product-price-carrinho">${produto.price}</span>
                </div>
                <div class="card-produto-quantidadeUni">
                    <img onclick="subtrair()" id="subtracao" src="../assets/icons/minus-icon.svg" alt="ícone de subtração">
                    <span id="contador-itens-carrinho">1</span>
                    <img onclick="adicionar()"  id="adicao" src="../assets/icons/plus-icon.svg" alt="ícone de adição">
                </div>
                <div class="card-produto-subtotal">
                    <h6>Subtotal</h6>
                    <span id="subtotal">${produto.price}</span>
                </div>
            </div>
        `;
    });
}

var contagem = document.getElementById('contador-itens-carrinho')
var incrementar = document.getElementById('adicao')
var decrementar = document.getElementById('subtracao')
var contador = 0

// function adicionar(){
//     contador++;
//     document.getElementById('contador-itens-carrinho').textContent = contador;

   
// }

// function subtrair() {
//     if (contador > 0) {
//         contador--
//         document.getElementById('contador-itens-carrinho').innerHTML = contador
//     }}



 // Função para limpar o localStorage
 function limparLocalStorage() {
    localStorage.clear();
    location.reload()
}

