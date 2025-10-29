import React from 'react'
import Banner from '../../components/Banner'
import ImpactSection from './ImpactSection'
import ImpactOfYourStay from '../AboutUs/ImpactOfYourStay'

const ImpactPage = () => {
  return (
    <>
     <Banner
    title={"Impact"}
    imageUrl={"https://www.matriarchafrica.com/wp-content/uploads/2018/12/Kruger-Walking-Safari.jpg"}
    />
    <ImpactSection/>
    <div className='bg-[#f6f1e9]'>
<ImpactOfYourStay/>
    </div>
    
    </>
  )
}

export default ImpactPage