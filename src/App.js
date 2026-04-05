import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Atividade 01 - DevOps</h1>
        <p>
          Este projeto demonstra o fluxo de versionamento <strong>Git Flow</strong>.
        </p>
        <p>
          Ambiente atual: <code>Desenvolvimento</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/seu-usuario" // Troque pelo seu link
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Repositório no GitHub
        </a>
      </header>
    </div>
  );
}

export default App;