import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <>
        <Header/>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Main