import React from 'react'
import "./Allelectronicproduct.css"
import elecone from '../../../../../../../images/elecone.jpg'
import electwo from '../../../../../../../images/electwo.jpg'
import electhree from '../../../../../../../images/electhree.jpg'
import elecfour from '../../../../../../../images/elecfour.jpg'
import elecfive from '../../../../../../../images/elecfive.jpg'
import elecsix from '../../../../../../../images/elecsix.jpg'
import elecseven from '../../../../../../../images/elecseven.jpg'
import eleceight from '../../../../../../../images/eleceight.jpg'
import elecnine from '../../../../../../../images/elecnine.jpg'
import electen from '../../../../../../../images/electen.jpg'
import { Link } from 'react-router-dom'
import Pera from '../../../../../../../Component/Pera/Pera'

let arr = [
    {
        id: 1,
        img: elecone,
        name: "Gildan Fleece Hoodie Sweatshirt, Style G18500, Multipack Gildan Fleece Hoodie Sweatshirt, Style G18500, Multipack",
        review:"7K+ bought in past month",
        price: "$19.99",
        oldPrice:"$43.85 shipping"
    },
    {
        id: 2,
        img: electwo,
        name: "Fruit of the Loom Eversoft Fleece Hoodies, Pullover & Full Zip, Moisture Wicking & Breathable, Sizes S-4X Fruit of the Loom Eversoft Fleece Hoodies, Pullover & Full Zip, Moisture Wicking & Breathable, Sizes S-4X",
        review:"7K+ bought in past month",
        price: "$20.99",
        oldPrice:"$43.85 shipping"
    },
    {
        id: 3,
        img: electhree,
        name: "Hanes Men's Ultimate Sweatshirt, Heavyweight Fleece Hoodie, Cotton Sweatshirt for Men Hanes Men's Ultimate Sweatshirt, Heavyweight Fleece Hoodie, Cotton Sweatshirt for Men",
        review:"7K+ bought in past month",
        price: "$17.99",
        oldPrice:"$43.85 shipping"
    },
    {
        id: 4,
        img: elecfour,
        name: "Amazon Essentials Men's Hooded Fleece Sweatshirt (Available in Big & Tall) Amazon Essentials Men's Hooded Fleece Sweatshirt (Available in Big & Tall)",
        review:"7K+ bought in past month",
        price: "$15.99",
        oldPrice:"$43.85 shipping"
    },
    {
        id: 5,
        img:elecfive,
        name: "Jerzees Men’s NuBlend Fleece Hoodies & Sweatshirts, Cotton Blend, Sizes S-3X Jerzees Men’s NuBlend Fleece Hoodies & Sweatshirts, Cotton Blend, Sizes S-3X",
        review:"7K+ bought in past month",
        price: "$30.99",
        oldPrice:"$50.85 shipping"
    },
    {
        id: 6,
        img: elecsix,
        name: "Hanes Men's Originals Midweight Fleece Hoodie, Pullover Hooded Sweatshirt for Men Hanes Men's Originals Midweight Fleece Hoodie, Pullover Hooded Sweatshirt for Men",
        review:"7K+ bought in past month",
        price: "$25.99",
        oldPrice:"$45.85 shipping"
    },
    {
        id: 7,
        img: elecseven,
        name: "Champion Men's Hoodie, Powerblend, Fleece Comfortable Hoodie, Sweatshirt for Men (Reg. Or Big & Tall) Champion Men's Hoodie, Powerblend, Fleece Comfortable Hoodie, Sweatshirt for Men (Reg. Or Big & Tall)",
        review:"7K+ bought in past month",
        price: "$30.99",
        oldPrice:"$50.85 shipping"
    },
    {
        id: 8,
        img: elecnine,
        name: "Hanes Men’s Full-Zip EcoSmart Hoodie, Fleece Hooded Sweatshirt with Zipper Hanes Men’s Full-Zip EcoSmart Hoodie, Fleece Hooded Sweatshirt with Zipper",
        review:"7K+ bought in past month",
        price: "$15.99",
        oldPrice:"$30.85 shipping"
    },
    {
        id: 9,
        img: elecnine,
        name: "Hanes Men’s Full-Zip EcoSmart Hoodie, Fleece Hooded Sweatshirt with Zipper Hanes Men’s Full-Zip EcoSmart Hoodie, Fleece Hooded Sweatshirt with Zipper",
        review:"7K+ bought in past month",
        price: "$15.99",
        oldPrice:"$30.85 shipping"
    },
    {
        id: 10,
        img: electen,
        name: "Hanes Men’s Full-Zip EcoSmart Hoodie, Fleece Hooded Sweatshirt with Zipper Hanes Men’s Full-Zip EcoSmart Hoodie, Fleece Hooded Sweatshirt with Zipper",
        review:"7K+ bought in past month",
        price: "$15.99",
        oldPrice:"$30.85 shipping"
    },
    
]


const Allelectronicproduct = () => {
  return (
    <section id='allelectronic_product'>
        <div className='container'>
            <div className='allelectronic_product_wrapper_flex'>
                {
                    arr.map((item , index)=>(
                        <div key={item} className='allelectronic_product_box'>
                            <div className='allelectronic_product_image_box'>
                                <img src={item.img} alt="not found" />
                            </div>
                            <div className='allelectronic_product_details_box'>
                                <Link className='allelectronic_product_link'>{item.name}</Link>
                                <h5 className='allelectronic_product_review'>{item.review}</h5>
                                <Pera text={item.price} style="allelectronic_product_price"/>
                                <h5 className='allelectronic_product_old_prices'>{item.oldPrice}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Allelectronicproduct