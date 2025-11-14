// A função exibirProdutos lê o array 'produtos' do model e o renderiza na tela
function exibirProdutos() {
  const lista = document.getElementById("lista-produtos");
  // Limpa a lista atual para não duplicar os itens ao adicionar um novo
  lista.innerHTML = "";

  // Itera sobre cada produto no array para criar o elemento HTML
  produtos.forEach((produto, index) => {
    const li = document.createElement("li");

    // Adiciona um atributo 'data-index' ao <li>. Isso é CRUCIAL para sabermos qual item remover.
    li.dataset.index = index;

    // Conteúdo do card do produto, incluindo o botão de remover
    li.innerHTML = `
      <div class="produto-info">
          <span class="produto-nome">${produto.nome}</span>
      </div>
      <div class="produto-acao">
          <span class="produto-preco">R$ ${produto.preco}</span>
          <button class="botao-remover">X</button>
      </div>
    `;

    lista.appendChild(li);
  });
}