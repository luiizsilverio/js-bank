export class Cliente {
    nome;
    cpf;
    _senha;

    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    get cpf() {
        return this.cpf;
    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }

    autenticar() {
        return true;
    }

}