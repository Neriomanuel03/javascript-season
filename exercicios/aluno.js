let aluno = {     
nome: (prompt("Digite o seu nome: ")),    
idade: (prompt("Digite a sua idade: ")),
curso: (prompt("Digite o seu curso: ")),

endereço:{
cidade: (prompt("Digite a sua cidade: ")),
},
  
disciplinas: ["Programação", "Base de Dados", "Redes"] 
};  

console.log(aluno);
console.log(aluno.disciplinas.length);

let pergunta = (prompt("Que disciplina deseja verficar?"));
if(aluno.disciplinas.includes(pergunta)){
console.log("A disciplina está na lista!");
}
else{
console.log("A disciplina não está na lista! ");
}

if(aluno.idade >= 18){
console.log("és maior de idade");
}