import React, { useState } from 'react'
import './Sgin.css'
import Subhead from '../../../Component/Subheading/Subhead'
import Pera from '../../../Component/Pera/Pera'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword , signOut } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux'
import { customers } from '../../../userslice'
import { useNavigate } from "react-router-dom";
import amazon_logo from '../../../images/Amazon-Logo.png';

const Sing = () => {

  const auth = getAuth();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  let [sginData , setSginData] = useState({
    email:"",
    password : ""
  })
  let handleEmail = (e)=>{
      let{name , value} = e.target
      setSginData({...sginData,[name]:value})
  }
  let heandleContinues = () => {
    setSginerr(sginvalidation(sginData))
      signInWithEmailAndPassword(auth, sginData.email, sginData.password)
        .then((userCredential) => {
          if(userCredential.user.emailVerified){
            localStorage.setItem("cutomerdata" , JSON.stringify(userCredential.user))
            dispatch(customers(userCredential.user))
            console.log(userCredential)
            navigate("/")
          }else{
            signOut(auth).then(() => {
              setSginerr({email:"Verify your email"});
            });
          }
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode == "auth/invalid-credential"){
          setSginerr({email:"Login your email"});
        }else{
          sginerr.email = " ";
        }
      });
  

  }
  let Create = () =>{
    console.log("the number one button is a bokchod ")
  }

  let [ sginerr , setSginerr] = useState({})

  function sginvalidation (sginData){

    sginerr = {}

      //email regex
    let email_pattern = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

            //email validation
    if(sginData.email == "" ){
      sginerr.email = "Email is Repuired!";
    }else{
      if(email_pattern.test(sginData.email)){
        sginerr.email = "";
      }
      else{
        sginerr.email = "Inter validate Email";
      }
    }

        //password validation
    if(sginData.password == ""){
      sginerr.password = "Password is Required!";
    }
    else{
      sginerr.password = "";
    }
    return sginerr;
  }

  return (
    <section id='sgin'>
      <div className='container'>
        <div className='sgin_logo'>
            <img src={amazon_logo} alt="not found" />
        </div>
        <div className='sgin_container'>
          <Subhead text="Sign in" style="sgin_head"/>
          <label className='a_form_label'>Email or mobile phone number</label>
          <div>
            <div className='sgin_input_email_box'>
              <input className='sgin_emails' name='email' type='email' placeholder='inter your email' onChange={handleEmail}/>
              { sginerr.email && <p className='sgin_err'>{sginerr.email}</p>}
            </div>
            <div className='sgin_input_password_box'>
              <input className='sgin_password' name='password' type='password' placeholder='inter your password' onChange={handleEmail}/>
              { sginerr.password && <p className='sgin_err'>{sginerr.password}</p>}
            </div>
              <button className='continues' onClick={heandleContinues}>continues</button>
            <Pera text = "By continuing, you agree to amazon's ." style ="form_pera"/>
          </div>
          <Pera text="Buying for work?" style="work"/>
          <Link className='shopon' to ="shopon">Shop on amazon Business</Link>
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