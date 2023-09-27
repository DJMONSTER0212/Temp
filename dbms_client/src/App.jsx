import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Error from './pages/Error'
import Dashboard from './pages/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/dashboard/:userId" element={<Dashboard/>} />
      <Route exact path="*" element={<Error/>} />
    </Routes>
    </>
  )
}

export default App
