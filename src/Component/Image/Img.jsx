import React from 'react'
import './Img.css'

const Img = ({ source , alt}) => {
  return (
    <div className='img'>
        <img  src={source} alt={alt} />
    </div>
  )
}

export default Img