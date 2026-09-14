
/* const data_nascimento = Number(prompt("Digite o ano em q nascaste: "));
const ano_atual = Number(prompt("Digite o ano atual: "));

const idade_atual = Number(ano_atual-data_nascimento);
console.log("Tu tens aproximandamente: "+idade_atual); */



/* nivel 2 calcladora exercicio4
 */
/* let nomes =[12, 15, 18, 10, 14];
 console.log(nomes.length); 
 console.log("A primeira nota é", nomes[0]); 
 console.log("A ultima nota é", nomes[4]); 
nomes++
 console.log("soma: " +soma);  */


 /* let n_1 = Number(prompt("Digite o primeiro numero: ")); 
 let n_2 = Number(prompt("Digite o segundo numero: ")); 
 let soma =  (n_1 + n_2); 
 let multi = (n_1 * n_2); 
 let div = (n_1 / n_2); 
 let sub = (n_1 - n_2); 
 console.log("O primeiro número é: " +n_1); 
 console.log("O segundo número é: " +n_2); 
 console.log("A soma dos dois números da: " +soma); 
 console.log("A multiplic dos dois números da: " +multi); 
 console.log("A divisão dos dois números é: " +div); 
 console.log("A subtração dos dois números da: " +sub);  */
/*  let resto = ((n_1 + n_2) % 2 === 0); */ /* let resto = n_1 % n_2;
 console.log("o resto da divisao dos dois numeros é: " +resto );  */


 Número original: ...
Tipo original: ...
Número convertido: ...
Tipo convertido: ...

const numero = prompt("Digite um numero: "); 
let original = Number(numero); 
console.log("Número original: " +numero ); 
console.log(typeof("tipo original: " +numero)); 
console.log(("numero convertido: " +original)); 
console.log("tipo convertido : " +original);


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
console.log("A disciplina está na lista!");
}
else{
  console.log("A disciplina n está na lista!");
}