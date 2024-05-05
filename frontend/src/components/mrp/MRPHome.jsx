import React from 'react'
import CuriosityRoverHero from './CuriosityRoverHero'
import CuriosityModel from './CuriosityModel'
import Test from './Test'
import FeaturedVideo from './FeaturedVideo'
import MRPMini from './MRPMini'

export default function MRPHome() {
  return (
    <div>
      <CuriosityRoverHero />
      <CuriosityModel />
      <FeaturedVideo />
      <MRPMini/>
    </div>
  )
}
