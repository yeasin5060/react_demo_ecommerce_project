import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav id='navbar'>
        <div className='container'>
            <ul className='item'>
                <li>
                    <NavLink to='all'>all</NavLink>
                </li>
                <li>
                    <NavLink to='/'>home</NavLink>
                </li>
                <li>
                    <NavLink to='todaydeals'>today deals</NavLink>
                </li>
                <li>
                    <NavLink to='registry'>registry</NavLink>
                </li>
                <li>
                    <NavLink to='customerservice'>customer service</NavLink>
                </li>
                <li>
                    <NavLink to='giftcard'>gift cards</NavLink>
                </li>
                <li>
                    <NavLink to='sell'>sell</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar