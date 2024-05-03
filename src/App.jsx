import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Web/Home/Home'
import About from './Web/About/About'
import Outline from './Web/Outline/Outline'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/outline' element={<Outline/>}/>
    </Routes>
      
    </>
  )
}

export default App
