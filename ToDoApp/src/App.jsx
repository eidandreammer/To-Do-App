import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import Nav from './assets/components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Nav/>
    </>
  )
}

export default App
