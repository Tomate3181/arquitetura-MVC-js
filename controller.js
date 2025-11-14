document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-produtos");
  const listaProdutosUI = document.getElementById("lista-produtos");

  // Evento para ADICIONAR produtos
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nomeInput = document.getElementById("nome-produto");
    const precoInput = document.getElementById("preco-produto");

    // Chama a função do model para adicionar
    adicionarProdutos(nomeInput.value, precoInput.value);

    // Chama a função da view para redesenhar a lista
    exibirProdutos();

    // Limpa os campos do formulário
    formulario.reset();
    nomeInput.focus();
  });

  // Evento para REMOVER produtos
  listaProdutosUI.addEventListener("click", function (e) {
    // Verifica se o elemento clicado foi um botão com a classe 'botao-remover'
    if (e.target.classList.contains("botao-remover")) {
      
      // Encontra o elemento <li> mais próximo do botão que foi clicado
      const itemParaRemover = e.target.closest("li");
      
      // Pega o índice que guardamos no 'data-index' do <li>
      const index = parseInt(itemParaRemover.dataset.index);

      // Chama a função do model para remover o produto do array
      removerProduto(index);

      // Chama a função da view para redesenhar a lista já atualizada
      exibirProdutos();
    }
  });

  // Exibe os produtos que possam já existir ao carregar a página
  exibirProdutos();
});