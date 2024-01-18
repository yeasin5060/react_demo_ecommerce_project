import React from 'react'
import './Reasons.css'
import Minihead from '../../../../Component/Miniheading/Minihead'
import Pera from '../../../../Component/Pera/Pera'
import reasonone from '../../../../images/reasonone.png'
import reasontwo from '../../../../images/reasontwo.png'
import reasonthree from '../../../../images/reasonthree.jpg'
import reasonfour from '../../../../images/reasonfour.png'

let arr = [
    {
        id: 1 ,
        img:reasonone,
        head: "Earth's biggest selection",
        pera: "Add items from Amazon to create a gift registry for any occasion."
    },
    {
        id: 2 ,
        img:reasontwo,
        head: "Easy to share",
        pera: "Share your Gift lists with friends and family so they'll know exactly what gifts to get."
    },
    {
        id: 3,
        img:reasonthree,
        head: "Extended returns",
        pera: "Gift not quite right? Gift registry purchases have an extended return period."
    },
    {
        id: 4 ,
        img:reasonfour,
        head: "Thank you list",
        pera: "We keep track of who bought what gift and when, so it's easy for you to send thank you notes.Back to top"
    },
]

const Reasons = () => {
  return (
    <section id='reasons'>
        <div className='container'>
            <div className='reasons_wrapper'>
                <div className='reasons_head_box'>
                    <Minihead text="Reasons to create a registry or gift list on Amazon" style="reasons_head"/>
                </div>
                <div className='reasons_images_box_wrapper'>
                    {
                        arr.map((item , index)=>(
                            <div key={index} className='reasons_image_contant'>
                                <div className='reasons_images_box'>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='reasons_image_contant_box'>
                                    <h4 className='image_contant_head'>{item.head}</h4>
                                    <Pera text={item.pera} style="reasons_pera"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reasons