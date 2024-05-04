import React,{useEffect} from 'react'
import style from "./Home.module.css"
import Nav from '../Global/Nav/Nav'
import ResponsNav from '../Global/ResponsNav/ResponsNav'
import Footer from '../Global/Footer/Footer'
import HomeHeader from './Components/HomeHeader'
import Experience from "./Components/Experience"
import Myservice from "./Components/Myservice"
import Contact from '../Global/Contact/Contact'
export default function Home() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
  return (
    <div className={style.layout}>
        <div className={style.nav}>
             <Nav/>
        </div>
        <ResponsNav/>
        <div className={style.main}>
          <HomeHeader/>
          <Experience/>
          <div id="service"><Myservice/></div>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}
