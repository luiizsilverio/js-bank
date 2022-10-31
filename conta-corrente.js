import { Cliente } from "./cliente.js";

export class ContaCorrente {
    agencia;
    cliente;
    #saldo = 0;
    static qtdContas = 0;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.qtdContas ++;
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        }
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
        return this.#saldo;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this.#saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

