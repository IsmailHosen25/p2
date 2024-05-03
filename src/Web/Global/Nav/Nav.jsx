import React from 'react'
import style from "./Nav.module.css"
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import {logo_name,facebook,instagram,linkedin,twitter} from "../../../Data"
export default function Nav() {
  return (
    <div className={style.nav_com}>
        <div className={style.nav_container}>
            <div className={style.top}>
                <Link to={"/"} className={style.logo}>{logo_name}</Link>
                <div className={style.top_in}>
                    <Link className={style.link1} to={"/about"}>About</Link>
                    <Link className={style.link2} to={"/outline"}>Outline</Link>
                    <Link className={style.link3} to={""} download>CV</Link>
                </div>

            </div>
            <div className={style.link_div}> 
                <h2 className={style.link_title}>Linkes</h2>
                <div className={style.link_div_link}>
                    <Link to={"/certificate"} className={style.link4}>Certificate</Link>
                    <Link to={"/gallery"} className={style.link4}>Gallery</Link>
                    <HashLink className={style.link4}>Service</HashLink>
                </div>

            </div>
            <div className={style.link_div}>
            <h2 className={style.link_title}>Contact</h2>
                <div className={style.link_div_link}>
                    <Link to={facebook} className={style.link4} target='_blanck'>Facebook</Link>
                    <Link to={linkedin} className={style.link4} target='_blanck' >Linkedin</Link>
                    <Link to={twitter} className={style.link4} target='_blanck'>Twitter</Link>
                    <Link to={instagram} className={style.link4} target='_blanck'>Instagram</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
