import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Menu from "./components/Menu"
import Body from './components/Body';



class App extends Component {

  constructor(props) {
    super(props)
    this.toggleDrawerMenu = this.toggleDrawerMenu.bind(this)
    this.toggleDrawerCarrinho = this.toggleDrawerCarrinho.bind(this)
  }


  state = {
    exibirMenu: false,
    exibirCarrinho: false,
    busca: 'teste'
  }

  toggleDrawerMenu = () => {
    this.setState({ ...this.state, exibirMenu: !this.state.exibirMenu });
    console.debug(this.state)
  };

  toggleDrawerCarrinho = () => {
    this.setState({ ...this.state, exibirCarrinho: !this.state.exibirCarrinho});
    console.debug(this.state)
  };


  render() {
    return (
      <div>
        <Header exibirMenu={this.state.exibirMenu} funcaoExibirMenu={this.toggleDrawerMenu} 
                exibirCarrinho={this.state.exibirCarrinho} funcaoExibirCarrinho={this.toggleDrawerCarrinho} />

        <Menu exibirMenu={this.state.exibirMenu} funcaoExibirMenu={this.toggleDrawerCarrinho} />

        <Body></Body>

      </div>
    );
  }
}

export default App;

