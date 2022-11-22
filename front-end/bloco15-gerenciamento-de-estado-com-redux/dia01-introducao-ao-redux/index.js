import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";

const initialState = { count: 0 }

//Criar o reducer
const reducer = (state = initialState, action) => {
  if (action.type === 'incrementCounter') {
    return { count: state.count + 1 }
  }
  return state
};

//Criar o store e passar o reducer
const store = createStore(reducer, composeWithDevTools())

//Vai chamar o reducer e atualizar o estado quando a gente quiser
const action = {
  type: "incrementCounter"
}

const incrmentButton = document.querySelector('button');
incrmentButton.addEventListener('click', () => {
  //aqui quero que o meu store dispare uma açao que vai atualizar o estado  
  store.dispatch(action);
})

store.subscribe(() => {
  const globalState = store.getState();
  const counterElement = document.querySelector('h2');
  counterElement.innerHTML = globalState.count;
})