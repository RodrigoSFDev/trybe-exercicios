/* Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.
 */
/* Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo. */

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
let melhorDoMundo = [2006, 2007, 2008, 2009, 2010, 2018];

let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : { golden: 2, silver: 3 },
    melhorDoMundo : [2006, 2007, 2008, 2009, 2010, 2018],
}
console.log('A jogadora', player.name, player.lastName,'tem',player.age, 'anos de idade.');
/* Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”. */
console.log('A jogadora', player.name, player.lastName, 'foi eleita a melhor do mundo por',player.melhorDoMundo.length, 'vezes.')