import React from 'react'
import './Allbajarmusicbanar.css'
import { Link } from 'react-router-dom'
import Nanohead from '../../../../../../../../Component/Nanohead/Nanohead'
import Subhead from '../../../../../../../../Component/Subheading/Subhead'
import Minihead from '../../../../../../../../Component/Miniheading/Minihead'
import Pera from '../../../../../../../../Component/Pera/Pera'


const Allbajarmusicbanar = () => {
  return (
    <section id='allbajarmusic_banar'>
      <div className='container'>
          <div className='allbajarmusic_banar_wrapper'>
              <Nanohead text="Bajar music" style="allbajarmusic_banar_wrapper_nanohead"/>
              <Subhead text="Unlimited access to 100 million songs" style="allbajarmusic_banar_wrapper_subhead"/>
              <Minihead text="Free for 30 days. Cancel anytime." style="allbajarmusic_banar_wrapper_minihead"/>
              <Link className='allbajarmusic_banar_wrapper_link' to="tryitfree">Try it free</Link>
              <Pera text="Starts at $9.99/month after. New subscribers only. Terms apply." style="allbajarmusic_banar_wrapper_pera"/>
          </div>
      </div>
    </section>
  )
}

export default Allbajarmusicbanar