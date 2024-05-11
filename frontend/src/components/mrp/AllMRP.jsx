import React, { useState, useEffect } from 'react';
import { Stack, Pagination, PaginationItem, Box,Typography, useTheme, Skeleton, } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AllMRPHero from './AllMRPHero';
import axios from 'axios';
import PopupMRP from '../popup/PopupMRP';
import { Link, useNavigate } from 'react-router-dom';


export default function AllMRP() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [earthDate, setEarthDate] = useState('2024-02-19');
  
  const fetchCuriosityPhotoData = async (earth_date) => {
    try {
    setIsLoading(true);
    const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
        params: {
        api_key: '0SXmsWVzbEGjLof9QfGdwRS9S5r5Qj4w1n2Ew8Fb',
        //sol: '4037',
        earth_date: earth_date
        }
    })
        
    const lastFourItems = response.data.photos;
    
    setData(lastFourItems);
    console.log(data)
    setIsLoading(false);
    } catch (err) {
    setError(err);
    setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCuriosityPhotoData(earthDate);
  }, []);

  const [currentPage, setCurrentPage] = useState(1); 
  
  const theme = useTheme();

  const [currIndex, setCurrIndex] = useState(0);
  
  const itemsPerPage = 20;
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setEarthDate(selectedDate);
    fetchCuriosityPhotoData(selectedDate);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const calculateStartIndex = (page) => {
    return (page - 1) * itemsPerPage;
  };

  const calculateEndIndex = (page) => {
    return Math.min(page * itemsPerPage, data.length);
  };

  const navigate = useNavigate

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const isLoggedinFromLocalStorage = localStorage.getItem('isLoggedin');
    if (isLoggedinFromLocalStorage === true || isLoggedinFromLocalStorage === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  if (!isLoggedIn) {
    window.location.pathname = '/sign-in';
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <AllMRPHero />
      <Box sx={{
        display: 'flex',
        
        justifyContent:'space-evenly',
        alignItems: 'center',
        padding: '0 6%',
        gap: 6,
        mt: 4,
        mb: 6,
      }}>
        <Typography variant='h4' sx={{color:'primary.main', fontWeight:700}}>Photos Captured By Curiosity in Mars</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        
        justifyContent:'center',
        alignItems: 'center',
        padding: '0 6%',
        gap: 2,
        mt: 4,
        mb: 4,
      }}>
        <Typography variant='h5'>Photos of Mars Captured On </Typography>
        <input
            type="date"
            value={earthDate}
            onChange={handleDateChange}
            style={{
                color: theme.palette.text.primary,
                fontSize: '18px',
                backgroundColor: theme.palette.primary.transperancy,
                border: `1px solid ${theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.paper}`,
                borderRadius: theme.shape.borderRadius,
                padding: '8px',
                outline: 'none',
                transition: 'border-color 0.2s ease-in-out',
                '&:hover': {
                borderColor: theme.palette.background.paper,
                },
                '&:focus': {
                borderColor: theme.palette.background.paper,
                }
            }}
        />
      </Box>
      
      
      <Stack spacing={2} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Pagination
          count={Math.ceil(data.length/20)}
          page={currentPage}
          color='primary'
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
      {isLoading ? 
        <Box
            sx={{
              display: 'flex',
              justifyContent:'space-evenly',
              alignItems: 'center',
              padding: '0 6%',
              gap: 6,
              mt: 4,
              flexWrap: 'wrap'
            }}
        >
            {[...Array(20)].map((_, index) => (
              <Box
                sx={{
                    width: '20%',
                    bgcolor: 'card.background',
                    padding: '20px',
                    borderRadius: '10px',
                }}
              >
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'30%'} />
                <Skeleton variant="text" sx={{ fontSize: '14rem', mt:-8, mb: -8 }} width={'100%'}/>
              </Box>
            ))}
        </Box>
        :
        <div>
          {data.length === 0 ? 
            <Box
              sx={{
              display: 'flex',
              justifyContent:'space-evenly',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 6%',
              gap: 2,
              mt: 4,
              flexWrap: 'wrap'
              }}
            >
              <Typography sx={{ color: 'primary.light', fontWeight: 400, fontSize: 16 }}>No Photos Captured By Curiosity in Mars on { earthDate }</Typography>
              <Typography sx={{ color: 'primary.light', fontWeight: 400, fontSize: 16 }}>Please Select Another Date</Typography>
              <Typography sx={{ color: 'primary.light', fontWeight: 400, fontSize: 16 }}>Select Date Between 2012-08-06 and 2024-02-19 </Typography>
            </Box>
          :
            <Box
                sx={{
                display: 'flex',
                justifyContent:'space-evenly',
                alignItems: 'center',
                padding: '0 6%',
                gap: 6,
                mt: 4,
                flexWrap: 'wrap'
                }}
            >
                {data.slice(calculateStartIndex(currentPage), calculateEndIndex(currentPage)).map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                          width: '20%',
                          bgcolor: 'card.background',
                          padding: '20px',
                          borderRadius: '10px',
                      }}
                    >
                      {/*<Typography sx={{color: 'primary.light', fontWeight:400, fontSize:12}}>C A P T U R E D&nbsp;&nbsp;&nbsp;&nbsp;D A T E</Typography>*/}
                      <Link 
                        onClick={()=> {setCurrIndex(index+((currentPage-1)*20))}}
                        style={{textDecoration: 'none'}}
                      >
                        <PopupMRP data={data[currIndex]}/>
                      </Link>
                      <Typography 
                          sx={{
                              fontSize: 18,
                              overflow: 'hidden',
                              whiteSpace: 'nowrap',
                              textOverflow: 'ellipsis',
                              maxWidth: '100%',
                              marginBottom: '10px',
                          }}
                          title={item.earth_date}
                      >
                          {/*item.earth_date*/}
                      </Typography>

                      <img style={{width:'100%', height: '200px', objectFit: 'cover', borderRadius:'5px' }} src={item.img_src} alt={item.title} />
                    </Box>
                ))}
            </Box>
          }
        </div>
        
      }
      <Stack spacing={2} sx={{display:'flex', alignItems:'center', justifyContent:'center', mt: 5, mb: 5}}>
        <Pagination
          count={Math.ceil(data.length/20)}
          page={currentPage}
          color='primary'
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
        
    </div>
  );
}
