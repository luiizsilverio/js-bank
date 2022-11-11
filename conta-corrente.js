import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {
    
    static qtdContas = 0;

    constructor(agencia, cliente) {
        super(0, agencia, cliente);
        ContaCorrente.qtdContas ++;
    }    

    sacar(valor) {
        let taxa = 1.1;
        return super._sacar(valor, taxa);
        }
    }
}

