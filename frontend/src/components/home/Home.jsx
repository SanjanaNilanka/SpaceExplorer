import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Divider, alpha, useTheme } from '@mui/material';
import axios from 'axios';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TodayAPOD from '../apod/TodayAPOD';
import Hero from '../hero/Hero';
import PrevAPOD from '../apod/PrevAPOD';
import CuriosityRoverBanner from '../mrp/CuriosityRoverBanner';
import HeroWithCover from '../hero/HeroWithCover';

export default function Home() {
  const [apodData, setApodData] = useState(null)
  const [isApodLoading, setIsApodLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod', {
          params: {
            api_key: '0SXmsWVzbEGjLof9QfGdwRS9S5r5Qj4w1n2Ew8Fb'
          }
        })
        setApodData(response.data);
        setIsApodLoading(false);
      } catch (err) {
        setApodData({
            title: 'Error',
            explanation: 'Something went wrong!',
            error: err
        });
        setIsApodLoading(false);
      }
    };

    fetchData();
  }, []);
  const theme = useTheme();
  return (
    <div>
      <HeroWithCover/>
      <TodayAPOD />
      <PrevAPOD />
      <CuriosityRoverBanner/>
    </div>
  )
}
