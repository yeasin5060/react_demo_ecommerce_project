import React from 'react'
import { NavLink } from 'react-router-dom'
import Minihead from '../../../../Component/Miniheading/Minihead'
import './Footlinkmiddle.css'

const Footlinkmiddle = () => {
  return (
    <section className='footlinkmiddle_wrapper'>
        <div className='footlinkmiddle_head'>
            <Minihead text="Make Money with Us" style="middle_head"/>
        </div>
        <div className='footlinkmiddle_link'>
            <ul className='list'>
                <li>
                    <NavLink to="sellproductsonbajar">Sell products on bajar</NavLink>
                </li>
                <li>
                    <NavLink to="sellonbajarbusiness">Sell on bajar Business</NavLink>
                </li>
                <li>
                    <NavLink to="sellappsonbajar">Sell apps on bajar</NavLink>
                </li>    
                <li>
                    <NavLink to="becomeanaffiliate">Become an Affiliate</NavLink>
                </li>
                <li>
                    <NavLink to="advertiseyourproducts"> Advertise Your Products</NavLink>
                </li>
                <li>
                    <NavLink to="self-publishwithus"> Self-Publish with Us</NavLink>
                </li>
                <li>
                    <NavLink to="hostanbajarhub">Host an bajar Hub</NavLink>
                </li>
                <li>
                    <NavLink to="seemoremakemoneywithus">See More Make Money with Us</NavLink>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Footlinkmiddle