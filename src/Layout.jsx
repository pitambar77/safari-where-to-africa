import React from 'react'
import { Outlet,ScrollRestoration, useNavigation } from 'react-router-dom'
import Testimonial from './components/Testimonial'
import TalkExpert from './components/TalkExpert'
import Footer from './components/Footer'
import Partner from './components/Partner'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'


const Layout = () => {

  return (
    <>
   
    {/* <ScrollToTop />  */}
    <Header/>
    <Outlet/>
    <Testimonial/>
    <TalkExpert/>
    <Partner/>
    <Footer/>
    <ScrollRestoration/>
    </>
  )
}

export default Layout