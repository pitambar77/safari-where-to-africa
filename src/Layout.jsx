import React from 'react'
import { Outlet } from 'react-router-dom'
import Testimonial from './components/Testimonial'
import TalkExpert from './components/TalkExpert'
import Footer from './components/Footer'
import Partner from './components/Partner'
import Header from './components/Header'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Testimonial/>
    <TalkExpert/>
    <Partner/>
    <Footer/>
    </>
  )
}

export default Layout