//Adiciona o item a cada clique
function renderizarCarrinho() {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    var containerProdutos = document.getElementById('produtos-carrinho');
    var recibo = document.getElementById('recibo-container')
    containerProdutos.innerHTML = '';  // Limpa o conteúdo anterior

    var totalCompra = 0;

    if (carrinho.length === 0) {
        // Se o carrinho estiver vazio, exibe a mensagem
        containerProdutos.innerHTML = '<img id="carrinhovazioimg" src="../assets/icons/carrinho vazio.png" alt=""> <p id="text-carrinhovazio">Desculpe, não há nenhum item no carrinho.</p>';
        // Esconde o botão de limpar carrinho
        document.getElementById('container-geral-pagamento').style.display = 'none';
        // Sai da função
        document.getElementById('limparLocalStorage').style.display = 'none';
        // Sai da função
        return;
    }

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

//Função para adicionar o item no carrinho
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
    var linhaCarragando = document.querySelector('#linha-carregando')
    botao.style.right = '0px';
    setTimeout(function(){
        linhaCarragando.style.width = "100%"
        linhaCarragando.style.transition = "1800ms"
    }, 500) /* Tempo que vai acionar a animação de 100% */
    setTimeout(function(){
        botao.style.right = '-550px';
    }, 2500); /* Tempo que ira ocultar modal*/
    setTimeout(function(){
        linhaCarragando.style.width = "0%"
        linhaCarragando.style.transition = "0ms"
    }, 3000) /* Tempo para ocultar barra de carregamento e zerar transição. */
    
    // Limpa o conteúdo anterior do carrinho e renderiza novamente
    renderizarCarrinho();

    
}

//função para remover o item do carrinho
function removeItemFromCart(index) {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1); // Remove o item no índice especificado
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o carrinho no localStorage

    // Re-renderiza a lista de produtos no carrinho após a remoção
    renderizarCarrinho();
}

//função para o contador do carrinho +
function adicionar(index) {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    var produto = carrinho[index];
    produto.contador++;
    atualizarProdutoNoCarrinho(produto);
}
//Função para o contador do carrinho -
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

var pagar = document.getElementById("payment")

pagar.addEventListener('click', function(){
   document.getElementById('carrinhocontainer').style.display = 'none'
})


// Função para abrir o modal de recibo
function abrirModalRecibo() {

    document.getElementById('carrinhobody').style.overflow = "hidden";
    document.getElementById('footerid').style.width = "100%"
    document.getElementById('footerid').style.position = "absolute"
    document.getElementById('footerid').style.bottom = "0"
    // Mostrar o modal de recibo
    document.getElementById('recibo-modal').style.display = "flex";
    document.getElementById('recibo-modal').style.overflow = "hidden";

    // Recuperar os itens do carrinho do localStorage
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    var itensCarrinhoContainer = document.getElementById('itens-carrinho');
    
    itensCarrinhoContainer.innerHTML = ''; // Limpar o conteúdo anterior

    // Loop através dos itens do carrinho e exibir suas informações
    carrinho.forEach(function(produto) {
        itensCarrinhoContainer.innerHTML += `
            <div class="item-carrinho">
                <img src="${produto.image}" alt="Imagem do produto">
                <div>
                    <p>${produto.title}</p>
                    <p>Preço: ${produto.price}</p>
                </div>
            </div>
        `;
    });

    // Exibir o total da compra
    var totalCompra = calcularTotalCompra(carrinho);
    document.getElementById('valor-total-recibo').textContent = 'R$ ' + totalCompra.toFixed(2);
    document.querySelector('.itens-carrinho').style.overflow = 'auto'
    document.querySelector('.itens-carrinho').style.height = '350px'
    
}

// Função auxiliar para calcular o total da compra
function calcularTotalCompra(carrinho) {
    var total = 0;
    carrinho.forEach(function(produto) {
        var precoUnitario = parseFloat(produto.price.replace('R$', '').replace(',', '.'));
        total += precoUnitario * produto.contador;
    });
    return total;
}

  
// Função para fechar o modal de recibo
function fecharModalRecibo() {
    document.getElementById('carrinhobody').style.overflow = "";
    document.getElementById('footerid').style.width = ""
    document.getElementById('footerid').style.position = "relative"
    document.getElementById('footerid').style.bottom = ""
    document.getElementById('recibo-modal').style.display = "none";
    document.getElementById('carrinhocontainer').style.display = "block";
}

  