const aluno = {
    nome: "Carlos",
    idade: 20,
    curso: "Engenharia",
    disciplinas: ["Matemática", "Física", "Química"]
  };
  for (let chave in aluno) {
    console.log(chave + ": " + aluno[chave]);
  }