import React from 'react'
import Minihead from '../../../../Component/Miniheading/Minihead'
import './Footlinkright.css'
import { NavLink } from 'react-router-dom'

const Footlinkright = () => {
  return (
    <section className='footlinkright_wrapper'>
        <div className='footlinkright_head'>
            <Minihead text="Let Us Help You" style="right_head"/>
        </div>
        <div className='footlinkright_link'>
            <ul className='list'>
                <li>
                    <NavLink to="bajarandCOVID-19">bajar and COVID-19</NavLink>
                </li>
                <li>
                    <NavLink to="youraccount">Your Account</NavLink>
                </li>
                <li>
                    <NavLink to="yourorders">Your Orders</NavLink>
                </li>    
                <li>
                    <NavLink to="shippingrates&policies">Shipping Rates & Policies</NavLink>
                </li>
                <li>
                    <NavLink to="returns&replacements"> Returns & Replacements</NavLink>
                </li>
                <li>
                    <NavLink to="manageyourcontentanddevices">Manage Your Content and Devices</NavLink>
                </li>
                <li>
                    <NavLink to="bajarassistant">bajar Assistant</NavLink>
                </li>
                <li>
                    <NavLink to="help">help</NavLink>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Footlinkright