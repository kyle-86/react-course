import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0)
  
  const addValue = () => {
    setCounter((prevCounter) => prevCounter +1 )
    setCounter((prevCounter) => prevCounter +1 )
    setCounter((prevCounter) => prevCounter +1 )
    setCounter((prevCounter) => prevCounter +1 )
  }
  const minusValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>React Counter</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Increase +</button> {"  "}
      <button onClick={minusValue}>Decrease -</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
