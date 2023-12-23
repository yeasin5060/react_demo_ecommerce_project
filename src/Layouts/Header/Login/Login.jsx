import React, { useState } from 'react'
import './Login.css'
import Subhead from '../../../Component/Subheading/Subhead'
import { getDatabase, ref, set,push } from "firebase/database";
import { Link } from 'react-router-dom';


const Login = () => {

    const db = getDatabase();
    let [ userData , setUserData] = useState({
        fristName: "",
        lastName: "",
        email: "",
        password: "",
        conPassword: ""
    })
    let [ erres , setErres] = useState({})
    let hendleForm = (e) =>{
        let { name , value} = e.target;
        setUserData({...userData,[name]:value})
    }
    let logIn = () =>{
        set(push(ref(db,"fromdata")),{
            formData : userData,
        })
        setErres(valition(userData))
    }
    function valition (userData){
        erres = {}
        const email_pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const password_pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.* ).{8,16}$/;

        if(userData.fristName == ""){
            erres.fristName = "Frist name is Required!";
        } else{
            erres.mame = " ";
        }
        if(userData.lastName == ""){
            erres.lastName = "Last name is Required!";
        } else{
            erres.lastName = " ";
        }
        if(userData.email == ""){
            erres.email = "Email is Repuired!"
        }
        else{
            if(!email_pattern.match(userData.email)){
                erres.email = " ";
            }
            else{
                erres.email = "Inter validate Email"
            }
        }
        if(userData.password == ""){
            erres.password = "Password is Repuired!"
        }
        else{
            if(!password_pattern.test(userData.password)){
                erres.password = " ";
            }
            else{
                erres.password = "Inter validate Password"
            }
        }
        if(userData.conPassword == ""){
            erres.conPassword = "Confirm password is Repuired!"
        }
        else{
            if(!userData.conPassword.match(userData.password)){
                erres.conPassword = " ";
            }
            else{
                erres.conPassword = "Don't match Password"
            }
        }

        return erres;
    }
  return (
    <section id='login'>
        <div className='container'>
            <div className='login_logo'>
                <img src="images/bajar_logo.jpg" alt="not found" />
            </div>
            <div className='form'>
                <div className='form_head'>
                    <Subhead text="login" style="login"/>
                </div>
                <div className='input_boxs'>
                    <input className='inputs' name="fristName" type='text' placeholder='enter your firstname' onChange={hendleForm}/>
                   { erres.fristName && <p className='from_err'>{erres.fristName}</p>}    
                </div>
                <div className='input_boxs'>
                    <input className='inputs' name="lastName" type='text' placeholder='enter your lastname' onChange={hendleForm}/>
                    { erres.lastName && <p className='from_err'>{erres.lastName}</p>}
                </div>
                <div className='input_boxs'>
                    <input className='inputs' name="email" type='email' placeholder='email' onChange={hendleForm}/>
                     { erres.email && <p className='from_err'>{erres.email}</p>}
                </div>
                <div className='input_boxs'>
                    <input className='inputs' name="password" type='current-password' placeholder='password' onChange={hendleForm}/>
                    { erres.password && <p className='from_err'>{erres.password}</p>}
                </div>
                <div className='input_boxs'>
                    <input className='inputs' name="conPassword" type='new-password' placeholder='confirm password' onChange={hendleForm}/>
                    { erres.conPassword && <p className='from_err'>{erres.conPassword}</p>}
                </div>
                <div className='form_btn'>
                    <Link to = "">
                        <button className='btn' onClick={logIn}>login</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login