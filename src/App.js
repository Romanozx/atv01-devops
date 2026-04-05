import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

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

        {/* CONTADOR */}
        <h2>{count}</h2>
        <div>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>
            -
          </button>
        </div>

        <br />

        <a
          className="App-link"
          href="https://github.com/Romanozx"
          target="_blank"
          rel="noopener noreferrer"
        a>
          Ver Repositório no GitHub
        </a>
      </header>
    </div>
  );
}

export default App;