import './App.css';
const func = () => {
  return console.log('Alguma coisa');
}
const func1 = () => {
  return console.log('Qualquer coisa');
}
const func2 = () => {
  return console.log('Sei lá');
}
function App() {
  return (
  <div className="App">
    <button onClick={func}>1</button>
    <button onClick={func1}>2</button>
    <button onClick={func2}>3</button>
  </div>
  );
}

export default App;
