import React from 'react'
import komra from '../../../../images/komra_image.jpg'
import happgril from '../../../../images/happy_gril.jpg'
import man from '../../../../images/man.jpg'
import gift from '../../../../images/gift.jpg'
import toothbrush from '../../../../images/toothbrush.jpg'
import laptop from '../../../../images/laptop.jpg'
import laptoptwo from '../../../../images/lapto_two.jpg'
import shoes from '../../../../images/shoe.jpg'
import Imagebox from '../../../../Component/ImageBox/Imagebox'
import './Productgroup.css'
let arr = [
    {
        id: 1,
        text:"New arrivals from Home",
        img: komra,
        link:"shop"
    },
    {
        id: 2,
        text:"A whole new way to work",
        img: happgril,
        link:"shop"
    },
    {
        id: 3,
        text:"Deals on most-loved finds",
        img: man,
        link:"shop"
    },
    {
        id: 4,
        text:"More smiles, for less",
        img: gift,
        link:"shop"
    },
    {
        id: 5,
        text:"Personal Care under $25",
        img: toothbrush,
        link:"See more"
    },
    {
        id: 6,
        text:"Laptops for every need",
        img: laptop,
        link:"Find your laptop here"
    },
    {
        id: 7,
        text:"Creating business solutions",
        img: laptoptwo,
        link:"See more softwere projuct"
    },
    {
        id: 8,
        text:"Deals on shoes",
        img:shoes,
        link:"See more"
    },
]
const Projuctgorup = () => {
  return (
    <section id='projuct_group'>
        <div className='container'>
            <div className='product_group_wrapper'>
                {
                    arr.map((item) =>{
                        return(
                            <Imagebox img={item.img} head={item.text} style="product_head" link={item.link} shop="shop"/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Projuctgorup