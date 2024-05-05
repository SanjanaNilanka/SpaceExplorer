import React, { useState, useEffect } from 'react'
import { useTheme } from '@mui/material';
import axios from 'axios';
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
