import React from 'react'
import './Sellvideo.css'
import Minihead from '../../../../Component/Miniheading/Minihead'
import Head from '../../../../Component/Heading/Head'
import Pera from '../../../../Component/Pera/Pera'

const Sellvideo = () => {
  return (
    <section id='sell_video'>
        <div className='container'>
            <div className='sell_video_wrapper'>
                <div className='sell_video_box'>
                    <iframe className='sell_video_youtube' src="https://www.youtube.com/embed/zie_xSa2oRc?si=F-gLImzIXNw0SGgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='sell_video_contant_box'>
                    <div className='sell_video_contant'>
                        <Minihead text="Hope and Henry" style="sell_video_contant_box_head"/>
                        <Minihead text='"I’ve actually been really impressed—and kind of surprised, quite frankly—at how much Amazon has helped us build the brand; not just on Amazon, but outside of Bajar."' style="sell_video_contant_box_head_pera"/>
                    </div>
                    <div className='sell_video_reting_wrapper'>
                        <div className='sell_video_reting_flex'>
                            <div className='sell_video_reting_one'>
                                <Head text = "74%" style="sell_video_reting_head"/>
                                <Pera text="of Amazon Customers use Amazon to discover new products or brands" style="sell_video_reting_pera"/>
                            </div>
                            <div className='sell_video_reting_one'>
                                <Head text = "500k" style="sell_video_reting_head"/>
                                <Pera text="brands are in Brand Registry, unlocking our powerful tools" style="sell_video_reting_pera"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sellvideo