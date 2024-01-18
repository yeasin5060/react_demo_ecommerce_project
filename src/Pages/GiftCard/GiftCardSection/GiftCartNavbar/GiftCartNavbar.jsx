import React from 'react'
import './GiftCartNavbar.css'
import { Link } from 'react-router-dom'

const GiftCartNavbar = () => {
  return (
    <section id='giftcart_nav'>
    <div className='container'>
        <div className='giftcart_nav_warpper'>
            <div className='giftcart_link'>
                <Link className='giftcart' to ="giftcartlink">Gift Cards</Link>
            </div>
            <div className='giftcart_group_link'>
                <Link className='giftcart_links' to = "bajar">Bajar Gift Cards</Link>
                <Link className='giftcart_links' to = "specialty">Specialty Gift Cards</Link>
                <Link className='giftcart_links' to = "redeem">Redeem Amazon gift cards</Link>
                <Link className='giftcart_links' to = "view">View your balance</Link>
                <Link className='giftcart_links' to = "reload">Bajar Reload</Link>
            </div>
        </div>
    </div>
   </section>
  )
}

export default GiftCartNavbar