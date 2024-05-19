import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-400 p-3 rounded-md'>Vite with tailwind</h1>
      <Card username="Kayla" jobTitle="Mummy" />
      <Card username="Fin" jobTitle="Spiderman" />
      <Card />
      <Card username="Kyle" jobTitle="Daddy"/>
      <Card username="Cooper" jobTitle="Security"/>
      <Card username="Zuma" jobTitle="Anxiety Friend"/>
    </>
  )
}

export default App
