import React from 'react'
import Footlinkleft from './Footlinkleft/Footlinkleft'
import './Footermiddle.css'
import Footlinkmiddle from './Footlinkmiddle/Footlinkmiddle'
import Footlinkright from './Footlinkright/Footlinkright'

const Footermiddle = () => {
  return (
    <section id='footermiddel'>
        <div className='container'>
            <div className='footer_wrapper'>
                <Footlinkleft/>
                <Footlinkmiddle/>
                <Footlinkright/>
            </div>
        </div>
    </section>
  )
}

export default Footermiddle