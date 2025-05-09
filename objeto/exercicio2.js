const livro = {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    ano: 1988,
    resumo: function() {
      return `${this.titulo} foi escrito por ${this.autor} em ${this.ano}.`;
    }
  };
  
  console.log(livro.resumo()); 
  