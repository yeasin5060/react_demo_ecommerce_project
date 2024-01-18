import React from 'react'
import './GiftCardtrending.css'
import Minihead from '../../../../Component/Miniheading/Minihead'
import { Link } from 'react-router-dom'
import trendingone from '../../../../images/trendingone.jpg'
import trendingtwo from '../../../../images/trendingtwo.jpg'
import trendingthree from '../../../../images/trendingthree.jpg'
import trendingfour from '../../../../images/trendingfour.jpg'
import trendingfive from '../../../../images/trendingfive.jpg'
import trendingsix from '../../../../images/trendingsix.jpg'

let array = [
    {
        id : 1 ,
        img : trendingone ,
        link : "Bajar.com Gift Card in a Reveal (Various Designs)Bajar.com Gift Card in a Reveal (Various Designs)Amazon.com Gift Card in a Reveal (Various Desi…",
        company: "Bajar",
        price: "$15.00"
    },
    {
        id : 2 ,
        img : trendingtwo ,
        link : "Bajar.com eGift Card Bajar.com eGift CardBajar.com eGift Card BajarBajar",
        company: "Bajar",
        price: "$50.00"
    },
    {
        id : 3 ,
        img : trendingthree ,
        link : "Bajar.com eGift CardBajar.com eGift CardBajar.com eGift CardBajarBajar",
        company: "Bajar",
        price: "$40.00"
    },
    {
        id : 4 ,
        img : trendingfour ,
        link : "Bajar.com eGift Card Bajar.com eGift Card Bajar.com eGift Card",
        company: "Bajar",
        price: "$50.00"
    },
    {
        id : 5 ,
        img : trendingfive ,
        link : "Bajar.com Gift Card in a Mini Envelope Bajar.com Gift Card in a Mini Envelope Bajar.com Gift Card in a Mini Envelope",
        company: "Bajar",
        price: "$60.00"
    },
    {
        id : 6 ,
        img : trendingsix ,
        link : "Bajar.com eGift Card Bajar.com eGift Card Bajar.com eGift Card",
        company: "Bajar",
        price: "$50.00"
    },
    {
        id : 7,
        img : trendingfour ,
        link : "Bajar.com eGift Card Bajar.com eGift Card Bajar.com eGift Card",
        company: "Bajar",
        price: "$50.00"
    },
    {
        id : 8 ,
        img : trendingone ,
        link : "Bajar.com Gift Card in a Reveal (Various Designs)Bajar.com Gift Card in a Reveal (Various Designs)Amazon.com Gift Card in a Reveal (Various Desi…",
        company: "Bajar",
        price: "$15.00"
    },
]

const GiftCardtrending = () => {
  return (
    <section id='giftcardtrending'>
        <div className='container'>
            <div className='giftcardtrending_wrapper'>
                <div className='giftcardtrending_head'>
                    <Minihead text="Trending now" style="giftcardtrending_heading"/>
                </div>
                <div className='giftcardtrending_trending_product_wrapper'>
                    {
                        array.map((item , index)=>(
                            <div key={index} className='giftcardtrending_trending_product_box'>
                                <div className='giftcardtrending_trending_product_image_box'>
                                    <img src={item.img} alt="not found" />
                                </div>
                                <div className='giftcardtrending_trending_product_ditail_box'>
                                    <Link className='giftcardtrending_trending_product_ditail_link' to = "bajar">{item.link}</Link>
                                    <h4 className='giftcardtrending_trending_product_company_name'>{item.company}</h4>
                                    <span className='giftcardtrending_trending_product_price'>{item.price}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default GiftCardtrending