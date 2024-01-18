import React from 'react'
import './GiftCardbalance.css'
import Minihead from '../../../../Component/Miniheading/Minihead'
import giftcardimgone from '../../../../images/giftcardimgone.jpg'
import giftcardimgtwo from '../../../../images/giftcardimgtwo.jpg'
import giftcardimgthree from '../../../../images/giftcardimgthree.png'

let arraybalance = [
    {
        id : 1,
        img :giftcardimgone ,
        text : "Redeem Bajar Gift Card"
    },
    {
        id : 2 ,
        img : giftcardimgtwo,
        text : "View your balance",
    },
    {
        id : 3 ,
        img :giftcardimgthree ,
        text : "Set up Auto Reload"
    },
]

const GiftCardbalance = () => {
  return (
    <section id='giftcardbalance'>
        <div className='container'>
            <div className='giftcardbalance_wrapper'>
                {
                    arraybalance.map((item , index)=>(
                        <div key={index} className='giftcardbalance_box'>
                            <div className='giftcardbalance_box_img'>
                                <img src={item.img} alt="not found" />
                            </div>
                            <div className='giftcardbalance_box_link'>
                                <Minihead text={item.text} style="giftcardbalance_box_link_head"/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default GiftCardbalance