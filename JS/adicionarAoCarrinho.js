        
      
       function addProductToCart(event) {
      
        

        // Encontra o card do produto associado ao botão que foi clicado
        var cardProduto = event.target.closest('.card-produto');

        
        // Encontra a imagem dentro desse card de produto
        var imagem = cardProduto.querySelector('.product-image').src;
        console.log(imagem);  // Exibirá o caminho da imagem no console
        
        // Encontra o título dentro desse card de produto
        var productTitle = cardProduto.querySelector('.product-title');
        console.log(productTitle.textContent);  // Exibirá o texto do título no console

        var productPrice = cardProduto.querySelector('.product-price');
        console.log(productPrice.textContent)

        
        
        /* let produtos = [
            {
                nome_produto: productTitle.textContent,  // nome_produto é agora uma string do título do produto
                preco_produto: productPrice.textContent,  // preco_produto é agora uma string do preço do produto
                imagem_produto: imagem  // imagem_produto é agora uma string da URL da imagem
            }
        ];

        console.log(produtos)
        */
    }
  


   






    