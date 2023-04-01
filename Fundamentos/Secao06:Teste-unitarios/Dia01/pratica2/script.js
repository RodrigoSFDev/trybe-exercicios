const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */
const turno2 = (objeto, chave, valor) => {
    return objeto[chave] = valor;
};
turno2(lesson2, 'turno', 'noite');
/* 
Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */
const keys = (objeto) => Object.keys(objeto);
keys(lesson3);

/* Crie uma função para mostrar o tamanho de um objeto. */
const tamanhoObj = (objeto) => Object.entries(objeto).length;
tamanhoObj(lesson1);

/* Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */
const value = (objeto) => Object.values(objeto);
value(lesson3);

/* Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser... */
const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
/* Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática; */
const contagem = (objeto) => {
const l1 = objeto.lesson1.numeroEstudantes;
const l2 = objeto.lesson2.numeroEstudantes;
const l3 = objeto.lesson3.numeroEstudantes;
return l1 + l2 + l3;
};
contagem(allLessons);
/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. */
const getValueByNumber = (objeto, position) => Object.values(objeto)[position];
getValueByNumber(lesson1, 2);
/* Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. */
const verifyPair = (objeto, chave, valor) => {
    const objeto1 = Object.entries(objeto);
    for ( let index = 0; index < objeto1.length; index += 1) {
       if (objeto1[index][0] === chave && objeto1[index][1] === valor ){
            return true;
       }
    }
    return false;
};
console.log(verifyPair(lesson3, 'turno', 'noite'));
/* Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. */
