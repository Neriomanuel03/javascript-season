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
