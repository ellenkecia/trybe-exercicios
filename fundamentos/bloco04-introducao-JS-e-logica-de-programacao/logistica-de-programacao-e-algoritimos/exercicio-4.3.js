// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let resultadoFatorial = 1;

for (let index = 10; index > 0; index--) {
  resultadoFatorial = resultadoFatorial * index;
}
console.log(resultadoFatorial);


// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertidagi para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
// let word = 'tryber';

let word = 'tryber';
let palavraInvertida = '';

for (let index = word.length - 1; index >= 0; index--) {
  palavraInvertida = palavraInvertida + word[index];
}

console.log(palavraInvertida);


// 3- Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';
let menorPalavra = '';

for (let index = 0; index < array.length; index++) {
    if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  } 
}
console.log (maiorPalavra);

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.





