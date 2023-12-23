import React from 'react'
import './Homeproduct.css'
import Imagebox from '../../../../Component/ImageBox/Imagebox'
import pc from '../../../../images/pc_image.jpg'
import toy from '../../../../images/toy_image.jpg'
import toys from '../../../../images/toys_image.jpg'
import lamp from '../../../../images/lamp_image.jpg'
let arr = [
  {
    id: 1 ,
    text:"Deals In PCs",
    img:pc,
    link:"shop"
  },
  {
    id: 2 ,
    text:"Toys Under $25",
    img:toy,
    link:"shop"
  },
  {
    id: 3 ,
    text:"Beauty Steals Under $25",
    img:toys,
    link:"shop"
  },
  {
    id: 4 ,
    text:"Home Décor Under $50",
    img:lamp,
    link:"shop"
  },
  {
    id: 5 ,
    text:"Beauty Steals Under $25",
    img:toys,
    link:"shop"
  },
  {
    id: 6 ,
    text:"Deals In PCs",
    img:pc,
    link:"shop"
  },
  {
    id: 7 ,
    text:"Home Décor Under $50",
    img:lamp,
    link:"shop"
  },
  {
    id: 8 ,
    text:"Toys Under $25",
    img:toy,
    link:"shop"
  },
  
]
const Homeproduct = () => {
  return (
    <section id='home_product'>
        <div className='container'>
            <div className='home_product_wrapper'>
               {
                arr.map((item) =>{
                  return(
                    <Imagebox img={item.img} head={item.text} style="home_head" link={item.link} shop="shop"/>
                  )
                })
               }
            </div>
        </div>
    </section>
  )
}

export default Homeproduct