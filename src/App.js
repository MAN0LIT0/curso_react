import './App.css';

function App() {
  const name = "marco";

  const upper_name = name.toUpperCase();

  function soma(value1, value2) {
    return value1 + value2;
  }

  const url = "https://via.placeholder.com/500";
  return (
    <div className="App">
      <h1>Testando o JSX</h1>

      <h3>Olá {upper_name}!</h3>

      <p>Fazendo uma função de soma - Resultado: {soma(6,9)}</p>

      <h2>Colocando uma imagem dinamica</h2>
      <img src={url} alt="minha imagem"/>
    </div>
  );
}

export default App;
