import { useState } from 'react'
import './App.css'
import Carteira from './components/Carteira'
import Roleta from './components/Roleta'

function App() {
  const [saldo, setSaldo] = useState(0)

  return (
    <>
      <div className="card">
        <h1>Kapivarinha da alegria</h1>
        <Carteira saldo={saldo} setSaldo={setSaldo} />
        <Roleta saldo={saldo} setSaldo={setSaldo} />
      </div>
      <p className="obs">
        Acerte 4 números iguais e ganhe 10x o valor da aposta
      </p>
    </>
  )
}

export default App
