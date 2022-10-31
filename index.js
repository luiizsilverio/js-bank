import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./conta-corrente.js";

const cliente1 = new Cliente("Luiz", 77777777777);
const ccLuiz = new ContaCorrente(1234, cliente1);
ccLuiz.depositar(1000);
ccLuiz.sacar(350);

const cliente2 = new Cliente("Maria", 71234523453);
const ccMaria = new ContaCorrente(1234, cliente2);
ccMaria.depositar(500);

console.log('cliente:', ccLuiz.cliente)
console.log('conta:', ccLuiz);
console.log('saldo:', ccLuiz.saldo);
console.log('qtd:', ContaCorrente.qtdContas);