import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Link, Typography } from '@mui/material';

export default function MRPMini() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrevData = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
          params: {
            api_key: '0SXmsWVzbEGjLof9QfGdwRS9S5r5Qj4w1n2Ew8Fb',
            sol: '1000'
          }
        })
          
        const lastFourItems = response.data.photos.slice(-4);

        setData(lastFourItems);
        console.log(data)
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchPrevData();
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Box sx={{margin:'50px 6%'}}>
      <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
        }}
        
      >
        <Typography sx={{fontWeight:'bold', fontSize:30, color:'card.primary'}}>Photos Captured By Curiosity In Mars</Typography>
        <Link href='/mrp'>View All</Link>
      </Box>
      <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            
            gap: 4,
        }}
      >
        {data.map((item, index) => (
            <Box
                key={index}
                sx={{
                    width: '25%',
                    bgcolor: 'card.background',
                    padding: '20px',
                    borderRadius: '10px',
                }}
            >
                <Typography sx={{color: 'primary.light', fontWeight:400, fontSize:12}}>C A P T U R E D&nbsp;&nbsp;&nbsp;&nbsp;D A T E</Typography>
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
                    {item.earth_date}
                </Typography>

                <img style={{width:'100%', height: '200px', objectFit: 'cover', borderRadius:'5px' }} src={item.img_src} alt={item.title} />
            </Box>
        ))}
      </Box>
      
    </Box>
  );
}
