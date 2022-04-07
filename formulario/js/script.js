// Criando uma biblioteca em JS para validações

// Criando variáveis para os dados obtidos do cliente
function valida_campos() {
    var nome = cadastro.nome_cliente.value;
    var email = cadastro.email_cliente.value;
    var senha = cadastro.senha_cliente.value;
    var senha_validada = cadastro.validacao_senha.value;

// Condição de retorno caso o campo nome esteja em branco
    if (nome == "") {
        alert("Por favor, preencha o seu nome!");
        cadastro.nome_cliente.focus();
        return false;
    }
// Condição de retorno caso o campo email esteja em branco

    if (email == "") {
        alert("Por favor, preencha o seu email!");
        cadastro.email_cliente.focus();
        return false;
    }
// Condição de retorno caso o campo senha esteja em branco

    if (senha == "") {
        alert("Por favor, preencha a sua senha");
        cadastro.senha_cliente.focus();
        return false;

    }
// Condição de retorno caso o campo senha_validada esteja em branco

    if (senha_validada == "") {
        alert("Por favor, preencha a sua senha");
        cadastro.validacao_senha.focus();
        return false;

    }
// Condição de retorno caso o campo senha_validada seja diferente do campo senha

    if (senha_validada != senha){
        alert("Suas senhas não conferem. Digite a mesma senha!");
        cadastro.validacao_senha.focus();
        return false;

       }
    else {
        alert("Olá " + nome + ",suas credenciais foram salvas!");
    }
}

