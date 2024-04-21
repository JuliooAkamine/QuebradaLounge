function renderizarCarrinho() {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    var containerProdutos = document.getElementById('produtos-carrinho');
    containerProdutos.innerHTML = '';  // Limpa o conteúdo anterior

    var totalCompra = 0;

    carrinho.forEach(function(produto, index) {
        var contador = produto.contador; // Recupera o contador para cada produto

        // Calcula o subtotal para cada produto
        var precoUnitario = parseFloat(produto.price.replace('R$', '').replace(',', '.'));
        var subtotal = precoUnitario * contador;

        // Adiciona o subtotal ao total da compra
        totalCompra += subtotal;

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
                    <img onclick="subtrair(${index})" id="subtracao" src="../assets/icons/minus-icon.svg" alt="ícone de subtração">
                    <span class="contador-itens-carrinho">${contador}</span>
                    <img onclick="adicionar(${index})"  id="adicao" src="../assets/icons/plus-icon.svg" alt="ícone de adição">
                </div>
                <div class="card-produto-subtotal">
                    <h6>Subtotal</h6>
                    <span class="subtotal">R$ ${subtotal.toFixed(2)}</span>
                </div>
                
            </div>
            
            
        `;
    });

    // Atualiza o elemento HTML com o valor total da compra
    document.getElementById('valor-total').textContent = 'R$ ' + totalCompra.toFixed(2);
}

document.addEventListener('DOMContentLoaded', renderizarCarrinho);




function addProductToCart(event) {
    var cardProduto = event.target.closest('.card-produto');
    var imagem = cardProduto.querySelector('.product-image').src;
    var productTitle = cardProduto.querySelector('.product-title').textContent;
    var productPrice = cardProduto.querySelector('.product-price').textContent;

    var novoProduto = {
        title: productTitle,
        image: imagem,
        price: productPrice,
        contador: 1  // Inicializa o contador como zero
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
    
    // Limpa o conteúdo anterior do carrinho e renderiza novamente
    renderizarCarrinho();

    
}





function removeItemFromCart(index) {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1); // Remove o item no índice especificado
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o carrinho no localStorage

    // Re-renderiza a lista de produtos no carrinho após a remoção
    renderizarCarrinho();
}




function adicionar(index) {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    var produto = carrinho[index];
    produto.contador++;
    atualizarProdutoNoCarrinho(produto);
}

function subtrair(index) {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    var produto = carrinho[index];
    if (produto.contador > 0) {
        produto.contador--;
        atualizarProdutoNoCarrinho(produto);
    }
}

function atualizarProdutoNoCarrinho(produto) {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    var index = carrinho.findIndex(function(item) {
        return item.title === produto.title;
    });
    carrinho[index] = produto;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
}


function atualizarSubtotal(index, contador) {
    var precoUnitarioText = document.querySelectorAll('.product-price-carrinho')[index].textContent;
    var precoUnitario = parseFloat(precoUnitarioText.replace('R$', '').replace(',', '.')); // Remover 'R$' e substituir ',' por '.' para tornar o preço um número válido
    if (!isNaN(precoUnitario)) {
        var subtotal = precoUnitario * contador;
        document.querySelectorAll('.subtotal')[index].textContent = 'R$ ' + subtotal.toFixed(2); // Formatando o subtotal como 'R$ X.XX'
    } else {
        document.querySelectorAll('.subtotal')[index].textContent = 'Preço inválido';
    }
}

// Chamada para renderizar o carrinho quando a página é carregada
document.addEventListener('DOMContentLoaded', renderizarCarrinho);

// Função para limpar o localStorage
function limparLocalStorage() {
    localStorage.clear();
    location.reload();
}


