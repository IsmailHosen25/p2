import React from 'react'
import style from "./Footer.module.css"
import { Link } from 'react-router-dom'
import { logo_name } from '../../../Data'
export default function Footer() {
  return (
    <div>
        <div className={style.link_div}>
            <h2 className={style.link_title}>Contact</h2>
            <div className={style.link_div_link}>
                    <Link to={""} className={style.link4}>Facebook</Link>
                    <Link to={""} className={style.link4}>Linkedin</Link>
                    <Link to={""} className={style.link4}>Twitter</Link>
                    <Link to={""} className={style.link4}>Instagram</Link>
            </div>
        </div>
        <div className={style.copyright}>
           <h3 className={style.h3}>{logo_name} Made by <Link to={""} target='_black' className={style.ourlink}>io-tech</Link></h3>
           <p className={style.p}>&copy; 2024</p>
        </div>
    </div>
  )
}
