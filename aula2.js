// Variavel tipo number (Integer, Decimal ou Float)
const numero = 10;

console.log(typeof numero);

// Variavel do tipo string
const palavra = 'Alguma palavra';

console.log(typeof palavra);

// Variavel do tipo Array
const banda = [
    'Vocalista',
    'Baixista',
    'Gutarrista',
    'Baterista',
];

console.log(typeof banda);
console.log(banda.length);

const numeros = [1, 2, 3, 4, 5];

console.log(typeof numeros);
console.log(numeros.length);

// Exemplo com FOR
console.log('Exemplo com FOR');

for (let contador = 0; contador < banda.length; contador++) {
    console.log('Função na banda: ' + banda[contador]);
}

// Exemplo com WHILE
console.log('Exemplo com WHILE');
let contadorAleatorio = 0;

while (contadorAleatorio < banda.length) {
    console.log('Função na banda: ' + banda[contadorAleatorio]);
    
    //Soma um a mais no contador2
    contadorAleatorio++;
}
