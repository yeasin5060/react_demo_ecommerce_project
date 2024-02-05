import React from 'react'
import './Sellgrowup.css'
import growup from '../../../../images/growimage.svg'
import { Link } from 'react-router-dom'
import { GiThreePointedShuriken } from "react-icons/gi";
import Subhead from '../../../../Component/Subheading/Subhead';
import Pera from '../../../../Component/Pera/Pera';
import { FaCheck } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";

const Sellgrowup = () => {
  return (
    <section id='sell_growup'>
        <div className='container'>
            <div className='sell_growup_box_wrapper'>
                <div className='sell_growup_contant_box'>
                    <div className='sell_growup_seller_btn'>
                        <GiThreePointedShuriken className='star_left' /><Link to = "seller">New Seller Incentives</Link><GiThreePointedShuriken className='star_right' />
                    </div>
                    <div className='sell_growup_contant_wrapper'>
                        <Subhead text="Over $50K in potential benefits" style="sell_growup_contant_heading"/>
                        <Pera text="Ready to sell? Launch your brand today with a powerful playbook for new sellers and over $50K in potential benefits." style="sell_growup_contant_pera"/>
                        <div className='sell_growup_check_'>
                            <div className='sell_growup_contant_check_box'>
                                <div className='sell_growup_contant_check_icons'>
                                    <FaCheck  className='sell_growup_check_icon'/>
                                </div>
                                <div className='sell_growup_contant_check_contant'>
                                    <Pera text="Get 5% back on your first $1,000,000 in branded sales" style="sell_growup_check_contant_pera"/>
                                </div>
                            </div>
                            <div className='sell_growup_contant_check_box'>
                                <div className='sell_growup_contant_check_icons'>
                                    <FaCheck  className='sell_growup_check_icon'/>
                                </div>
                                <div className='sell_growup_contant_check_contant'>
                                    <Pera text="Try FBA with free inbound shipping, storage, removals, and returns" style="sell_growup_check_contant_pera"/>
                                </div>
                            </div>
                            <div className='sell_growup_contant_check_box'>
                                <div className='sell_growup_contant_check_icons'>
                                    <FaCheck  className='sell_growup_check_icon'/>
                                </div>
                                <div className='sell_growup_contant_check_contant'>
                                    <Pera text="Get $50 credit for Sponsored Products CPC ads—bids are up to you" style="sell_growup_check_contant_pera"/>
                                </div>
                            </div>
                            <div className='sell_growup_contant_check_box'>
                                <div className='sell_growup_contant_check_icons'>
                                    <FaCheck  className='sell_growup_check_icon'/>
                                </div>
                                <div className='sell_growup_contant_check_contant'>
                                    <Pera text="Get a head start on brand protection, product reviews, and more" style="sell_growup_check_contant_pera"/>
                                </div>
                            </div>
                        </div>
                        <div className='sell_growup_contant_check_btn'>
                            <Link to = "learnmore">Learn More</Link>
                            <FaLocationArrow className='sell_growup_contant_check_arrow'/>
                        </div>
                    </div>
                </div>
                <div className='sell_growup_image_box'>
                    <img src={growup} alt="not found" />
                </div>
            </div>
            <div className='sell_growup_your_brand_wrapper'>
                <div className='sell_growup_your_brand_box'>
                    <Link to = "brandmainlink">Your brand + Bajar</Link>
                </div>
                <div className='sell_growup_your_brand_link_box'>
                    <div className='sell_growup_your_brand_link'>
                        <Link to = "brandlink">Your business at scale</Link>
                    </div>
                    <div className='sell_growup_your_brand_link'>
                        <Link to = "brandlink">Your business at scale</Link>
                    </div>
                    <div className='sell_growup_your_brand_link'>
                        <Link to = "brandlink">Your business at scale</Link>
                    </div>
                    <div className='sell_growup_your_brand_link'>
                        <Link to = "brandlink">Your business at scale</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sellgrowup