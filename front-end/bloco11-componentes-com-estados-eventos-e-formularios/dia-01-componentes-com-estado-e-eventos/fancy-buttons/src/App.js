import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.handleClickOne = this.handleClickOne.bind(this); // escrito para a função estar ligada ao this//
    this.handleClickTwo = this.handleClickTwo.bind(this); // escrito para a função estar ligada ao this//
    this.handleClickThree = this.handleClickThree.bind(this); // escrito para a função estar ligada ao this//
    
    this.state = {
      clickBtnOne: 0,
      clickBtnTwo: 0,
      clickBtnThree: 0,
    };
  }

  // Para alterarmos o estado de um componente, precisamos executar a função this.setState()
  handleClickOne() {
    this.setState((prevState) => ({
      clickBtnOne: prevState.clickBtnOne + 1,
    }));
  }

  handleClickTwo() {
    this.setState((prevState) => ({
      clickBtnTwo: prevState.clickBtnTwo + 1,
    }));
  }

  handleClickThree() {
    this.setState((prevState) => ({
      clickBtnThree: prevState.clickBtnThree + 1,
    }));
  }

  getButtonColor(num) {
    return num % 2 === 0 ? "green" : "red";
  }

  render() {
    const { clickBtnOne, clickBtnTwo, clickBtnThree } = this.state;
    return (
      <div>
        <button
          onClick={this.handleClickOne}
          style={ {backgroundColor: this.getButtonColor(clickBtnOne) } }
        >{`Cliques no botão 1: ${clickBtnOne}`}</button>
        <button
          onClick={this.handleClickTwo}
          style={ { backgroundColor: this.getButtonColor(clickBtnTwo) } }
        >{`Cliques no botão 2: ${clickBtnTwo}`}</button>
        <button
          onClick={this.handleClickThree}
          style={{backgroundColor: this.getButtonColor(clickBtnThree)}}
        >{`Cliques no botão 3: ${clickBtnThree}`}</button>
      </div>
    );
  }
}

export default App;
