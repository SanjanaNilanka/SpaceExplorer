import { Box, useTheme, Typography, Link, alpha, Skeleton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import axios from 'axios';


export default function TodayAPOD() {
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
  if (isApodLoading) {
    return (
      <div>
        <Box
          sx={{
            
            gap: 3,
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            bgcolor: 'card.background',
            padding: '20px',
            borderRadius: '10px',
            margin: '0 6%',
            backgroundImage:
              theme.palette.mode === 'light'
               ? `linear-gradient(${alpha('#fff', 1)}, ${alpha('#fff', 0.0)}, ${alpha('#fff', 1)})`
                : `linear-gradient(${alpha('#090e10', 1)}, ${alpha('#090e10', 0.0)}, ${alpha('#090e10', 1)})`,
          }}
        >
          <Box
            sx={{
              color: 'card.primary',
              fontSize: '40px',
              fontWeight: '700',
              display: { xs: 'block', md: 'flex', },
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
            }}
          >
            Astronomy Picture of the Day
            {/*<Button variant='outlined'>More</Button>*/}
          </Box>
          <Box
            sx={{
              display: { xs: 'block', md: 'flex', },
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'start',
              gap: 5
            }}
          >
            <Box
              sx={{
                width:'60%' ,
              }}
            >
              <Skeleton variant="text" width={'100%'} height={620} sx={{mt:-16, mb: -16}}/>
            </Box>
            <Box
              sx={{
                width: '40%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                flexDirection: 'column',
              }}
            >
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={50}/>
              <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'}/>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'}/>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'}/>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'}/>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'}/>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'}/>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'}/>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'}/>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'}/>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'}/>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'}/>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'}/>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'}/>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
  return (
    <div>
        <Box
          sx={{
            
            gap: 3,
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            bgcolor: 'card.background',
            padding: '20px',
            borderRadius: '10px',
            margin: '0 6%',
            backgroundImage:
              theme.palette.mode === 'light'
               ? `linear-gradient(${alpha('#fff', 1)}, ${alpha('#fff', 0.0)}, ${alpha('#fff', 1)})`
                : `linear-gradient(${alpha('#090e10', 1)}, ${alpha('#090e10', 0.0)}, ${alpha('#090e10', 1)})`,
          }}
        >
          <Box
            sx={{
              color: 'card.primary',
              fontSize: '40px',
              fontWeight: '700',
              display: { xs: 'block', md: 'flex', },
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
            }}
          >
            Astronomy Picture of the Day
            {/*<Button variant='outlined'>More</Button>*/}
          </Box>
          <Box
            sx={{
              display: { xs: 'block', md: 'flex', },
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'start',
              gap: 5
            }}
          >
            <Box
              sx={{
                width: { md: '60%', xs: '100%', } ,
              }}
            >
              {apodData?.media_type === 'video' ?
              <iframe width="100%" height="400px" src={apodData?.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              :
              <img src={apodData?.url} style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} alt={apodData?.url}/>
              }
              
            </Box>
                  
            <Box
              sx={{
                width: { md: '40%', xs: '100%', },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  display: { xs: 'block', md: 'flex', },
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                  color: 'primary.light',
                }}
              >
                <Typography sx={{color: `${theme.palette.mode === 'light'? 'primary.main':'primary.light'}`, fontWeight:400, fontSize:12}}>T O D A Y</Typography>
              </Box>
              <Box
                sx={{
                  color: 'card.secondary',
                  fontWeight: 700,
                  fontSize: 28,
                  marginTop: 0
                }}
              >{apodData?.title}</Box>
              <Box
                sx={{
                  textAlign: 'justify',
                  marginTop: 2
                }}
              >{apodData?.explanation}</Box>
            <Typography href="#" sx={{ marginTop: 2, display: 'flex', alignItems: 'center', fontSize: 16, fontWeight: 700 }}>
              <Link href='' color="primary.main" sx={{fontSize: 16, fontWeight: 700}}>Read More</Link>
              &nbsp;
              <ArrowCircleRightIcon sx={{ color: 'secondary.light' }} />
            </Typography>
            </Box>
          </Box>
            
        </Box>
    </div>
  )
}
