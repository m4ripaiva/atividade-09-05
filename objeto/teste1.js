const pessoa = {
    nome: "Julia",
    idade: 22,
    profissao: "Desenvolvedora",
    tecnologias: ["JavaScript", "Node.js", "React"]
  };
  for (let chave in pessoa) {
      console.log(chave + ": " + pessoa[chave]);
    }
    