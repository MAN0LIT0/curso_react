import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = "renatinha do grau";

  const upper_name = name.toUpperCase();

  function soma(value1, value2) {
    return value1 + value2;
  }

  const url = "https://via.placeholder.com/200";
  return (
    <div className="App">
      <h1>Testando o JSX</h1>

      <p>Fazendo uma função de soma - Resultado: {soma(6,9)}</p>

      <h2>Colocando uma imagem dinamica</h2>
      <img src={url} alt="minha imagem"/>
      <HelloWorld />

      <SayMyName nome="Marco"/>
      <SayMyName nome="Roberto"/>
      <SayMyName nome={upper_name}/>
      <Pessoa nome={upper_name} idade="21" profissao="Programador" foto={url}/>
    </div>
  );
}

export default App;
