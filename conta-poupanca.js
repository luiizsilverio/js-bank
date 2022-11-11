import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta {

    constructor(saldoInicial, agencia, cliente) {
        super(saldoInicial, agencia, cliente);
    }
 
    sacar(valor) { 
        const taxa = 1.02;
        return super._sacar(valor, taxa);        
    }
}