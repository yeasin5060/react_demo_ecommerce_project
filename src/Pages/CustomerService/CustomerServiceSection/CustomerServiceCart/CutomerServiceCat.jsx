import React from 'react'
import Minihead from '../../../../Component/Miniheading/Minihead'
import { Link } from 'react-router-dom'
import './CustomerCart.css'
import cartone from '../../../../images/cartone.png'
import carttwo from '../../../../images/carttwo.png'
import cartthree from '../../../../images/cartthree.png'
import cartfour from '../../../../images/cartfour.png'
import cartfive from '../../../../images/cartfive.png'
import cartsix from '../../../../images/cartsix.png'
import cartseven from '../../../../images/cartseven.png'
import carteight from '../../../../images/carteight.png'
import cartnine from '../../../../images/cartnine.png'
import cartten from '../../../../images/cartten.png'
import cartaliven from '../../../../images/cartaliven.png'


let array = [ 
    {
        id : 1 ,
        img : cartone,
        name : "A delivery, order or return"
    },
    {
        id : 2 ,
        img : carttwo ,
        name : "Prime"
    },
    {
        id : 3 ,
        img :  cartthree,
        name : "Payment, charges or gift cards "
    },
    {
        id : 4 ,
        img : cartfour ,
        name : " Address, security & privacy "
    },
    {
        id : 5 ,
        img : cartfive ,
        name : "Memberships, subscriptions or communications"
    },
    {
        id : 6 ,
        img : cartsix ,
        name : "Kindle, Fire, Alexa or other Amazon devices "
    },
    {
        id : 7 ,
        img : cartseven ,
        name : "eBooks, Prime Videos, Music or Games"
    },
    {
        id : 8 ,
        img : carteight ,
        name : "Accessibility "
    },
    {
        id : 9 ,
        img : cartnine ,
        name : "Something else "
    },
    {
        id : 10 ,
        img : cartten ,
        name : "Login & password "
    },
    {
        id : 11 ,
        img : cartaliven ,
        name : "Report Something Suspicious "
    },
]

const CutomerServiceCat = () => {
  return (
    <section id='customer_service_cart'>
        <div className='container'>
            <div className='cutomer_service_cart_wrapper'>
                <div className='cutomer_service_contant'>
                    <Minihead text="Welcome to Amazon Customer Service" style="customer_service_head"/>
                    <h4 className='customer_service_minihead'>What would you like help with today? You can quickly take care of most things here, or connect with us when needed.</h4>
                </div>
                <div className='customer_service_all_cart_wrapper'>
                    {
                        array.map((item , index)=>(
                            <div key={index} className='customer_service_carts'>
                                <Link className="customer_cart_link" to = "cart">
                                    <div className='customer_service_carts_image_box'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className='cart_name_box'>
                                        <h4 className='cart_name'>{item.name}</h4>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default CutomerServiceCat