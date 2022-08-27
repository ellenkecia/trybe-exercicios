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


//   🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map
const newbooks = books.map((dadosLivros) =>`${dadosLivros.name} - ${dadosLivros.genre} - ${dadosLivros.author.name}`);
console.log(newbooks)

// 🚀 2 - Construa um array de objetos a partir do array de livros. 
// Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. 
// O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map, sort

const books2 = books.map((dadosLivros)=> (
  {
    author: dadosLivros.author.name,
    age: dadosLivros.releaseYear - dadosLivros.author.birthYear,
  })).sort((a , b) => a.age - b.age)

console.log(books2);

// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;

const genreFictionOrFantasy = books.filter((genreFilter) => genreFilter.genre === 'Ficção Científica' || genreFilter.genre === 'Fantasia');
console.log(genreFictionOrFantasy);

// 🚀 4 - Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
// Dica: use as funções filter e sort

// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

// 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.
