// Exercicio 1 criar um Array de uma casa, 
// contendo dentro deles os nomes dos comodos da casa
// Percorra esse array e printe os comodos que foram criados com a função FOR
const comodos = [
    'Quarto',
    'Cozinha',
    'Sala',
    'Banheiro '
]

for (let quantidade = 0; quantidade < comodos.length; quantidade++) {
    console.log('lugar da casa: ' + comodos[quantidade]);
}



// Exercicio 2 criar um Array de idades de 1 a 15 , 
// contendo dentro deles as idades de alguém(1,2,3,4...at;e 15)
// Percorra esse array e printe as idades que foram criados com a função While

const idades = [
    'Hugo', 'idade 1 anos',
    'Fernando', 'idade 2 anos',
    'Lucas', 'idade 3 anos',
    'Theo', 'idade 4 anos',
    'Heloisa', 'idade 5 anos',
    'Gabriel', 'idade 6 anos',
    'Matheus', 'idade 7 ano',
    'João', 'idade 8 anos',
    'Paulo', 'idade 9 anos',
    'Caroline', 'idade 10 anos',
    'Maria', 'idade 11 anos ',
    'Jorge', 'idade 12 anos',
    'Isabela', 'idade 13 anos',
    'Julia', 'idade 14 anos',
    'Victor', 'idade 15 anos',
]
let pos = 0
while (pos < idades.length) {
    console.log(idades[pos])
    pos++
}


//----------------------------------------------------------------------------

function  parimpar(n) {
    if(n%2 == 0){
        return 'par!'
    }
    else{ return 'impar!'
    }
}
 let  res = parimpar (240)
 console.log(res)