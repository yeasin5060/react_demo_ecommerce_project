import React from 'react'
import './Homeproduct.css'
import imageone from '../../../images/image_one.jpg'
import imagetwo from '../../../images/image_two.jpg'
import imagethree from '../../../images/image_three.jpg'
import imagefour from '../../../images/image_four.jpg'
import imagefive from '../../../images/image_five.jpg'
import imagesix from '../../../images/image_six.jpg'
import imageseven from '../../../images/image_seven.jpg'
import imageeight from '../../../images/image_eight.jpg'
import imagenine from '../../../images/image_nine.jpg'
import imageten from '../../../images/image_ten.jpg'
import imagealiven from '../../../images/image_aliven.jpg'
import imagetwelve from '../../../images/image_twelve.jpg'
import { Link } from 'react-router-dom'

let arr = [ 
    {
        id : 1,
        img : imageone,
        discound: "25% off",
        deal : "Deal",
        name : "Home Products from Amazon Brands"
    },
    {
        id : 2,
        img : imagetwo,
        discound: "34% off",
        deal : "Deal",
        name : "Beauty, Fragrance and Self Care Gifting Favorites"
    },
    {
        id : 3,
        img : imagethree,
        discound: "20% off",
        deal : "Deal",
        name : "Save on Gifts from Pre-loved Dior, Saint Laurent, and more"
    },
    {
        id : 4,
        img : imagefour,
        discound: "40% off",
        deal : "Deal",
        name : "30% off Grubhub"
    },
    {
        id : 5,
        img : imagefive,
        discound: "30% off",
        deal : "Deal",
        name : "PlayStation 5 Console - Marvel’s Spider-Man 2 Bundle (slim)"
    },
    {
        id : 6,
        img : imagesix,
        discound: "10% off",
        deal : "Deal",
        name : "Sony Headphones, Speakers and Home Theater"
    },
    {
        id : 7,
        img : imageseven,
        discound: "30% off",
        deal : "Deal",
        name : "Toys Under $20"
    },
    {
        id : 8,
        img : imageeight,
        discound: "40% off",
        deal : "Deal",
        name : "Blink Smart Home Security Doorbells and Cameras"
    },
    {
        id : 9,
        img : imagenine,
        discound: "32% off",
        deal : "Deal",
        name : "bajar Fire Tablets"
    },
    {
        id : 10,
        img : imageten,
        discound: "20% off",
        deal : "Deal",
        name : "bajar Essentials Men's Apparel"
    },
    {
        id : 11,
        img : imagealiven,
        discound: "41% off",
        deal : "Deal",
        name : "Select Furniture from Vecelo, Flash Furniture, Lucid and more"
    },
    {
        id : 12,
        img : imagetwelve,
        discound: "30% off",
        deal : "Deal",
        name : "bajar Essentials Women's Apparel"
    },
]

const Homeproduct = () => {
  return (
    <section id='homeproduct'>
        <div className='container'>
            <div className='homeproduct_wrapper'>
                {
                    arr.map((item) =>{
                        return (
                            <div className='homeproduct_box'>
                                <div className='homeproduct_image'>
                                    <Link to = "imagefour">
                                        <img src={item.img} alt="not found" />
                                    </Link>
                                </div>
                                <div className='homeproduct_contant'>
                                    <div className='homeproduct_discound'>
                                        <p className='homeproduct_dis'>{item.discound}</p>
                                    </div>
                                    <div className='homeproduct_del'>
                                        <span className='homeproduct_del'>{item.deal}</span>
                                    </div>
                                </div>
                            <div className='homeproduct_name'>
                                <h4 className='product_name'>{item.name}</h4>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Homeproduct