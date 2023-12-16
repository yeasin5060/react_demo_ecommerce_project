import React from 'react'
import './Footerbottom.css'
import Minihead from '../../../Component/Miniheading/Minihead'

const Footerbottom = () => {
  return (
    <section id='footerbottom'>
        <div className='container'>
            <div className='footerbottom_wrapper'>
                <div className='footerbottom_logo'>
                    <img src="images/bajar_logo.jpg" alt="not found" />
                </div>
                <div className='footerbottom_btn'>
                    <Minihead text="english" style="btn_three"/>
                    <Minihead text="$ USD - U.S.dollar" style="btn_three"/>
                    <Minihead text="united stated" style="btn_three"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footerbottom