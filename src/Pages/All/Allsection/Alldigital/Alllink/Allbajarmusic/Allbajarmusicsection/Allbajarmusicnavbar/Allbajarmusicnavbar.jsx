import React from 'react'
import './Allbajarmusicnavbar.css'
import { Link } from 'react-router-dom'

const Allbajarmusicnavbar = () => {
  return (
    <section id='allbajarmusic_nav'>
        <div className='container'>
        <div className='allbajarmusic_nav_warpper'>
            <div className='allbajarmusic_link_box'>
                <h2 className='allbajarmusic_link_head' >Bajar</h2>
                <Link className='allbajarmusic_links' to = "bajar">Amazon Music Unlimited</Link>
                <Link className='allbajarmusic_links' to = "specialty">Amazon Music Free</Link>
                <Link className='allbajarmusic_links' to = "redeem">Podcasts</Link>
                <Link className='allbajarmusic_links' to = "view">Download the app</Link>
            </div>
            <div className='allbajarmusic_link_seting'>
                <Link className='allbajarmusic' to ="giftcartlink">PlayOpen Web Player</Link>
                <Link className='allbajarmusic' to ="giftcartlink">Settings</Link>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Allbajarmusicnavbar