import React from 'react'
import './Allelectronicnavbar.css'
import Pera from '../../../../../../../Component/Pera/Pera'
import { Link } from 'react-router-dom'

const Allelectronicnavbar = () => {
  return (
    <section id="allelectronic_navbar">
        <div className='container'>
            <div className='allelectronic_navbar_contant_wrapper_flex'>
                <div className='allelectronic_navbar_contant'>
                    <Pera text="1-24 of over 10,000 results" style="allelectronic_navbar_contant_pera"/>
                </div>
                <div className='allelectronic_navbar_contant_link_box'>
                   <Link className='allelectronic_navbar_contant_link' to =" Sortby:FeaturedSortby:Featured">Sort by:Featured Sort by:Featured</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Allelectronicnavbar