import "./App.css";
import React from "react";




class App extends React.Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this) // escrito para a função estar ligada ao this//
  }

  handleClick() {
    console.log("Clicou no botão!");
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>Botão</button>
        <button onClick={ this.handleClick }>Botão 2</button>
        <button onClick={ this.handleClick }>Botão 3</button>
      </div>
    );
  }
}

export default App;
