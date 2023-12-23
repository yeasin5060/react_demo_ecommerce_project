import React from 'react'
import './Movies.css'
import Img from '../image/img'
import movies from '../../images/movies_one.jpg'
import { Link } from 'react-router-dom'

const Movies = ({style,head}) => {
  return (
    <div className='movies_tv_wrapper'>
        <div className='movies_tv_head'>
            <h3 className={style}>{head}</h3>
        </div>
        <div className='movies'>
          <Link to="movies">
            <Img source={movies} alt="not found"/>
          </Link>
          <Link to="movies">
            <Img source={movies} alt="not found"/>
          </Link>
          <Link to="movies">
            <Img source={movies} alt="not found"/>
          </Link>
          <Link to="movies">
            <Img source={movies} alt="not found"/>
          </Link>
          <Link to="movies">
            <Img source={movies} alt="not found"/>
          </Link>
          <Link to="movies">
            <Img source={movies} alt="not found"/>
          </Link>
          <Link to="movies">
            <Img source={movies} alt="not found"/>
          </Link>
          <Link to="movies">
            <Img source={movies} alt="not found"/>
          </Link>
          <Link to="movies">
            <Img source={movies} alt="not found"/>
          </Link>
          <Link to="movies">
            <Img source={movies} alt="not found"/>
          </Link>
        </div>
    </div>
  )
}

export default Movies