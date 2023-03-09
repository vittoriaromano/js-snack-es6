'use strict'
//FUNZIONE

//numeri random per punti e falli
function getRandomInt(max) {
    return Math.floor(Math.random() * 10);
}
getRandomInt()
  
//MAIN
//lista teams

const footballTeams = [
    {
        nome: 'Team1',
        punti: getRandomInt(),
        falli: getRandomInt(),
    },
    {
        nome: 'Team2',
        punti: getRandomInt(),
        falli: getRandomInt(),
    },
    {
        nome: 'Team1',
        punti: getRandomInt(),
        falli: getRandomInt(),
    }
]

console.log(footballTeams)

//lista solo nome e falli
const footballTeamsFalli = footballTeams.map((footballTeams) => {
    let { nome, falli } = footballTeams;
    return (nome, falli)
})

console.log(footballTeamsFalli)