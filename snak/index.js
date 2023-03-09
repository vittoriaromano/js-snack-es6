'use strict'


// `[ ‘Brad Pitt’, ‘Johnny Depp’, ‘Lady Gaga’, ‘Cristiano Ronaldo’, ‘Georgina Rodriguez’, ‘Chiara Ferragni’, ‘Fedez’, ‘George Clooney’, ‘Amal Clooney’, ‘Maneskin’]`



const tavoloVip = [
    {
      nometavolo: 'tavolo VIP',
      nome: 'Brad Pitt',
    //   index: 'posto 1'
    },
    {
      nometavolo: 'tavolo VIP',
      nome: 'Johnny Depp',
    //   index: 'posto 2'
    },
    {
      nometavolo: 'tavolo VIP',
      nome: 'Lady Gaga',
    //   index: 'posto 3'
    },
    {
        nometavolo: 'tavolo VIP',
        nome: 'Cristiano Ronaldo',
        // index: 'posto 4'
    },
    {
        nometavolo: 'tavolo VIP',
        nome: 'Georgina Rodriguez',
        // index: 'posto 5'
    },
    {
        nometavolo: 'tavolo VIP',
        nome: 'Chiara Ferragni',
        // index: 'posto 6'
    },
    {
        nometavolo: 'tavolo VIP',
        nome: 'Fedez',
        // index: 'posto 7'
    },
    {
        nometavolo: 'tavolo VIP',
        nome: 'George Clooney',
        // index: 'posto 8'
    },
    {
        nometavolo: 'tavolo VIP',
        nome: 'JAmal Clooney',
        // index: 'posto 9'
    },
    {
        nometavolo: 'tavolo VIP',
        nome: 'Maneskin',
        // index: 'posto 10'
    },
   
]

console.log(tavoloVip)

tavoloVip.forEach((element,index) => {
    console.log( 'tavolo VIP' + element.nome,(index + 1))
});