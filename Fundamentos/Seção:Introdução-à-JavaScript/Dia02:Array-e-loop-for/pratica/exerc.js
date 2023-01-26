let fruits = [3, 4, 10, 1, 12];
//Utilizando o array abaixo, percorra-o somando todos os valores. 
//Caso o valor final seja maior que 15, imprima-o.
//Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:
let soma = 0;
for( let index = 0; index < fruits.length; index = index +1){
    soma = soma + fruits[index];
}
if( soma > 15){
    console.log(soma);
} else {
    console.log('valor menor que 16.')
}


let resultado = 0;
for (let index = 1; index <= 100; index += 1) {
  resultado += index;
};
console.log(resultado);
