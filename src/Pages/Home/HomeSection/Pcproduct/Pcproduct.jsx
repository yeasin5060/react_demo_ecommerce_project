import React, { useEffect, useState } from 'react'
import Minihead from '../../../../Component/Miniheading/Minihead'
import Img from '../../../../Component/image/img'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Pcproduct.css'
import proplus from '../../../../images/proplus.jpg'

let arr = [
    {
        img: proplus
    },
    {
        img: proplus
    },
    {
        img: proplus
    },
    {
        img:proplus
    },
    {
        img: proplus
    },
    {
        img: proplus
    },
    {
        img: proplus
    },
    {
        img: proplus
    },
    {
        img: proplus
    },
    {
        img: proplus
    },
    {
        img: proplus
    },
]

const Pcproduct = () => {
    /*let [ pcProduct ,setPcProduct] = useState()

    useEffect ( ()=>{
        let pc = async ()=>{
            let data = await axios.get(arr)
            setPcProduct(data.data)
        }
        pc()
    },[])
    console.log(pcProduct)*/

  return (
    <section id='pcproduct'>
        <div className='container'>
            <div className='pcproduct_wrapper'>
            <Minihead text="Popular products in PC internationally" style="pc_product"/>
            <div className='pc_images_wrapper'>
                    {
                        arr.map((item) =>{
                            return(
                               <>
                                <Link to ="imagestwo">
                                    <Img source={item.img} alt="not found"/>
                                </Link>
                               </>
                             )
                        })
                    }
                </div>
          </div>
        </div>
    </section>
  )
}

export default Pcproduct