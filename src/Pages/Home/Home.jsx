import React from 'react'
import Banar from './HomeSection/Baner/Banar'
import Homeproduct from './HomeSection/Homeproduct/Homeproduct'
import Moviestv from './HomeSection/Movies_tv/Moviestv'
import Books from './HomeSection/Books/Books'
import Projuctgorup from './HomeSection/Projuctgroup/Projuctgorup'
import Bodyproduct from './HomeSection/Bodyproduct/Bodyproduct'
import Pcproduct from './HomeSection/Pcproduct/Pcproduct'
import Customer from './HomeSection/Customerproduct/Customer'

const Home = () => {
  return (
    <>
      <Banar/>
      <Homeproduct/>
      <Moviestv/>
      <Books/>
      <Projuctgorup/>
      <Bodyproduct/>
      <Pcproduct/>
      <Customer/>
    </>
  )
}

export default Home