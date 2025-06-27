import { useState } from 'react'
import './App.css'
import { Sidebar } from './component/Sidebar/Sidebar'
import Main from './component/main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Sidebar/>
    <Main/>
   </>
  )
}

export default App
