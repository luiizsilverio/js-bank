import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./conta-corrente.js";
import { ContaPoupanca } from "./conta-poupanca.js";
import { ContaSalario } from "./conta-salario.js";
import { Conta } from "./conta.js";

const cliente1 = new Cliente("Luiz", 77777777777);
const ccLuiz = new ContaCorrente(1234, cliente1);
ccLuiz.depositar(1000);
ccLuiz.sacar(350);

const cpLuiz = new ContaPoupanca(50, 1234, cliente1);
// const conta = new Conta(50, 1234, cliente1);
const conta = new ContaSalario(50, 1234, cliente1);
conta.sacar(10);

console.log('cc:', ccLuiz);
console.log('cp:', cpLuiz);
console.log('cs:', conta)
// console.log('saldo:', ccLuiz.saldo);
// console.log('qtd:', ContaCorrente.qtdContas);
