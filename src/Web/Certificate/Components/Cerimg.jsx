import React, { useState } from 'react'
import style from "./Cerimg.module.css"
import c1 from "../../../assets/c1.jpg"
import c2 from "../../../assets/c2.jpg"
import c3 from "../../../assets/c3.jpg"
import c4 from "../../../assets/c4.jpg"
import c5 from "../../../assets/c5.jpg"
import c6 from "../../../assets/c6.jpg"
import c7 from "../../../assets/c7.jpg"
import { MdOutlineCancel } from "react-icons/md";
const img_data=[
     {
        img:c1
     },
     {
        img:c2
     },
     {
        img:c3
     },
     {
        img:c4
     },
     {
        img:c5
     },
     {
        img:c6
     },
     {
        img:c7
     }
]
export default function Cerimg() {
   const [model,setmodel]=useState(false)
   const [tempimg,settempimg]=useState("")
   const getimg=(img)=>{
      settempimg(img)
      setmodel(true)
   }
  return (
    <div className={style.img_c}>
        <h2 className={style.title}>Certificate Gallery</h2>
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
