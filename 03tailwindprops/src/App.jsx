import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("black")

  return (
  
 <div className={`min-h-screen  flex items-center justify-center`} style={{ backgroundColor: color }}>
      
      <button className='bg-blue-500 text-white px-4 py-2 mr-2 rounded border border-black-600  ' onClick={() => setcolor("blue")}>Blue</button>
      <button className='bg-green-500 text-white px-4 py-2 mr-2 rounded border border-green-600' onClick={() => setcolor("green")}>Green</button>
      <button className='bg-red-500 text-white px-4 py-2 mr-2 rounded border border-red-600' onClick={() => setcolor("red")}>Red</button>
    </div>
  )
}

export default App
