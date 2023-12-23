import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import './Header.css'
import Pera from '../../Component/Pera/Pera';

const Header = () => {
    let deli =[
        {
            text : "deliver to"
        }
    ]
    /*let [location , setLocation] = useState()

    useEffect(()=>{
        let loca =async ()=>{
            let res = await axios.get(deli)
            console.log(res.data)
        }
        loca()
    },[])*/

  return (
    <section id='header'>
        <div className='container'>
            <div className='header_wrapper'>
                <div className='header_logo_location'>
                    <div className='header_logo'>
                        <img src="images/bajar_logo.jpg" alt="not found" />
                    </div>
                    <div className='header_location'>
                       <Pera text="deliver to" style="location"/> 
                       <h4 className='bd'>bangladesh</h4>
                    </div>
                </div>
                <div className='header_search'>
                    <input className='search' type='search' placeholder='search bajar'/>
                </div>
                <div className='en_sing_order_cart'>
                    <ul className='header_list'>
                        <li>
                            <NavLink className='en' to='en'>en</NavLink>
                        </li>
                        <li>
                            <NavLink to='sgin'>sgin in</NavLink>
                        </li>
                        <li>
                            <NavLink to='order'>order</NavLink>
                        </li>
                        <li>
                            <NavLink to='cart'>cart</NavLink>
                        </li>
                        <li>
                            <NavLink to='login'>login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header