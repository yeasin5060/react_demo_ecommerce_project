import React from 'react'
import './All.css'
import Allsign from './Allsection/Allsign/Allsign'
import Alldigital from './Allsection/Alldigital/Alldigital'
const All = () => {
  return (
   <section id='all'>
      <Allsign/>
      <div className='all_pages_wrapper'>
        <Alldigital/>
      </div>
   </section>
  )
}

export default All