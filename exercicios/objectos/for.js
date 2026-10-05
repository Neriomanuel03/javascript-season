let notas = [10, 20, 16, 13, 12, 9];
let media = 0;
let soma = 0;
let contador = 0;
for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 10) {
    soma = soma + notas[i];
    console.log(soma);
    contador = contador + 1;
  }
  media = soma / contador;
}

console.log(media);
console.log(contador);



/* let notas = [10, 20, 16, 13, 12, 9];
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
console.log(media); */

/* const precos = [1500, 2500, 800, 3200, 1200, 5000];
let contador = 0;
let menor = 0;
let soma = 0;

for (let i = 0; i < precos.length; i++){
  if(precos[i] >= 2000){
    contador++
  }
  
  else if (precos[i] < 2000){
    menor++;
  }
  
  if(precos[i] >= 2000){
    soma = soma + precos[i];
  }
}
  console.log(`maiores de 2000 são : ${contador}`);
  console.log(`menores de 2000 são : ${menor}`);
  console.log(soma); */