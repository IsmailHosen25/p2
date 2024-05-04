import React, { useState } from 'react'
import style from "./Galleryimg.module.css"
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
export default function Galleryimg({img_data,title,btnshow,btnlink}) {
   const [model,setmodel]=useState(false)
   const [tempimg,settempimg]=useState("")
   const getimg=(img)=>{
      settempimg(img)
      setmodel(true)
   }
   const navigate =useNavigate()
  return (
    <div className={style.img_g}>
        <h2 className={style.title}>{title}</h2>
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
        {btnshow? <button className={style.btn} onClick={()=>navigate(btnlink)}>See More</button>:"" }

    </div>
  )
}
