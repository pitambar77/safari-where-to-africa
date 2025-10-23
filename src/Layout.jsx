import React from 'react'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
import Testimonial from './components/Testimonial'
import TalkExpert from './components/TalkExpert'
import Footer from './components/Footer'
import Partner from './components/Partner'

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