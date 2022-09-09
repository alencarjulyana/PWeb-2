class RepositorioPessoas {

    readonly repositorio_pessoas: Array<Pessoa>;

    constructor() {
        this.repositorio_pessoas = new Array<Pessoa>();
    }

    adicionar(pessoa: Pessoa) {
        this.pessoas.push(pessoa);
    }

//até aqui
    pesquisar(cpf: string) {
        if () {
            return this.pessoas.find(pessoa => pessoa.cpf === cpf);
        }
        
    }

    getPessoas() {
        return this.pessoas;
    }

    remover(numero: string) {
        const contaARemover = this.pesquisar(numero);
        if (contaARemover) {
            const indiceARemover = this.contas.indexOf(contaARemover);
            if (indiceARemover > -1) {
                this.contas.splice(indiceARemover, 1);
            }
        }
    }
}
