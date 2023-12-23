import React from 'react'
import './Movies_tv.css'
import Movies from '../../../../Component/Miovies/Movies'

const Moviestv = () => {
  return (
    <section id='movies_tv'>
        <div className='container'>
            <div className='movies_tv_wrapper'>
                <Movies head="Most wished for in Movies & TV" style="movies"/>
            </div>
        </div>
    </section>
  )
}

export default Moviestv