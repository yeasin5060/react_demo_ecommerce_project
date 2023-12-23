import React from 'react'
import Pera from '../../../../Component/Pera/Pera'
import bajartv from '../../../../images/bajartv.jpg'
import './Elproduct.css'
import { Link } from 'react-router-dom'

let arr = [
    {
        id : 0,
        img:bajartv,
        name: "Bajar fir TV 12",
        discound : "40% off",
        deal : "Deal",
        price: "$599",
        oldprice: "$699"
    },
    {
        id : 0,
        img:bajartv,
        name: "Bajar fir TV 12",
        discound : "40% off",
        deal : "Deal",
        price: "$599",
        oldprice: "$699"
    },
    {
        id : 0,
        img:bajartv,
        name: "Bajar fir TV 12",
        discound : "40% off",
        deal : "Deal",
        price: "$599",
        oldprice: "$699"
    },
    {
        id : 0,
        img:bajartv,
        name: "Bajar fir TV 12",
        discound : "40% off",
        deal : "Deal",
        price: "$599",
        oldprice: "$699"
    },
    {
        id : 0,
        img:bajartv,
        name: "Bajar fir TV 12",
        discound : "40% off",
        deal : "Deal",
        price: "$599",
        oldprice: "$699"
    },
    {
        id : 0,
        img:bajartv,
        name: "Bajar fir TV 12",
        discound : "40% off",
        deal : "Deal",
        price: "$599",
        oldprice: "$699"
    },
    {
        id : 0,
        img:bajartv,
        name: "Bajar fir TV 12",
        discound : "40% off",
        deal : "Deal",
        price: "$599",
        oldprice: "$699"
    },
    {
        id : 0,
        img:bajartv,
        name: "Bajar fir TV 12",
        discound : "40% off",
        deal : "Deal",
        price: "$599",
        oldprice: "$699"
    },
]
const Elproduct = () => {
  return (
   <section id='elproduct'>
        <div className='container'>
            <div className='elproduct_wrapper'>
                {
                    arr.map((item)=>{
                        return(
                            
                            <div className='elproduct_box'>
                                <div className='elproduct_image'>
                                    <Link to = "imagethree">
                                        <img src={item.img} alt= " not found"/>
                                    </Link>
                                 </div>
                                <div className='elproduct_contant'>
                                    <Pera text={item.name} style="product_name"/>
                                    <div className='discounds'>
                                        <div className='discound'>
                                            <span className='dis'>{item.discound}</span>
                                        </div>
                                        <div className='deal'>
                                            <p className='del'>{item.deal}</p>
                                        </div>
                                    </div>
                                    <div className='price_box'>
                                        <span className='price'>{item.price}</span>
                                        <del className='oldprice'>{item.oldprice}</del>
                                    </div>
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

export default Elproduct