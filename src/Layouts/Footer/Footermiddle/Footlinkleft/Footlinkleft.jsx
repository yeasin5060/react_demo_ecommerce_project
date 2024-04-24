import React from 'react'
import { NavLink } from 'react-router-dom'
import Minihead from '../../../../Component/Miniheading/Minihead'
import './Footlinkleft.css'
const Footlinkleft = () => {
  return (
    <section className='footlinkleft_wrapper'>
        <div className='footlinkleft_head'>
            <Minihead text="Get to Know Us" style="left_head"/>
        </div>
        <div className='footlinkleft_link'>
            <ul className='list'>
                <li>
                    <NavLink to="careers">careers</NavLink>
                </li>
                <li>
                    <NavLink to="blog">blog</NavLink>
                </li>
                <li>
                    <NavLink to="aboutbajar">about amazon</NavLink>
                </li>    
                <li>
                    <NavLink to="investorrelatio">investor relations</NavLink>
                </li>
                <li>
                    <NavLink to="bajardevices"> amazon devices</NavLink>
                </li>
                <li>
                    <NavLink to="bajarscience"> amazon science</NavLink>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Footlinkleft