// // 1 - Observe o código abaixo e responda: qual é a ordem de finalização de execução das linhas comentadas?


// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} está a ${value} ${measurementUnit} de distância do Sol`;

// const MEASUREMENT_UNIT = 'quilômetros';

// const mars = {
//   name: 'Marte',
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// const venus = {
//   name: 'Venus',
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// const jupiter = {
//   name: 'Jupiter',
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

//
//
// 2 - Observe o código abaixo e responda: qual é a ordem de finalização de execução das linhas comentadas?
//
//


// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} está a ${value} ${measurementUnit} de distância do Sol`;

// const MEASUREMENT_UNIT = 'quilômetros';

// const mars = {
//   name: 'Marte',
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// const venus = {
//   name: 'Venus',
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// const jupiter = {
//   name: 'Jupiter',
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A //1
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B // 3
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C // 2

//
//
//
// 3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique a função getPlanet, de forma que Marte seja impresso assincronamente, após 4 segundos.
//
//
// const time = 4000
// const getPlanet = () => {
// setTimeout(() => {
//   const mars = {
//     name: 'Mars',
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: 'kilometers',
//     },
//   }
//   console.log('Returned planet: ', mars);
// }, time);
// };

// getPlanet(); // Imprime Marte depois de 4 segundos.

//
//
// 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. 
// O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature de forma que:
// A função sendMarsTemperature imprima no console o seguinte texto: 
//     "A temperatura de Marte é: temperaturaAtual graus celsius" onde, temperaturaAtual é o valor recebido da função getMarsTemperature; e
// A mensagem deve ser impressa no console depois de no máximo 5 segundos.
// Dica: utilize a função messageDelay para gerar o tempo de espera necessário
//
//
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
  // const temperaturaCorreta = getMarsTemperature();
  setTimeout(() => console.log(`A temperatura de Marte é: ${getMarsTemperature()} graus celsius`), messageDelay());
};

sendMarsTemperature();

// const sendMarsTemperature = () => {
//   const currentTemperature = getMarsTemperature();
//   setTimeout(() => console.log(`A temperatura de Marte é: ${currentTemperature} graus celsius`), messageDelay());
// };

// sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo