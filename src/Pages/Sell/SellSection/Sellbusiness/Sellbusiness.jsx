import React from 'react'
import './Sellbusiness.css'
import Subhead from '../../../../Component/Subheading/Subhead'
import Pera from '../../../../Component/Pera/Pera'
import { Link } from 'react-router-dom'
import Minihead from '../../../../Component/Miniheading/Minihead'
import { IoPlayCircleSharp } from "react-icons/io5";
import profileamazon from '../../../../images/profileamazon.jpg'

const Sellbusiness = () => {
  return (
    <section id='sell_besiness'>
        <div className='container'>
            <div className='sell_business_wrapper'>
                <div className='sell_business_wrapper_conrant_box'>
                    <div className='sell_business_conrant_box'>
                        <Subhead text="Your business at scale" style="sell_business_conrant_heading"/>
                        <Pera text="Amazon customers buy roughly 7,400 products per minute from U.S. sellers. Build, grow, and scale your brand with our innovative toolkit: world-class logistics, a proven customer experience, rich data insights, and cutting-edge advertising & marketing solutions. This is your path toward profitability." style="sell_business_conrant_pera"/>
                        <div className='sell_business_conrant_button_box_flex'>
                            <div className='sell_business_conrant_link_box'>
                                <Link className='sell_business_conrant_link' to="explorepricing">Explore pricing</Link>
                            </div>
                            <div className='sell_business_conrant_button_box'>
                                <button className='sell_business_conrant_button'><IoPlayCircleSharp className='sell_business_conrant_button_box_play' />watch video</button>
                            </div>
                        </div>
                    </div>
                    <div className='sell_business_wrapper_republic_box'>
                        <Minihead text="new republic" style="sell_business_wrapper_republic_box_head"/>
                        <Pera text='“When we launched on Amazon, I had expectations that Amazon would be about 10% to 20% of our total business. Within the first six months, it was 50%. It just exploded. And it really changed the way I thought about the future of our business.”' style="sell_business_wrapper_republic_box_pera"/>
                        <div className='sell_business_wrapper_republic_box_profile_flex'>
                            <div className='sell_business_wrapper_republic_profile_image_box'>
                                <img src={profileamazon} alt="not found" />
                            </div>
                            <div className='sell_business_wrapper_republic_profile_user_box'>
                                <h4 className='sell_business_wrapper_republic_profile_user'>Dee Murthy</h4>
                                <span className='sell_business_wrapper_republic_profile_user_position'>Co-Founder</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sell_business_wrapper_video_box'>
                <iframe src="https://www.youtube.com/embed/NrmMk1Myrxc?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sellbusiness