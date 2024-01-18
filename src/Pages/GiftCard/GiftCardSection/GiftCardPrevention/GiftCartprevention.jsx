import React from 'react'
import './GiftCardPrevention.css'
import Minihead from '../../../../Component/Miniheading/Minihead'
import { Link } from 'react-router-dom'

const GiftCartprevention = () => {
  return (
   <section id='giftcardprevention'>
    <div className='container'>
        <div className='giftcardprevention_wrapper'>
            <Link to = "prevention" className='giftcardprevention_link'>
                <Minihead text="Learn more about gift card scams and fraud protection" style="giftcardprevention_contant"/>
            </Link>
        </div>
    </div>
   </section>
  )
}

export default GiftCartprevention