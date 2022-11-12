import { Cliente } from "../cliente.js";

export class Conta {
    agencia;
    cliente;
    static qtdContas = 0;

    constructor(saldoInicial, agencia, cliente) {   
        if (this.constructor === Conta) {
            throw new Error('** Não é possível instanciar um objeto da classe Conta');
        }
             
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = saldoInicial;
        Conta.qtdContas ++;        
    }

    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    get cliente() {
        return this.cliente;
    }

    set cliente(newcli) {
        if (newcli instanceof Cliente) {
            this.cliente = newcli;
        }
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

