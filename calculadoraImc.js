let rs = require('readline-sync')
let peso = rs.questionFloat("Por favor, Digite o seu peso em Kg. ")
let altura = rs.questionFloat("Por favor, Digite a sua altura em M. ")

let imc = peso / (altura  * altura)
console.log("seu imc é " + imc)

if (imc < 18.5)
    console.log("Você está abaixo do peso, considera-se Imc abaixo de 18,5 como magreza");
else  if (imc >= 18.5 && imc < 24.9)
    console.log("Voce está saudável, considera-se Imc entre  18,5 e 24,9 como normal");
else if (imc > 25 && imc < 29.9)
    console.log("Atenção!! considera-se Imc entre  25 e 29,9 como sobrepeso I.");
else if (imc > 30 && imc < 39.9)
    console.log("Atenção!! considera-se Imc entre  30 e 34,9 como Obesidade II");
else if (imc >= 40)
    console.log("Atenção!! considera-se Imc 40 OU MAIOR como Obesidade III");
