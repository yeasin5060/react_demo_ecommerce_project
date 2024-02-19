import React from 'react'
import './Allbajarmusicseemore.css'
import Nanohead from '../../../../../../../../Component/Nanohead/Nanohead'
import Minihead from '../../../../../../../../Component/Miniheading/Minihead'
import { Link } from 'react-router-dom'

let allbajatmusicseemorearray = [
    {
        id :1 ,
        text : "Experience spatial audio",
        linkcontant : "See more",
        link : "experiencespatialaudio"
    },
    {
        id : 2,
        text : "The HD difference",
        linkcontant : "See more",
        link : "thehddifference"
    },
]

const Allbajarmusicseemore = () => {
  return (
    <section id = "allbajatmusic_seemore">
        <div className='container'>
            <div className='allbajatmusic_seemore_wrapper_flex'>
                {
                    allbajatmusicseemorearray.map((item , index)=>(
                        <div key={index} className='allbajatmusic_seemore_wrapper_contant_box'>
                            <Nanohead text={item.text} style="allbajatmusic_seemore_wrapper_contant_nanohead"/>
                            <Link className='allbajatmusic_seemore_wrapper_link' to ={item.link}>{item.linkcontant}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Allbajarmusicseemore