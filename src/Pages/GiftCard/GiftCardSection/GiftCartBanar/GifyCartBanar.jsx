import React from 'react'
import './GifyCartBanar.css'
import giftcardone from '../../../../images/giftcardone.jpg'
import giftcardtwo from '../../../../images/giftcardtwo.jpg'
import giftcardthree from '../../../../images/giftcardthree.jpg'
import giftcardfour from '../../../../images/giftcardfour.jpg'

let arraybig = [
    {
        id : 1 ,
        img : giftcardone
    },
    {
        id : 2 ,
        img : giftcardtwo
    }
]

let arraysmall = [
    {
        id : 1 ,
        img : giftcardthree
    },
    {
        id : 2 ,
        img : giftcardfour
    }
]

const GifyCartBanar = () => {
  return (
    <section id='giftcart_banar'>
        <div className='container'>
            <div className='giftcart_wrapper'>
                <div className='giftcart_big_image_wrapper'>
                    {
                        arraybig.map((item , index)=>(
                            <div key={index} className='giftcart_big_image'>
                                <img src={item.img} alt="not found" />
                            </div>
                        ))
                    }
                </div>
                <div className='giftcart_small_image_wrapper'>
                    {
                        arraysmall.map((item , index)=>(
                            <div key={index} className='giftcart_small_image'>
                                <img src={item.img} alt="not found" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default GifyCartBanar