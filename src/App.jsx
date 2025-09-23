import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element = {<Home/>}/>       
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
