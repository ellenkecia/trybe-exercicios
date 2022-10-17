import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe o campo Email', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});


//Como foi inserido mais um botão, a função abaixo já não funciona
// test('Verificando se existe um botão', () => {
//   render(<App/>)
//   const btn = screen.getByRole('button');
//   expect(btn).toBeInTheDocument();
// });
test('Verificando se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});
