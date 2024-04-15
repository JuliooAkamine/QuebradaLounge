    //Adiciona todos os botões de retire na loja ao javascript e adiciona um evento de click a cada um que executa a função addProductToCart
    

    function addProductToCart(event) {
        // Encontra o card do produto associado ao botão que foi clicado
        var cardProduto = event.target.closest('.card-produto');
        
        // Encontra a imagem dentro desse card de produto
        var imagem = cardProduto.querySelector('.product-image');
        console.log(imagem.src);  // Exibirá o caminho da imagem no console
        
        // Encontra o título dentro desse card de produto
        var productTitle = cardProduto.querySelector('.product-title');
        console.log(productTitle.textContent);  // Exibirá o texto do título no console

        var productPrice = cardProduto.querySelector('.product-price');
        console.log(productPrice.textContent)

    }