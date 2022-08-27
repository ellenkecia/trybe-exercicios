// 1 - Dada uma matriz, transforme em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((acc, curr)=> acc.concat(curr), [])
}

console.log(flatten());


//   Para os exercícios 2, 3 e 4 considere o seguinte array:

  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

//   2 - Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames() {
    return books.reduce((acc, curr)=> `${acc} ${curr.author.name},`,'')
}

console.log(reduceNames())

// 🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

function averageAge() {
    const numerosDeLivros = books.length;
    const somaIdades = books.reduce((soma, livros)=>(
        soma + (livros.releaseYear - livros.author.birthYear)),0);
    return somaIdades / numerosDeLivros;
}
console.log(averageAge())
// 🚀 4- Encontre o livro com o maior nome.

function longestNamedBook() {
    return books.reduce((maiorLivro, livroAtual) => {
      if (livroAtual.name.length > maiorLivro.name.length){
        return livroAtual;
      }
      return maiorLivro;
    });
}

console.log(longestNamedBook())

// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, currWord)=> acc + currWord.split('').reduce((acumulator, currletter)=>{ 
    if (currletter === 'a' || currletter === 'A') return + 1;
    return acumulator
  },0),0)
}
// 🚀 6- Para o próximo exercício você deve criar um novo array de objetos a partir das informações das constantes students e grades, 
// onde cada objeto desse novo array terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição do index 0 
// de grades refere-se ao estudante na posição de index 0 de students. Para resolver este exercício, além de reduce, será necessário utilizar também
//  a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return nameAndAverage = students.map((student, index) => (
    {
    name: student,
    average: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length),
  }
  ));
}