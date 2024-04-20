import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import './Header.css'
import Pera from '../../Component/Pera/Pera';
import Nanohead from '../../Component/Nanohead/Nanohead';
import { useSelector, useDispatch } from 'react-redux'
import { customers } from '../../userslice';
import { getDatabase, ref, onValue , set , push ,remove } from "firebase/database";

const Header = () => {
    const data = useSelector((state) => state.userdata.value)
    let [customerList , setCustomerList] = useState([])
    const db = getDatabase();
    let deli =[
        {
            text : "deliver to"
        }
    ]
    /*let [location , setLocation] = useState()

    useEffect(()=>{
        let loca =async ()=>{
            let res = await axios.get(deli)
            console.log(res.data)
        }
        loca()
    },[])*/
      // All user data read operation 
      useEffect(()=>{
        const userListRef = ref(db, 'customerdata');
            onValue(userListRef, (snapshot) => {
               let array = []
            snapshot.forEach((item)=>{
                if(data.uid != item.key){
                    array.push({...item.val(),id:item.key})
                }
            })
            setCustomerList(array)
        });
    },[])

    console.log(data)
    console.log(customerList);

  return (
    <section id='header'>
        <div className='container'>
            <div className='header_wrapper'>
                <div className='header_logo_location'>
                    <div className='header_logo'>
                        <img src="images/bajar_logo.jpg" alt="not found" />
                    </div>
                    <div className='header_location'>
                       <Pera text="deliver to" style="location"/> 
                       <h4 className='bd'>bangladesh</h4>
                    </div>
                </div>
                <div className='header_search'>
                    <input className='search' type='search' placeholder='search bajar'/>
                </div>
                <div className='en_sing_order_cart'>
                    <ul className='header_list'>
                        <li>
                            <NavLink className='en' to='en'>en</NavLink>
                        </li>
                        <li>
                            <NavLink to='sgin'>sign in</NavLink>
                        </li>
                        <li>
                            <NavLink to='order'>order</NavLink>
                        </li>
                        <li>
                            <NavLink to='cart'>cart</NavLink>
                        </li>
                        <li>
                            <NavLink to='login'>login</NavLink>
                        </li>
                    </ul>
                </div>
                    {
                         customerList && customerList.length > 0
                         ?
                             customerList.map((item , index)=>(
                             <div key={index} className='heder_profile_and_customer_name_box'>
                                 <div className='heder_profile_box'>
                                     <img src={item.customerPhoto} alt="not found" />
                                 </div>
                                 <Nanohead text={item.customerName} style="heder_customer_name"/>
                             </div>
                         ))
                         :
                         <h1></h1>
                    }
            </div>
        </div>
    </section>
  )
}

export default Header