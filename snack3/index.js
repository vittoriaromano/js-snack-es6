'use scrict'

//lista di oggetti

const bici = [
    {
        nome: `bici 1`,
        peso: 20,
    },
    {
        nome: `bici 2`,
        peso: 10,
    },
    {
        nome: `bici 3`,
        peso: 25,
    },
    {
        nome: `bici 4`,
        peso: 15,
    }
];

console.log(bici);

const pesoBici = bici.map((bici) =>{
    let { peso } = bici;
    //stampo tutti i pesi
    console.log(peso)
   return peso
});
console.log(pesoBici)

// let min = pesoBici[0];
// let max = pesoBici[0];

// for(let i=0; i = pesoBici.length; i++){
//     if(pesoBici[i] < min){
//         min = pesoBici[i];

//     }else if(pesoBici[i] > max){
//         max = pesoBici[i];
//     }
// }
// console.log('bici leggera' + min)









// const found = bici.findLast((bici) => bici.peso < 20);
// console.log(found)



