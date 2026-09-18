//nivel 2 calcladora exercicio, o usuario informa dois numeros, o programa faz os calculos de cada operacao matematica e no final mostra o resto
 let n_1 = Number(prompt("Digite o primeiro numero: ")); 
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
 console.log("A subtração dos dois números da: " +sub);  
 
 let resto = n_1 % n_2;
 console.log("o resto da divisao dos dois numeros é: " +resto );