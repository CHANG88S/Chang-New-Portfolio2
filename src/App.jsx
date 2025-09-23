import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Navbar } from './components/Navbar'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path= "*" element = {<NotFound/>}/>          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
