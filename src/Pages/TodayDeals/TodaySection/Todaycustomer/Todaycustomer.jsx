import React from 'react'
import './Todaycustomer.css'
import Pera from '../../../../Component/Pera/Pera'
import customerimageome from '../../../../images/customerimageone.jpg'
import customertwo from '../../../../images/customertwo.jpg'
import customerthree from '../../../../images/customerthree.jpg'
import customerfour from '../../../../images/customerfour.jpg'
import customerfive from '../../../../images/customerfive.jpg'
import customersix from '../../../../images/customersix.jpg'
import customerseven from '../../../../images/customerseven.jpg'
import customereight from '../../../../images/customereight.jpg'

let arr = [
    {
        id: 1,
        img: customerimageome,
        name: "Gildan Fleece Hoodie Sweatshirt, Style G18500, Multipack Gildan Fleece Hoodie Sweatshirt, Style G18500, Multipack",
        review:"7K+ bought in past month",
        price: "$19.99",
        oldPrice:"$43.85 shipping"
    },
    {
        id: 2,
        img: customertwo,
        name: "Fruit of the Loom Eversoft Fleece Hoodies, Pullover & Full Zip, Moisture Wicking & Breathable, Sizes S-4X Fruit of the Loom Eversoft Fleece Hoodies, Pullover & Full Zip, Moisture Wicking & Breathable, Sizes S-4X",
        review:"7K+ bought in past month",
        price: "$20.99",
        oldPrice:"$43.85 shipping"
    },
    {
        id: 3,
        img: customerthree,
        name: "Hanes Men's Ultimate Sweatshirt, Heavyweight Fleece Hoodie, Cotton Sweatshirt for Men Hanes Men's Ultimate Sweatshirt, Heavyweight Fleece Hoodie, Cotton Sweatshirt for Men",
        review:"7K+ bought in past month",
        price: "$17.99",
        oldPrice:"$43.85 shipping"
    },
    {
        id: 4,
        img: customerfour,
        name: "Amazon Essentials Men's Hooded Fleece Sweatshirt (Available in Big & Tall) Amazon Essentials Men's Hooded Fleece Sweatshirt (Available in Big & Tall)",
        review:"7K+ bought in past month",
        price: "$15.99",
        oldPrice:"$43.85 shipping"
    },
    {
        id: 5,
        img:customerfive,
        name: "Jerzees Men’s NuBlend Fleece Hoodies & Sweatshirts, Cotton Blend, Sizes S-3X Jerzees Men’s NuBlend Fleece Hoodies & Sweatshirts, Cotton Blend, Sizes S-3X",
        review:"7K+ bought in past month",
        price: "$30.99",
        oldPrice:"$50.85 shipping"
    },
    {
        id: 6,
        img: customersix,
        name: "Hanes Men's Originals Midweight Fleece Hoodie, Pullover Hooded Sweatshirt for Men Hanes Men's Originals Midweight Fleece Hoodie, Pullover Hooded Sweatshirt for Men",
        review:"7K+ bought in past month",
        price: "$25.99",
        oldPrice:"$45.85 shipping"
    },
    {
        id: 7,
        img: customerseven,
        name: "Champion Men's Hoodie, Powerblend, Fleece Comfortable Hoodie, Sweatshirt for Men (Reg. Or Big & Tall) Champion Men's Hoodie, Powerblend, Fleece Comfortable Hoodie, Sweatshirt for Men (Reg. Or Big & Tall)",
        review:"7K+ bought in past month",
        price: "$30.99",
        oldPrice:"$50.85 shipping"
    },
    {
        id: 8,
        img: customereight,
        name: "Hanes Men’s Full-Zip EcoSmart Hoodie, Fleece Hooded Sweatshirt with Zipper Hanes Men’s Full-Zip EcoSmart Hoodie, Fleece Hooded Sweatshirt with Zipper",
        review:"7K+ bought in past month",
        price: "$15.99",
        oldPrice:"$30.85 shipping"
    },
    
]

const Todaycustomer = () => {
  return (
    <section id='today_customer'>
        <div className='container'>
            <div className='today_customer_wrapper'>
                {
                    arr.map((item) =>(
                        <div className='today_customer_product_box'>
                            <div className='today_customer_product_image'>
                                <img src={item.img} alt="not found"/>
                            </div>
                            <div className='today_customer_product_names'>
                                <h4 className='today_product_names'>{item.name}</h4>
                                <h5 className='today_product_review'>{item.review}</h5>
                                <Pera text={item.price} style="today_prices"/>
                                <h5 className='today_old_prices'>{item.oldPrice}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='today_sgin_in_box'>
                <Pera text="See personalized recommendations" style="today_sgin_in_pera"/>
                <button className='today_sgin_in_btn'>sgin in</button>
                <p className='today_new_customer'>new customer <span className='today_start_here'>start here</span></p>
            </div>
        </div>
    </section>
  )
}

export default Todaycustomer