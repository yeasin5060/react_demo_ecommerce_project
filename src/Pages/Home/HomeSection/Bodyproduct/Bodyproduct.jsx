import React from 'react'
import Minihead from '../../../../Component/Miniheading/Minihead'
import Img from '../../../../Component/image/img'
import './Bodyproduct.css'
import cetaphil from '../../../../images/cetaphil.jpg'
import { Link } from 'react-router-dom'

let arr = [
    {
        img: cetaphil
    },
    {
        img: cetaphil
    },
    {
        img: cetaphil
    },
    {
        img: cetaphil
    },
    {
        img: cetaphil
    },
    {
        img: cetaphil
    },
    {
        img: cetaphil
    },
    {
        img: cetaphil
    },
    {
        img: cetaphil
    },
    {
        img: cetaphil
    },
    {
        img: cetaphil
    },
]
const Bodyproduct = () => {
  return (
    <section id='bodyproduct'>
        <div className='container'>
            <div className='bodyproduct_wrapper'>
            <Minihead text="Top Sellers in Baby Products for you" style="body_product"/>
                <div className='images_wrapper'>
                    {
                        arr.map((item) =>{
                            return(
                               <>
                                <Link to ="imagesone">
                                    <Img source={item.img} alt="not found"/>
                                </Link>
                               </>
                             )
                        })
                    }
                </div>
          </div>
        </div>
    </section>
  )
}

export default Bodyproduct