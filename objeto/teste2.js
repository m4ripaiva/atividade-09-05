const produto = {
    nome: "Notebook",
    preco: 3500,
    desconto: 0.1,
    precoComDesconto: function() {
      return this.preco * (1 - this.desconto);
    }
  };
  console.log(produto.precoComDesconto()); // 3150

  const novoProduto = {
    ...produto,
    preco: 3000 // sobrescreve o preço original
  };
  
  
  console.log(novoProduto); // mantém os demais dados
