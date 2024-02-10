import React from 'react'
import './Alldigital.css'
import Nanohead from '../../../../Component/Nanohead/Nanohead'
import { Link } from 'react-router-dom'

let digitallink = [
    {
        id : 1,
        name : "Bajar Music",
        link : "bajarmusic"
    },
    {
        id : 2,
        name : "Kindle E-Readers & Books ",
        link : "kindlereaders"
    },
    {
        id :3 ,
        name : "Bajar Appstore",
        link : "bajarappstore"
    },
]
const Alldigital = () => {
  return (
    <section id='alldigital'>
        <div className='alldigital_wrapper'>
            <div className='alldigital_wrapper_head_box'>
                <Nanohead text="Digital Content & Devices" style="alldigital_wrapper_head"/>
            </div>
            <ul className='alldigital_wrapper_link_box'>
                {
                    digitallink.map((item , index)=>(
                        <li className='alldigital_wrapper_alllink_item_box' key={index}>
                        <Link className='alldigital_alllinks' to ={item.link}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

export default Alldigital