import React, { useState } from 'react'
import './Login.css'
import Subhead from '../../../Component/Subheading/Subhead'
import { getDatabase, ref, set,push } from "firebase/database";
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification ,updateProfile } from "firebase/auth";


const Login = () => {

    const auth = getAuth();
    const db = getDatabase();
    let [ userData , setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        conPassword: ""
    })

    let hendleForm = (e) =>{
        let { name , value} = e.target;
        setUserData({...userData,[name]:value})
    }
    let logIn = () =>{
        setErres(valition(userData))
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then((userCredential) => {
                sendEmailVerification(auth.currentUser)
                    console.log(userCredential)
                .then(() => {
                    updateProfile(auth.currentUser, {
                        displayName: userData.firstName,
                        photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                        set(ref(db ,"customerdata/" + userCredential.user.uid),{
                          customerName : userCredential.user.displayName,
                          customerEmail : userCredential.user.email,
                          customerPhoto : userCredential.user.photoURL
                        })
                    })
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                if(errorCode == "auth/invalid-credential"){
                    setErres({email:"Signin your email"});
                  }else{
                    erres.email = " ";
                  }
                // ..
            });
    }
    let [ erres , setErres] = useState({})

                //validation
    function valition (userData){
        erres = {}
        let email_pattern = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

        let password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
        
                //first name
        if(userData.fristName == ""){
            erres.firstName = "Frist name is Required!";
        } else{
            erres.mame = " ";
        }

                    //last name
        if(userData.lastName == ""){
            erres.lastName = "Last name is Required!";
        } else{
            erres.lastName = " ";
        }

                    //email
        if(userData.email == ""){
            erres.email = "Email is Repuired!"
        }
        else{
            if(email_pattern.test(userData.email)){
                erres.email = " ";
            }
            else{
                erres.email = "Inter validate Email"
            }
        }

                        //password
        if(userData.password == ""){
            erres.password = "Password is Repuired!"
        }
        else{
            if(password_pattern.test(userData.password)){
                erres.password = " ";
            }
            else{
                erres.password = "Inter Strong Password"
            }
        }

                        //confirm password
        if(userData.conPassword == ""){
            erres.conPassword = "Confirm password is Repuired!"
        }
        else{
            if(userData.conPassword == userData.password){
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
                    <input className='inputs' name="firstName" type='text' placeholder='enter your firstname' onChange={hendleForm}/>
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