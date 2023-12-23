import React, { useState } from 'react'
import './Sgin.css'
import Subhead from '../../../Component/Subheading/Subhead'
import Pera from '../../../Component/Pera/Pera'
import { Link } from 'react-router-dom'
import { getDatabase, ref, set,push } from "firebase/database";

const Sing = () => {

  const db = getDatabase();
  let [emailData , setEmailData] = useState({
    email:"",
  })
  let handleEmail = (e)=>{
      let{name , value} = e.target
      setEmailData({...emailData,[name]:value})
  }
  let Email = document.querySelector(".emails")
  let heandleContinues = () => {
    set(push(ref(db,"fromdata")),{
      fromData : emailData,
    })
    Email.value = " ";
  }
  let Create = () =>{
    console.log("the number one button is a bokchod ")
  }

  return (
    <section id='sgin'>
      <div className='container'>
        <div className='sgin_logo'>
            <img src="images/bajar_logo.jpg" alt="not found" />
        </div>
        <div className='sgin_container'>
          <Subhead text="Sign in" style="sgin_head"/>
          <label className='a_form_label'>Email or mobile phone number</label>
          <div>
            <input className='emails' name='email' placeholder='inter your email' onChange={handleEmail}/>
            <Link to = "/">
              <button className='continues' onClick={heandleContinues}>continues</button>
            </Link>
            <Pera text = "By continuing, you agree to bajar's ." style ="form_pera"/>
          </div>
          <Pera text="Buying for work?" style="work"/>
          <Link className='shopon' to ="shopon">Shop on bajar Business</Link>
        </div>
        <div className='bajarnew'>
          <Pera text="New to bajar?" style="new"/>
        </div>
        <div className='create_btn'>
          <button className='create' onClick={Create}>create your bajar account </button>
        </div>
      </div>
    </section>
  )
}

export default Sing