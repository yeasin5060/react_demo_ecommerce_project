import React from 'react'
import './Allshop.css'
import Nanohead from '../../../../Component/Nanohead/Nanohead'
import { Link } from 'react-router-dom'

let allshoplink = [
    {
        id : 1,
        name : "Electronics",
        link : "electronics"
    },
    {
        id : 2,
        name : "Computers",
        link : "computer"
    },
    {
        id :3 ,
        name : "Smart Home",
        link : "smarthome"
    },
    {
        id :3 ,
        name : "Arts & Crafts",
        link : "artscrafts"
    },
]

const Allshop = () => {
  return (
    <section id='allshop'>
        <div className='allshop_wrapper'>
            <div className='allshop_wrapper_head_box'>
                <Nanohead text="Shop by Department" style="allshop_wrapper_head"/>
            </div>
            <ul className='allshop_wrapper_link_box'>
                {
                    allshoplink.map((item , index)=>(
                        <li className='allshop_wrapper_alllink_item_box' key={index}>
                        <Link className='allshop_alllinks' to ={item.link}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

export default Allshop