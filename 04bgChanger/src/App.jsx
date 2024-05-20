import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('orange')

  return (
    <div className="w-screen h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-cyan-800 px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor('red')} className='outline-none font-bold px-4 py-1 rounded-full shadow-lg bg-white text-red-800'>Red</button>
        <button onClick={() => setColor('blue')} className='outline-none font-bold px-4 py-1 rounded-full shadow-lg bg-white text-blue-800'>Blue</button>
        <button onClick={() => setColor('green')} className='outline-none font-bold px-4 py-1 rounded-full shadow-lg bg-white text-green-800'>Green</button>
        <button onClick={() => setColor('yellow')} className='outline-none font-bold px-4 py-1 rounded-full shadow-lg bg-white text-yellow-300'>Yellow</button>
        <button onClick={() => setColor('teal')} className='outline-none font-bold px-4 py-1 rounded-full shadow-lg bg-white text-teal-500'>Teal</button>
        <button onClick={() => setColor('purple')} className='outline-none font-bold px-4 py-1 rounded-full shadow-lg bg-white text-purple-800'>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
