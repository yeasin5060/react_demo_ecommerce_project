import React from 'react'
import { Link } from 'react-router-dom'
import './Registrynavbar.css'

const Registrynavbar = () => {
  return (
   <section id='registrynav'>
    <div className='container'>
        <div className='registry_nav_warpper'>
            <div className='registry_link'>
                <Link className='registry' to ="registrylink"> regitry & gifting</Link>
            </div>
            <div className='registry_group_link'>
                <Link className='registry_links' to = "find">Find a registry or gift list</Link>
                <Link className='registry_links' to = "create">Create a registry or gift list</Link>
                <Link className='registry_links' to = "help">Help</Link>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Registrynavbar