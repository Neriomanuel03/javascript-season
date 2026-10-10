let notas = [10, 20, 16, 13, 12, 9];
let apto = 0;
let reprov = 0;
let soma = 0;
let media = 0;

for(let i = 0; i < notas.length; i++){
  if(notas[i] >= 10){     
	apto = apto + 1;
  }
	else{
    reprov = reprov + 1;
  }
  
  soma = soma + apto
  
  media = soma / notas[i]
}
console.log(`Apto: ${apto}`);

console.log(`Reprovado: ${reprov}`);

console.log(soma);
console.log(media);