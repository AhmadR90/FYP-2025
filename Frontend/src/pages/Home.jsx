import React from 'react'
 import PlantSlider from '../Components/Slider'
import HeroSection from '../Components/HeroSection'
import PlantImportance from '../Components/PlantsImportance'


const Home = () => {
  return (
    <div>
      {/* <ImageGetter/> */}
      <PlantSlider/>
      <HeroSection/>
       <PlantImportance/>
    </div>
  )
}

export default Home
