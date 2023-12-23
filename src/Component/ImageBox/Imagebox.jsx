import React from 'react'
import Img from '../image/img'
import './Imagebox.css'
import { Link, NavLink } from 'react-router-dom'

const Imagebox = ( {head , style, link ,img , shop}) => {
  return (
    <section id='image_box'>
        <div className='image_box_head'>
            <h3 className={style}>{head}</h3>
        </div>
        <div className='image_box_images'>
           <div className='image'>
                <Img source={img} alt="not found" />
           </div>
           <div className='image_link'>
                <Link className={shop} to ="shopnew">{link}</Link>
           </div>
        </div>
    </section>
  )
}

export default Imagebox