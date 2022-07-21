let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0.0;

console.log(numbers);

for (let index = 0; index < numbers.length; index++) {
  soma += numbers[index];
}
console.log(soma);

  media = soma/numbers.length;

  console.log(media);

  if (media>20) {
    console.log('valor maior que 20');
  } else {
    console.log ('valor menor que 20')
  }