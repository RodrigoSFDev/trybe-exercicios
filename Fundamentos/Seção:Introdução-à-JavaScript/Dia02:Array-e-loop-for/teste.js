/* let fatorial1 = 1
for( let index = 1; index <= 10; index += 1){
    fatorial1 *= index
}
console.log(fatorial1); */


/* 1. Encontre o index através do valor de um elemento
Primeiramente divida seu problema em partes e só depois disso comece a codar.

Escreva um algoritmo que recebe 2 parâmetros:

Um array contendo um conjunto de números
O valor de um desses elementos
Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.

Caso não o encontre, imprima:

"Elemento não encontrado no array" */
let numeros = [1, 2, 3, 4, 5];
let valor = 5;
let comparacao = null;

for( let index =0; index < numeros.length; index+= 1 ){
    comparacao += valor === numeros[index];
}
console.log(comparacao);











