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
