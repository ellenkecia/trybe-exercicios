// Fixação forEach

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
emailListInData.forEach(showEmailList);

// Fixação Array.find
// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find((number)=> number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5())


// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => names.find((name)=> name.length === 5);

console.log(findNameWithFiveLetters());

// 3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic (id) {
     return musicas.find((musica) => musica.id === id);
  }
  
  console.log(findMusic('31031685'))

// Fixação some e every
// 1 - Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. 
// Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. 
// Caso não esteja contido, deve retornar false.

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return arr.some((nomeRecebido )=> nomeRecebido === name)
}

console.log(hasName(names2, 'Ana'))

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true 
// se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((person)=> person.age >= minimumAge);
  }
  
  console.log(verifyAges(people, 18));

//   Fixação Array.sort
// 1 - Utilize sort para ordenar o array pela idade das pessoas em ordem crescente.

const people2 = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
people2.sort((a,b) => a.age > b.age ? 1 : -1);

console.log(people2);

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.
// Solução: Inverter o sinal do sort