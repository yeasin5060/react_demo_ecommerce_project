import React from 'react'
import Minihead from '../../../../Component/Miniheading/Minihead'
import Pera from '../../../../Component/Pera/Pera'
import './CustomerSearchLibrary.css'
import { Link } from 'react-router-dom'

let arrlink = [ 
    {
        id : 1 ,
        text : "Recommended Topics"
    },
    {
        id : 2,
        text : "Where's my stuff "
    },
    {
        id : 3,
        text : "Shipping and Delivery "
    },
    {
        id :4 ,
        text : "Returns and Refunds "
    },
    {
        id : 5,
        text : "Managing Your Account "
    },
    {
        id : 6,
        text : " Security & Privacy"
    },
    {
        id :7 ,
        text : "Payment, Pricing and Promotions "
    },
    {
        id : 8,
        text : "Devices & Digital Solutions "
    },
    {
        id : 9,
        text : "Bajar Business Accounts "
    },
    {
        id : 10,
        text : " Large Items and Heavy-Bulky Services"
    },
    {
        id : 11,
        text : "Other topics & Help sites "
    },
]

let arritem = [ 
    {
        id : 1 ,
        head : 'Find a missing package that shows as "Delivered"',
        pera : "Most packages arrive on time, but, sometimes, the tracking may show as 'delivered' and you don't have your package."
    },
    {
        id : 2,
        head : " Late Deliveries",
        pera : "Most packages arrive on time. Orders sometimes show up after the estimated delivery date."
    },
    {
        id : 3,
        head : "Track your package ",
        pera : "You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking information."
    },
    {
        id : 4,
        head : "Check status of a refund ",
        pera : "You can check the status of your refund in Your Orders ."
    },
    {
        id : 5,
        head : "Find a missing item from your package ",
        pera : "If an item is missing from your package, it may have been shipped separately."
    },
    {
        id :6 ,
        head : "Replace an item ",
        pera : "If you received a damaged, defective, or incorrect item sold by Amazon, you can request a replacement for a small number of eligible items through Your Orders ."
    },
    {
        id : 7,
        head : "Cancel Items or Orders",
        pera : "You can cancel items or orders that haven't entered the shipping process yet."
    },
]

const CustomerSearchLibrary = () => {
  return (
    <section id='customersearch_library'>
        <div className='container'>
            <div className='customersearch_library_wrapper'>
                <div className='customersearch_library_search'>
                    <Minihead text="Search our help library" style="searchs_head"/>
                    <input className='search_input' type='search' placeholder='Type something like, "question about a charge"'/>
                </div>
                <div className='customersearch_library_help'>
                    <Minihead text="All help topics" style="help_head"/>
                    <div className='customersearch_library_help_wrapper'>
                        <div className='customersearch_library_all_topic_wrapper'>
                            {
                                arrlink.map((items , index) =>(
                                    <Link className='search_library_items' key={index} to = "links">{items.text}</Link>
                                ))
                            }
                        </div>
                        <div className='customersearch_library_all_topic_box_wrapper'>
                            {   
                                arritem.map((item , index) =>(
                                    <div key={index} className='customersearch_library_all_topic_box'>
                                        <h4 className='customersearch_library_all_topic_box_head'>
                                            {item.head}
                                        </h4>
                                        <Pera text={item.pera} style="customersearch_library_all_topic_box_pera "/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CustomerSearchLibrary