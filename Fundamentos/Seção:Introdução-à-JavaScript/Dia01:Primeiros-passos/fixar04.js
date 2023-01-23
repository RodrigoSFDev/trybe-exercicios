const currentHour = 3;
let messege = '';
if (currentHour >= 22){
    messege = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >=18 && currentHour < 22){
    messege = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18){
    messege = 'Vamos fazer um bolo pro café da tarde?';
} else if(currentHour >= 11 && currentHour < 14) {
    messege = 'Hora do almoço!!!';
} else if (currentHour >=4 && currentHour < 11){
    messege = 'Hmmm, cheiro de café recém-passado';
}
console.log(messege);