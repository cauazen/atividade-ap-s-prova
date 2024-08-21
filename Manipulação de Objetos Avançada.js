let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro",
    endereco: {
        rua: "Rua das Flores",
        cidade: "São Paulo",
        estado: "SP"
    },
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, sou ${this.profissao} e moro em ${this.endereco.cidade}, ${this.endereco.estado}.`;
    }
};


console.log("Cidade: " + pessoa.endereco.cidade);


pessoa.profissao = "Desenvolvedor de Software";


console.log(pessoa);


pessoa.telefone = "1234-5678";


console.log(pessoa);
