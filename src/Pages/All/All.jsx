import React from 'react'
import './All.css'
import Allsign from './Allsection/Allsign/Allsign'
import Alldigital from './Allsection/Alldigital/Alldigital'
import Allshop from './Allsection/Allshop/Allshop'
const All = () => {
  return (
   <section id='all'>
      <Allsign/>
      <div className='all_pages_wrapper'>
        <Alldigital/>
        <Allshop/>
      </div>
   </section>
  )
}

export default All