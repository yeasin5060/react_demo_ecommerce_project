import React from 'react'
import './Allbajarmusicsubscribers.css'
import { Link } from 'react-router-dom'
import Pera from '../../../../../../../../Component/Pera/Pera'

const Allbajarmusicsubscribers = () => {
  return (
   <section id='allbajarmusic_subscribers'>
        <div className='container'>
            <div className='allbajarmusic_subscribers_contant_wrapper'>
                <Link className='allbajarmusic_subscribers_contant_link' to="tryitfree">Try it free</Link>
                <Pera text="Starts at $9.99/month after. New subscribers only. Terms apply." style="allbajarmusic_subscribers_contant_pera"/>
            </div>
        </div>
   </section>
  )
}

export default Allbajarmusicsubscribers