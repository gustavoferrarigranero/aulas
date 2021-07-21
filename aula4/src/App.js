import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import ComponenteTexto from './components/ComponenteTexto'
import Botao from './components/Botao'

function App() {

  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState()

  function efetuaSoma() {
    setResultado(numero1 + numero2)
  }

  function efetuaSubtracao() {
    setResultado(numero1 - numero2)
  }

  return (
    <div className="App">
      <ComponenteTexto onChange={(e) => setNumero1(parseInt(e.target.value))} />
      <br />
      +
      <br />
      <ComponenteTexto onChange={(e) => setNumero2(parseInt(e.target.value))} />
      <br />
      <br />
      <Botao onClick={function(e) {
        efetuaSoma()
      }}>
        SOMAR!
      </Botao>
      <br />
      <br />
      <br />
      <Botao onClick={function(e) {
        efetuaSubtracao()
      }}>
        SUBTRAIR!
      </Botao>
      <br />
      <br />
      <br />
      Resultado: {resultado}
    </div>
  );
}

export default App;
