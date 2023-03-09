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

//lista peso degli oggetti

const pesoBici = bici.map((bici) =>{
    let { peso } = bici;
   return peso
});
console.log(pesoBici)

// peso oggetto piu leggero
console.log(Math.min(...pesoBici));




