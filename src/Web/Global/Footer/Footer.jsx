import React from 'react'
import style from "./Footer.module.css"
import { Link } from 'react-router-dom'
import {logo_name,facebook,instagram,linkedin,twitter} from "../../../Data"
export default function Footer() {
  return (
    <div>
        <div className={style.link_div}>
            <h2 className={style.link_title}>Contact</h2>
            <div className={style.link_div_link}>
                    <Link to={facebook} className={style.link4} target='_blanck'>Facebook</Link>
                    <Link to={linkedin} className={style.link4} target='_blanck' >Linkedin</Link>
                    <Link to={twitter} className={style.link4} target='_blanck'>Twitter</Link>
                    <Link to={instagram} className={style.link4} target='_blanck'>Instagram</Link>
            </div>
        </div>
        <div className={style.copyright}>
           <h3 className={style.h3}>{logo_name} Made by <Link to={""} target='_black' className={style.ourlink}>io-tech</Link></h3>
           <p className={style.p}>&copy; 2024</p>
        </div>
    </div>
  )
}
