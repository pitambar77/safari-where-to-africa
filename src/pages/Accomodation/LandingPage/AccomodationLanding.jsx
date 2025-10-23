import React from 'react'
import Banner from '../../../components/Banner'
import Overview from '../../../components/Overview'
import SafariList from '../../../components/SafariList'

const AccomodationLanding = () => {
  return (
   <>
    <Banner
      title="Explore our Africa "
        subtitle="World Elephant Day 2025 unites experts and citizens to safeguard matriarchs, memories, and habitat. Discover why this mission matters and learn ways to help. "
        imageUrl="https://www.tatapower.com/adobe/dynamicmedia/deliver/dm-p-oid--xoiKJFyY4kqwBXocriZrmRglbhyjMgNeoZG4whF-UwrRwMKccPcsDJ-OoCe9x0BA3MOy8_FdN0QieFcTr5u8FPlgOzA_ZV5IaZZbTwLln3Dy6e8MDh5L8q__QZtjkFNpdS-f4KHLbhktTWvlg92A26pVti3qQljifkBdVKIvwoA/body-image-02.png?preferwebp=true&quality=85"
      />

         <Overview
   title='Welcome To Africa'
   subtitle='African landscapes parading with the circle of life promise magical moments unlike any you have imagined before. You will find them...'
   description='Here at Newmark, we have an incredible variety of restaurants and bars across our beautiful properties, from ocean-side dining to city-chic Asian tapas and whimsical bougainvillea-clad courtyards. Find out more information below'
   />

<SafariList/>

   </>
   
  )
}

export default AccomodationLanding