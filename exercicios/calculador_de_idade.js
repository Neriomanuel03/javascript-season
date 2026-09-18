const data_nascimento = Number(prompt("Digite o ano em q nascaste: "));
const ano_atual = Number(prompt("Digite o ano atual: "));

const idade_atual = Number(ano_atual-data_nascimento);
console.log("Tu tens aproximandamente: "+idade_atual);









/*3*/
let aluno = { 
  nome: "Patrício", 
  idade: 23, 
};
aluno.cidade = "Luanda",
aluno.curso = "Eng.Informática",
console.log(aluno); 


let pessoa = {
  nome: "Nério",
  idade: 23,
  cidade: "Luanda",
  Curso: "Eng.informática",
}
console.log(pessoa);

(pessoa.idade)=24;
(pessoa.cidade)="Benguela";
console.log(pessoa.cidade);


let nome = "NERIO";
console.log(nome)
nome="Patricio";
console.log(nome);