import React, { useState } from 'react'
import style from "./Galleryimg.module.css"
import g1 from "../../../assets/g1.jpg"
import g2 from "../../../assets/g2.jpg"
import g3 from "../../../assets/g3.jpg"
import g4 from "../../../assets/g4.jpg"
import g5 from "../../../assets/g5.jpg"
import g6 from "../../../assets/g6.jpg"
import g7 from "../../../assets/g7.jpg"
import g8 from "../../../assets/g8.jpg"
import g9 from "../../../assets/g9.jpg"
import { MdOutlineCancel } from "react-icons/md";
const img_data=[
     {
        img:g1
     },
     {
        img:g2
     },
     {
        img:g3
     },
     {
        img:g4
     },
     {
        img:g5
     },
     {
        img:g6
     },
     {
        img:g7
     },
     {
        img:g8
     },{
        img:g9
     },
]
export default function Galleryimg() {
   const [model,setmodel]=useState(false)
   const [tempimg,settempimg]=useState("")
   const getimg=(img)=>{
      settempimg(img)
      setmodel(true)
   }
  return (
    <div className={style.img_g}>
        <h2 className={style.title}>Imgage Gallery</h2>
        <div className={`${model? style.open: ""} ${style.model}`}>
        <MdOutlineCancel className={style.cancel_icon} onClick={()=>{
         setmodel(false) 
         settempimg("")}}/>
         <img className={style.c_img} src={tempimg}/>
        </div>
        <div className={style.img_show}>
              {img_data.map((item,i)=> 
              <div className={style.pics} key={i} onClick={()=>getimg(item.img)}>
                <img src={item.img} style={{width:"100%"}}/>
              </div>
            )}
        </div>
    </div>
  )
}
