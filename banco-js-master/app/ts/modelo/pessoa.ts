class Pessoa {
    protected nome: string;
    private _idade: number;
    private _dataNascimento: String;

    constructor(nome: string, idade: number, dataNascimento: String) {
        this.nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;

    }

    
    getNome(): string {
        return this.nome;
    }

    setNome(nome: string) {
        this.nome = nome;
    }
    
    get idade(): number {
        return this._idade;
    }

    set idade(idade: number) {
        this._idade = idade;
    }

    getdataNascimento(): String {
        return this._dataNascimento;
    }

    set dataNascimento(idade: number) {
        this._dataNascimento = idade;
    }

}