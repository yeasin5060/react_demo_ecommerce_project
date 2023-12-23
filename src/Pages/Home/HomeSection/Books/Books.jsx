import React from 'react'
import './Books.css'
import Minihead from '../../../../Component/Miniheading/Minihead'
import Img from '../../../../Component/image/img'
import books from '../../../../images/books_one.jpg'
import { Link } from 'react-router-dom'


const Books = () => {
  return (
    <section id='books'>
        <div className='container'>
            <div className='books_wrapper'>
               <Minihead text="Best Sellers in Books" style="bookss"/>
               <div className='books_image_wraaper'>
                <Link to ="booksone">
                  <Img source={books} alt="not found"/>
                </Link>
                <Link to ="booksone">
                  <Img source={books} alt="not found"/>
                </Link>
                <Link to ="booksone">
                  <Img source={books} alt="not found"/>
                </Link>
                <Link to ="booksone">
                  <Img source={books} alt="not found"/>
                </Link>
                <Link to ="booksone">
                  <Img source={books} alt="not found"/>
                </Link>
                <Link to ="booksone">
                  <Img source={books} alt="not found"/>
                </Link>
                <Link to ="booksone">
                  <Img source={books} alt="not found"/>
                </Link>
                <Link to ="booksone">
                  <Img source={books} alt="not found"/>
                </Link>
                <Link to ="booksone">
                  <Img source={books} alt="not found"/>
                </Link>
                <Link to ="booksone">
                  <Img source={books} alt="not found"/>
                </Link>
                <Link to ="booksone">
                  <Img source={books} alt="not found"/>
                </Link>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Books