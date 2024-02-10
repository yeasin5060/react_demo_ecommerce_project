import React from 'react'
import './All.css'
import Allsign from './Allsection/Allsign/Allsign'
import Alldigital from './Allsection/Alldigital/Alldigital'
import Allshop from './Allsection/Allshop/Allshop'
import Allprogram from './Allsection/Allprogram/Allprogram'
const All = () => {
  return (
   <section id='all'>
      <Allsign/>
      <div className='all_pages_wrapper'>
        <Alldigital/>
        <Allshop/>
        <Allprogram/>
      </div>
   </section>
  )
}

export default All