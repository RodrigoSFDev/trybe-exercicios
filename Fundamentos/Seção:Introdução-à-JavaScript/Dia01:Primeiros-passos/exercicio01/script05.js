const a = 50;
const b = 80;
const c = -20;
let soma = a + b + c
if(soma === 180){
console.log(true);
} else if(a < 0 || b < 0 || c < 0){
console.log('valor invalido');
} else{
console.log(false);
}