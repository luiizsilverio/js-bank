import { Cliente } from "./cliente.js";
// import { ContaCorrente } from "./conta/conta-corrente.js";
// import { ContaPoupanca } from "./conta/conta-poupanca.js";
// import { ContaSalario } from "./conta/conta-salario.js";
import { Diretor } from "./funcionario/diretor.js";
import { Gerente } from "./funcionario/gerente.js";
import { Autenticacao } from "./Autenticacao.js";

const cliente1 = new Cliente("Luiz", 77777777777);
cliente1.cadastrarSenha("cliente123");

/*
const ccLuiz = new ContaCorrente(1234, cliente1);
ccLuiz.depositar(1000);
ccLuiz.sacar(350);

const cpLuiz = new ContaPoupanca(50, 1234, cliente1);
const conta = new ContaSalario(50, 1234, cliente1);
conta.sacar(10);

console.log('cc:', ccLuiz);
console.log('cp:', cpLuiz);
console.log('cs:', conta);
*/

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("diretor123");

const gerente = new Gerente("Daniel", 5000, 12378943259);
gerente.cadastrarSenha("gerente123");

const diretorLogado = Autenticacao.login(diretor, "diretor123");
console.log(diretorLogado)

const gerenteLogado = Autenticacao.login(gerente, "gerente123");
console.log(gerenteLogado)

const clienteLogado = Autenticacao.login(cliente1, "cliente123");
console.log(clienteLogado)
