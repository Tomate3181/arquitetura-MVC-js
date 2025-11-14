document.addEventListener("DOMContentLoaded", () => {
    
    const formulario = document.getElementById('form-produtos');

    formulario.addEventListener('submit', function(e){
        e.preventDefault();

        const nomeProduto = document.getElementById('nome-produto').value.trim();
        const precoProduto = document.getElementById('preco-produto').value.trim();

        adicionarProdutos(nomeProduto, precoProduto);

        exibirProdutos();
    });
});
