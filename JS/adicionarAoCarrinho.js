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
                    <img src="../assets/icons/minus-icon.svg" alt="ícone de subtração">
                    <span>1</span>
                    <img src="../assets/icons/plus-icon.svg" alt="ícone de adição">
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
                    <img src="../assets/icons/minus-icon.svg" alt="ícone de subtração">
                    <span>1</span>
                    <img src="../assets/icons/plus-icon.svg" alt="ícone de adição">
                </div>
                <div class="card-produto-subtotal">
                    <h6>Subtotal</h6>
                    <span id="subtotal">${produto.price}</span>
                </div>
            </div>
        `;
    });
}
