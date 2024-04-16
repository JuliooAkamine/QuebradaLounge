    //Função para pegar as informações dos produtos e armazena-las
   function addProductToCart(event) {
    var cardProduto = event.target.closest('.card-produto');
    var imagem = cardProduto.querySelector('.product-image').src;
    var productTitle = cardProduto.querySelector('.product-title').textContent;
    var productPrice = cardProduto.querySelector('.product-price').textContent;

    var productDetails = {
        title: productTitle,
        image: imagem,
        price: productPrice
    };

    localStorage.setItem('productDetails', JSON.stringify(productDetails));

}


    //Função para resgatar as informações guardadas e converte
    document.addEventListener('DOMContentLoaded', function() {
    // Verificar se existem detalhes do produto armazenados no localStorage
    var productDetails = localStorage.getItem('productDetails');
    
    if (productDetails) {
        // Converter de volta para um objeto JavaScript
        productDetails = JSON.parse(productDetails);
        
        // Acessar os dados e imprimem ele no console
        console.log('Título do Produto:', productDetails.title);
        console.log('Imagem do Produto:', productDetails.image);
        console.log('Preço do Produto:', productDetails.price);

        // Por exemplo, você pode usar esses dados para atualizar o conteúdo da página

        
        console.log(productDetails.title)

        var imagem = document.getElementById('image-carrinho')
        var titulo = document.querySelector('.product-tittle-carrinho')
        var preco = document.querySelector('.product-price-carrinho')
        
      

       imagem.src = productDetails.image
       titulo.innerHTML = productDetails.title
       preco.innerHTML = productDetails.price



    }

});



    
 


   






    