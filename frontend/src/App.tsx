import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form action="" method="post">
        <input type="text" name="" id="" placeholder='Nome' />
        <input type="text" name="" id="" placeholder='Descrição' />
        <input type="number" name="" id="" placeholder='Preço' step='0.01' />
        <button type="submit">Salvar</button>
      </form>

    </>
  )
}

export default App
