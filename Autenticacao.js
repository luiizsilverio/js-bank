export class Autenticacao {

    // static login(funcionario, senha) {
    //     return funcionario._senha === senha;
    // }

    static login(autenticavel, senha) {
        if (Autenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        // 2 maneiras possíveis de testar se a propriedade é função
        // return "autenticar" in autenticavel && typeof autenticavel.autenticar === "function"
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}