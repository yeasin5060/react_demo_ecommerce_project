import React from 'react'
import './All.css'
import Allsign from './Allsection/Allsign/Allsign'
import Alldigital from './Allsection/Alldigital/Alldigital'
import Allshop from './Allsection/Allshop/Allshop'
import Allprogram from './Allsection/Allprogram/Allprogram'
import Allhelp from './Allsection/Allhelp/Allhelp'
const All = () => {
  return (
   <section id='all'>
      <Allsign/>
      <div className='all_pages_wrapper'>
        <Alldigital/>
        <Allshop/>
        <Allprogram/>
        <Allhelp/>
      </div>
   </section>
  )
}

export default All