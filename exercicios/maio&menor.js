//exercicio com interação com o usuario, ele informa um numero e o programa compara qual é o maior

const n_1 = Number(prompt("Digite um número: "));
const n_2= Number(prompt("Digite o segundo número: "));

if (n_1 < n_2){
    console.log("O maior numero é o: " +n_2);
} else{
        console.log("O maior numero é o: " +n_1);

}
