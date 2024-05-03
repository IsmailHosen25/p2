import React from "react";
import style from "./Contact.module.css";
import { FaLocationDot,FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useFormik } from "formik";

const details=[{
    icon:<FaLocationDot/>,
    title:"Address",
    value:"Jogonathpur,Dhaka,Bangladesh",
    class:style.item1
},{
    icon:<MdEmail/>,
    title:"Email",
    value:"ismailhosen@gmail.com",
    class:style.item2
},{
    icon:<FaPhoneFlip/>,
    title:"Phone",
    value:"01789828149",
    class:style.item3
}]

export default function Contact() {
    const {values,handleChange,handleBlur,errors,handleSubmit,touched}=useFormik({
        initialValues:{
           name:"",
           email:"",
           phone:"",
           subject:"",
           message:""

        }
        ,onSubmit:(values)=>{
            console.log(values)
        //  emailjs.sendForm(keys.serviceKey, keys.contecttemplatekey, form.current, keys.publiceKey)
        alert("Submitted Successfully")
        window.location.reload(false)
      
        }
     })
  return (
    <div className={style.contact_com}>
      <div className={style.top}>
        <h1 className={style.sec_title}>Contact Me</h1>
        <h3 className={style.sec_desc}>I want to Hear from you</h3>
        <p className={style.sec_desc2}>
          Please fill out the form on this section to contact with me. or Call
          between 9:00am to 8:00pm.Et, Monday through Friday
        </p>
      </div>
      <div className={style.bottom}>
          <div className={style.data_items}>
            {details.map((item,i)=> <div key={i} className={`${style.item} `}>
                 <div className={item.class}>{item.icon}</div>
                 <div>
                    <h2 className={style.item_title}>{item.title}</h2>
                    <p className={style.item_value}>{item.value}</p>
                 </div>
             </div>)}
          </div>
            <form className={style.form} onSubmit={handleSubmit}>
              <div className={style.row}>
                <div className={style.col}>
                  <input
                    type="text"
                    name="name"
                    className={style.form_control}
                    placeholder="Your Name"
                    required
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={style.col}>
                  <input
                    type="email"
                    name="email"
                    className={style.form_control}
                    placeholder="Your Email"
                    required
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={style.row}>
                <div className={style.col}>
                  <input
                    type="number"
                    name="phone"
                    className={style.form_control}
                    placeholder="Your Phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className={style.col}>
                  <input
                    type="text"
                    name="subject"
                    className={style.form_control}
                    placeholder="Subject"
                    value={values.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <textarea className={style.textarea} name="message" value={values.message} onChange={handleChange} placeholder="Write Your message here ..."/>
              <input type="submit" value="Submit Now" className={style.submit}/>
            </form>
        </div>
      </div>
  );
}
