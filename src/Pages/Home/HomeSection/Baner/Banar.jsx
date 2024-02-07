import React from 'react'
import './Baner.css'
import ecommercebaner from '../../../../images/ecommerce_baner.jpg'

const Banar = () => {
  return (
    <section id='baner'>
        <img src={ecommercebaner} alt='not found'/>
        <div className='container'>
            <div className='layout'></div>
        </div>
    </section>
  )
}

export default Banar