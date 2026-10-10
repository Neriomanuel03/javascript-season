const precos = [1500, 2500, 800, 3200, 1200, 5000];
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
  console.log(soma);