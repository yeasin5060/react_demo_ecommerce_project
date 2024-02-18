import React from 'react'
import './Alldemandmusic.css'
import Nanohead from '../../../../../../../../Component/Nanohead/Nanohead'
import amu from '../../../../../../../../images/amusquiggle.png'

let allbajardemandmusicarray = [
    {
        id : 1,
        text : "On-demand music,ad-free",
        img : amu
    },
    {
        id : 2,
        text : "The most ad-free top podcasts",
        img : amu
    },
    {
        id : 3,
        text : "Listen offline + unlimited skips",
        img : amu
    },
    {
        id : 4,
        text : "Experience HD and Spatial Audio",
        img : amu
    },
]

const Alldemandmusic = () => {
  return (
    <section id='allbajardemandmusic'>
        <div className='container'>
            <div className='alldemanmusic_wrapper_flex'>
                {
                    allbajardemandmusicarray.map((item , index)=>(
                        <div key={index} className='alldemanmusic_wrapper_contant_box'>
                            <div className='alldemanmusic_wrapper_contant_image_box'>
                                <img src={item.img} alt="not found" />
                            </div>
                            <Nanohead text={item.text} style="alldemanmusic_wrapper_contant_head"/>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Alldemandmusic