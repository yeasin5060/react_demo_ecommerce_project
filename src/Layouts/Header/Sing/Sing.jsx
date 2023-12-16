import React, { useState } from 'react'
import './Sgin.css'
import Subhead from '../../../Component/Subheading/Subhead'
import Pera from '../../../Component/Pera/Pera'

const Sing = () => {

  let [email , setEmail] = useState({
    email:""
  })
  let handleEmail = (e)=>{
      let{name , value} = e.target
      setEmail({...email,[name]:value})
      console.log(email)
  }
  let emailErr = document.querySelector(".email_err")
  let handleContinue = ()=>{
    console.log(email)
    (input.value = " ") ?
        emailErr.innerHTML = "Email or mobile phone number"
        :(
          emailErr.innerHTML = " "
        )
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
          <form action=''>
            <input className='email' name='email'onChange={handleEmail}/>
            <p className='email_err'></p>
            <button className='continue' onClick={handleContinue}>continue</button>
            <Pera text = "By continuing, you agree to bajar's ." style ="form_pera"/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Sing