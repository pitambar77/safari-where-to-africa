import React from 'react'
import Banner from '../../components/Banner'
import PackageList from '../../components/PackageList'

const PackageLanding = () => {
  return (
    <div>
           <Banner
      title="Explore our Packages "
        subtitle="World Elephant Day 2025 unites experts and citizens to safeguard matriarchs, memories, and habitat. Discover why this mission matters and learn ways to help. "
        imageUrl="https://www.tatapower.com/adobe/dynamicmedia/deliver/dm-p-oid--xoiKJFyY4kqwBXocriZrmRglbhyjMgNeoZG4whF-UwrRwMKccPcsDJ-OoCe9x0BA3MOy8_FdN0QieFcTr5u8FPlgOzA_ZV5IaZZbTwLln3Dy6e8MDh5L8q__QZtjkFNpdS-f4KHLbhktTWvlg92A26pVti3qQljifkBdVKIvwoA/body-image-02.png?preferwebp=true&quality=85"
      />
      <PackageList/>
    </div>
  )
}

export default PackageLanding