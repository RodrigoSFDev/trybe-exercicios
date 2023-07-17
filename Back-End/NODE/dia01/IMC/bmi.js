const readline = require('readline-sync');
const imc = (peso, altura) => console.log(peso / (altura * altura));
const peso = readline.questionFloat('Qual o seu peso? (kg) ');
const altura = readline.questionFloat('Qual a sua altura? (m) ');
imc(peso, altura);
