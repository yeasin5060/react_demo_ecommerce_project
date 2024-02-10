import React from 'react'
import './Allprogram.css'
import Nanohead from '../../../../Component/Nanohead/Nanohead'
import { Link } from 'react-router-dom'

let allprogramlink = [
    {
        id : 1,
        name : "Gift Card",
        link : "giftcard"
    },
    {
        id : 2,
        name : "Shop By Interest",
        link : "shopbyinterest"
    },
    {
        id :3 ,
        name : "Bajar Live",
        link : "bajarlive"
    },
    {
        id :4 ,
        name : "International Shoping",
        link : "internationalshoping"
    },
]
const Allprogram = () => {
  return (
    <section id='allprogram'>
        <div className='allprogram_wrapper'>
            <div className='allprogram_wrapper_head_box'>
                <Nanohead text="Programs & Features" style="allprogram_wrapper_head"/>
            </div>
            <ul className='allprogram_wrapper_link_box'>
                {
                    allprogramlink.map((item , index)=>(
                        <li className='allprogram_wrapper_alllink_item_box' key={index}>
                        <Link className='allprogram_alllinks' to ={item.link}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

export default Allprogram