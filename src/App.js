import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App text-center">
      <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formulario></Formulario>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
