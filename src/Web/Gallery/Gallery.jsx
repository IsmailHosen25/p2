import React,{useEffect} from 'react'
import style from "./Gallery.module.css"
import Nav from '../Global/Nav/Nav'
import ResponsNav from '../Global/ResponsNav/ResponsNav'
import Footer from '../Global/Footer/Footer'
import Contact from '../Global/Contact/Contact'
import Galleryimg from './Components/Galleryimg'
export default function Gallery() {
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
           <Galleryimg/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}