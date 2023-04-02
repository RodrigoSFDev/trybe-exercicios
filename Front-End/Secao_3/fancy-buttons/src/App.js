import React from 'react'
import './App.css';

export default class App extends React.Component {
  func = () => {
    console.log('Alguma coisa');
  }
  func1 = () => {
    console.log('Qualquer coisa');
  }
  func2 = () => {
    console.log('Sei lá');
  }
  render() {
    
    return (
    <div className="App">
      <button onClick={this.func}>1</button>
      <button onClick={this.func1}>2</button>
      <button onClick={this.func2}>3</button>
    </div>
    );
  }
}
