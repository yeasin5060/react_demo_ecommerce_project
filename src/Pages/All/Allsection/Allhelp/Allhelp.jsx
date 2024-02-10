import React from 'react'
import './Allhelp.css'
import Nanohead from '../../../../Component/Nanohead/Nanohead'
import { Link } from 'react-router-dom'

let allhelplink = [
    {
        id : 1,
        name : "Your Account",
        link : "youraccound"
    },
    {
        id : 2,
        name : "English",
        link : "english"
    },
    {
        id :3 ,
        name : "United States",
        link : "unitedstates"
    },
    {
        id :4 ,
        name : "Customer Service",
        link : "artscrafts"
    },
    {
        id :4 ,
        name : "Sign in",
        link : "signsin"
    },
]

const Allhelp = () => {
  return (
    <section id='allhelp'>
        <div className='allhelp_wrapper'>
            <div className='allhelp_wrapper_head_box'>
                <Nanohead text="Help & Settings" style="allhelp_wrapper_head"/>
            </div>
            <ul className='allhelp_wrapper_link_box'>
                {
                    allhelplink.map((item , index)=>(
                        <li className='allhelp_wrapper_alllink_item_box' key={index}>
                        <Link className='allhelp_alllinks' to ={item.link}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

export default Allhelp