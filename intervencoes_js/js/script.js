//Criando variáveis para receber o input do usuário
var nome;
var idade;
var email;

nome = prompt("Olá, digite seu nome", "Digite seu nome aqui");
idade = prompt("Agora digite sua idade", "Digite sua idade aqui");
email = prompt("Digite seu email", "Digite seu email aqui");


//Criando as funções
function informacoes() {
    alert("Seja bem vinde " + nome + ", você tem" + idade + " anos e seu email é " + email)
}