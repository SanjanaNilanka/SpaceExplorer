import React from 'react'
import TodayAPOD from '../apod/TodayAPOD';
import PrevAPOD from '../apod/PrevAPOD';
import CuriosityRoverBanner from '../mrp/CuriosityRoverBanner';
import HeroWithCover from '../hero/HeroWithCover';

export default function Home() {
  
  return (
    <div>
      <HeroWithCover/>
      <TodayAPOD />
      <PrevAPOD />
      <CuriosityRoverBanner/>
    </div>
  )
}
