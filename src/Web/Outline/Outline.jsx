import style from "./Outline.module.css"
import React,{useEffect} from 'react'
import Nav from '../Global/Nav/Nav'
import ResponsNav from '../Global/ResponsNav/ResponsNav'
import Footer from '../Global/Footer/Footer'
import Contact from '../Global/Contact/Contact'
import Projectshowcase from "./Components/Projectshowcase"
export default function Outline() {
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
          <Projectshowcase/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}