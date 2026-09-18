//Exercicio com interção com o usuario, foi usado estrutura de condição e arrays

/* O aluno informa o seu nome, idade e cidade e a disciplina q deseja saber se tera no ano atual, e no final é tudo imprimido, mostrando as suas informacoes pessoas e se a disciplina consta no plano academico, e informa quantas disciplinas ele terá */

const nome = (prompt("Digite o seu nome: "));
let idade = Number (prompt("Digite a sua idade: "));
const cidade = (prompt("Qual é a sua cidade: "));
console.log(nome);
console.log(idade);
console.log(cidade);

let disciplinas = ["Programação", "Base de Dados", "Redes"];
console.log("tu tens ", disciplinas.length, "cadeiras");

let lista = ["Programação", "Base de Dados", "Redes"];
const solicitar_cadeira = (prompt("Qual cadeira deseja verificar: "));
if( lista.includes(solicitar_cadeira)){
console.log("A disciplina está no plano semestral!");
}
else{
  console.log("A disciplina n está no plano semestral!");
}
