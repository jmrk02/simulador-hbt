import './App.css';
import Simulador from './components/Simulador/Simulador';
import Animacion from './components/Ano/Animacion'
import Mes from './components/Mes/Mes';
function App() {
  return (
    <div className="App">
      <Simulador/>
      <br/>
      <Animacion/>
      <Mes/>
    </div>
  );
}

export default App;
