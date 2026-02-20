import React from 'react'
import Banner from '../../components/Banner'
import PackageList from '../../components/PackageList'
import ExperienceList from '../../components/ExperienceList'

const ExperienceLanding = () => {
  return (
      <div>
           <Banner
      title=" Africa Unfiltered "
        subtitle="Explore Africa’s top wildlife zones with trusted guides, meaningful culture, and scenery that feels real from arrival to farewell."
        imageUrl="/exparience-banner.webp"
      />
     <ExperienceList/>
    </div>
  )
}

export default ExperienceLanding