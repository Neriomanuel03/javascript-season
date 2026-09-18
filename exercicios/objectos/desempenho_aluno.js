//O objectivo desse exercicio é de comparar a nota do aluno e no final informar se ele teve um bom desempenho ou não!, primeiro exercicio usando objectos

let aluno = {
  nome: "Nério",
  idade: 23,
  nota: 15,
}
if(aluno.nota >= 17 && aluno.nota <=20){
  console.log("Excelente desempenho " +aluno.nome);
}
else if(aluno.nota >=14 && aluno.nota <=16){
    console.log("Tiveste um bom desempenho " +aluno.nome);
}
else{
    console.log("foi um desempenho suficiente, então terás de fazer recuperação" +aluno.nome);
}