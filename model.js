let produtos = [];

function adicionarProdutos(nome, preco) {
  // Simples validação para não adicionar produtos vazios
  if (nome && preco) {
    produtos.push({ nome: nome, preco: preco });
  }
}

// Função para remover um produto pelo seu índice
function removerProduto(index) {
  // O método splice altera o array original, removendo 1 elemento a partir do índice fornecido
  if (index > -1 && index < produtos.length) {
    produtos.splice(index, 1);
  }
}