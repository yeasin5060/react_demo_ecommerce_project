import React from 'react'
import Minihead from '../../../../Component/Miniheading/Minihead'
import { IoIosStarOutline } from "react-icons/io";
import './Sellheader.css'
import { Link } from 'react-router-dom';

const Sellheader = () => {
  return (
    <section id='sell_header'>
        <div className='container'>
            <div className='sell_header_wrapper'>
                <div>
                    <Minihead text="Sell with Bajar" style="sell_header_head"/>
                </div>
                <div>
                    <h4 className='sell_header_middle_contant'><IoIosStarOutline className='star_left' />Start today for 5% back on up to $1,000,000 in branded sales.<Link to = "learnhow"><span className='sell_header_middle_contant_link'>Learn how</span></Link><IoIosStarOutline className='star_right' /> </h4>
                </div>
                <div className='sell_header_btn'>
                    <button className='sell_header_signup_button'>Sign up</button>
                </div>                
            </div>
        </div>
    </section>
  )
}

export default Sellheader