import React from 'react'
import './Sellbenar.css'
import Head from '../../../../Component/Heading/Head'
import Minihead from '../../../../Component/Miniheading/Minihead'
import { Link } from 'react-router-dom'
import Img from '../../../../Component/Image/Img'
import sellbenar from '../../../../images/sellbenar.png'

const Sellbenar = () => {
  return (
    <section id='sell_benar'>
        <div className='container'>
            <div className='sell_benar_wrapper'>
                <div className='sell_benar_contant'>
                    <Head text="Start selling with Bajar" style="sell_benar_head"/>
                    <Minihead text="The fastest-growing and preferred acquisition channel for over half our multichannel sellers.1" style="sell_benar_minihead"/>
                    <div className='sell_benar_btn'>
                        <button className='sell_benar_button'><Link to = "signup">Sign up</Link></button>
                        <h5 className='month_a_price'>$39.99 a month + selling fees</h5>
                    </div>
                </div>
                <div className='sell_benar_image'>
                    <img src={sellbenar} alt="not found"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sellbenar