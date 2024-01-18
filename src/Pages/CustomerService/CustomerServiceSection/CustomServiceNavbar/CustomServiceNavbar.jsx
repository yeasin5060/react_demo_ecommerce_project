import React from 'react'
import './CustomServiceNavbar.css'
import { Link } from 'react-router-dom'

const CustomServiceNavbar = () => {
  return (
    <section id='custom_service_navbar'>
        <div className='container'>
            <div className='custom_service_nav_warpper'>
                <div className='custom_service_link'>
                    <Link className='custom_service' to ="registrylink"> regitry & gifting</Link>
                </div>
                <div className='custom_service_group_link'>
                    <Link className='custom_service_links' to = "homes">Home</Link>
                    <Link className='custom_service_links' to = "digital">Digital Services and Device Support</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CustomServiceNavbar