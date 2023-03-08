'use strict'
//creare una lista con tutti gli studenti come oggetti

const students = [
    {
        id: 213,
        name: 'MARCO DELLA ROVERE',    //sig
        grade:78,
    },
    {
        id: 110,
        name: 'PAOLA CORTELLESSA',    //sig
        grade:96,
    },
    {
        id: 250,
        name: 'ANDRE MANTEGNA',
        grade:48,
    },
    {
        id: 145,
        name: 'GAIA BORROMINI',        //sig
        grade: 74,
    },
    {
        id: 196,
        name: 'LUIGI FRIMANDELLO',
        grade: 68,
    },
    {
        id: 102,
        name: 'PIETRO DELLA FRANCESCA',
        grade: 50,
    },
    {
        id: 120,
        name: 'FRANCESCA DA POLENTA',     //sig
        grade: 84,
    }
];

console.log(students)

//studenti con piu di 70
const studentsGrade = students.filter((element) => element.grade > 70);
console.log(studentsGrade)

//studenti con id maggiore di 120
const studentsId = students.filter((element) => element.id > 120);

//studenti con piu di 70 a id maggiore a 120
const studentsIdGrade = studentsId.filter((data) => studentsGrade.includes(data));
console.log(studentsIdGrade)

