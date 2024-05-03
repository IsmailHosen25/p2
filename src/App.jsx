import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Web/Home/Home'
import About from './Web/About/About'
import Outline from './Web/Outline/Outline'
import Gallery from './Web/Gallery/Gallery'
import Certificate from "./Web/Certificate/Certificate"
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/outline' element={<Outline/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/Certificate' element={<Certificate/>}/>
    </Routes>
      
    </>
  )
}

export default App
