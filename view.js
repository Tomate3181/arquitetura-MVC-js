function exibirProdutos() {
    const ul = document.getElementById("lista-produtos");
    ul.innerHTML = "";

    produtos.forEach((produto) => {
        const li = document.createElement("li");
        li.textContent = `${produto.nome} - R$ ${produto.preco}`;
        ul.appendChild(li);
    });
}