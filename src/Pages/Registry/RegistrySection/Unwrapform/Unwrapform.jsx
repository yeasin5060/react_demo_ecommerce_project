import React from 'react'
import './Unwrapform.css'
import Minihead from '../../../../Component/Miniheading/Minihead'
import Pera from '../../../../Component/Pera/Pera'

const Unwrapform = () => {
  return (
        <section id='unwrap_form'>
            <div className='container'>
                <div className='unwrap_form_box'>
                    <div className='unwrap_form_contant'>
                        <Minihead text="Unwrap joyful possibilities" style="unwrap_head"/>
                        <Pera text="For weddings, babies, birthdays, or any life event, registries and gift lists ensure the perfect gifts." style="umwrap_pera"/>
                    </div>
                    <div className='unwrap_form_btn'>
                        <button className='unwrap_btn'>Create a registry or gift list</button>
                    </div>
                </div>
                <div className='form_box'>
                    <div className='form_contant'>
                        <Minihead text="Find a registry or gift list" style="head_form"/>
                    </div>
                    <input className='search_name' type='search' placeholder='search by name'/>
                    <input className='search_by' type='search' placeholder='search by'/>
                    <button className='search_btn'>search</button>
                </div>
            </div>
        </section>
  )
}

export default Unwrapform