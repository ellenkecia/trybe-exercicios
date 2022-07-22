let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0.0;
let maiorNumero = 0;
let numerosImpares = 0;
let menorNumero = 0;
let novoNumeros = [];

console.log(numbers);

for (let index = 0; index < numbers.length; index++) {
  soma += numbers[index];
}
console.log(soma);

// exercicio  03
media = soma / numbers.length;

console.log(media);
// exercicio 04
if (media > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor que 20');
}

for (let index = 0; index < numbers.length; index++) {
  if (maiorNumero < numbers[index]) {
    maiorNumero = numbers[index];
  }
}
console.log(maiorNumero);

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 1) {
    numerosImpares++;
  }

}
if (numerosImpares === 0) {
  console.log('nenhum valor ímpar encontrado');
}
else {
  console.log(numerosImpares);
}

for ( let index = 0; index < numbers.length; index++) {
  if (index == 0) {
    menorNumero = numbers[index];
  }
  if (menorNumero > numbers[index]) {
    menorNumero = numbers[index];
  }
}
console.log(menorNumero);

for (let index = 1; index <= 25; index++) {
  novoNumeros.push(index);
}
console.log(novoNumeros);

for (let index = 0; index < novoNumeros.length; index++) {
  console.log(novoNumeros[index] / 2);
}