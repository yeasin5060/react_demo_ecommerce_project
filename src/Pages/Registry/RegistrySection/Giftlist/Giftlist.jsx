import React from 'react'
import Minihead from '../../../../Component/Miniheading/Minihead'
import { Link } from 'react-router-dom'
import './Giftlist.css'
import giftone from '../../../../images/giftone.jpg'
import giftwo from '../../../../images/gifttwo.jpg'
import gifthree from '../../../../images/giftthree.jpg'
import giffour from '../../../../images/giftfour.jpg'
import giffive from '../../../../images/giftfive.jpg'
import giftsix from '../../../../images/giftsix.jpg'

let arr = [ 
    {
        id: 1,
        img:giftone,
        name:"I'm getting married"
    },
    {
        id: 2,
        img:giftwo,
        name:"I'm welcoming a baby"
    },
    {
        id: 3,
        img:gifthree,
        name:"Celebrating a birthday"
    },
    {
        id: 4,
        img:giffour,
        name:"Celebrating any occasion"
    },
    {
        id:5,
        img:giffive,
        name:"Celebrating the holidays"
    },
    {
        id: 6,
        img: giftsix,
        name:"Celebrating a pet"
    },
]


const Giftlist = () => {
  return (
    <search id='giftlist'>
        <div className='container'>
            <div className='giftlist_wrapper'>
                <div className='giftlist_header'>
                    <Minihead text="Learn about our registries and gift lists" style="giftlist_head"/>
                </div>
                <div className='giftlist_images_wrapper'>
                    {
                        arr.map((item,index)=>(
                            <div key={index} className='giftlist_image_box'>
                                <div className='giftlist_image'>
                                    <img src={item.img} alt="not found"/>
                                </div>
                                <div className='giftlist_image_contant'>
                                    <Link className='link_contant' to = "gift">{item.name}</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </search>
  )
}

export default Giftlist