import React from 'react'

const Productbox = ( {head , style}) => {
  return (
    <section id='product_box'>
        <div className='product_box_head'>
            <h3 className={style}>{head}</h3>
        </div>
        <div className='product_box_images'>
            <div className='image_box'>
                <div className='images'>
                    <Img source={img} alt="not found" />
                </div>
            </div>
        </div>
        <div className='image_link'>
            <Link className='shop' to ="shopnew">shop new</Link>
        </div>
    </section>
  )
}

export default Productbox