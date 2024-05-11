import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Modal, Typography, Link, useTheme, alpha, IconButton, Skeleton } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CopyrightIcon from '@mui/icons-material/Copyright';
import CloseIcon from '@mui/icons-material/Close';

const PrevAPOD = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (index) => {
    setCurrIndex(index);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const theme = useTheme()
  useEffect(() => {
    const fetchPrevData = async () => {
      try {
        const dates = getPastDates(4); // Get the previous 4 dates
        const promises = dates.map(date =>
          axios.get('https://api.nasa.gov/planetary/apod', {
            params: {
              api_key: '0SXmsWVzbEGjLof9QfGdwRS9S5r5Qj4w1n2Ew8Fb',
              date: date
            }
          })
        );

        const responses = await Promise.all(promises);
        const prevData = responses.map(response => response.data);
        setData(prevData);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchPrevData();
  }, []);

  const getPastDates = (days) => {
    const today = new Date();
    const pastDates = [];

    for (let i = 1; i <= days; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const formattedDate = date.toISOString().split('T')[0];
      pastDates.push(formattedDate);
    }

    return pastDates;
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = data[currIndex]?.hdurl;
    link.download = 'image.png'; // Change the file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (error) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return (
      <div>
        <Box sx={{margin:'0 6%'}}>
          <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '30px',
                marginBottom: '20px',
            }}
            
          >
            <Typography sx={{fontWeight:'bold', fontSize:30, color:'card.primary'}}>Previous APODs</Typography>
            <Button>View All</Button>
          </Box>
          <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                
                gap: 4,
            }}
          >
            <Box
              sx={{
                width: '22%',
                bgcolor: 'card.background',
                padding: '20px',
                borderRadius: '10px',
              }}
            >
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={50}/>
              <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
              <Skeleton variant="text" height={'200px'} width={'100%'} sx={{mt:-5, mb: -4}}/>
            </Box>
            <Box
              sx={{
                width: '22%',
                bgcolor: 'card.background',
                padding: '20px',
                borderRadius: '10px',
              }}
            >
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={50}/>
              <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
              <Skeleton variant="text" height={'200px'} width={'100%'} sx={{mt:-5, mb: -4}}/>
            </Box>
            <Box
              sx={{
                width: '22%',
                bgcolor: 'card.background',
                padding: '20px',
                borderRadius: '10px',
              }}
            >
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={50}/>
              <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
              <Skeleton variant="text" height={'200px'} width={'100%'} sx={{mt:-5, mb: -4}}/>
            </Box>
            <Box
              sx={{
                width: '22%',
                bgcolor: 'card.background',
                padding: '20px',
                borderRadius: '10px',
              }}
            >
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={50}/>
              <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
              <Skeleton variant="text" height={'200px'} width={'100%'} sx={{mt:-5, mb: -4}}/>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    height: '90%',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px',
  };

  

  return (
    <Box sx={{margin:'0 6%'}}>
      <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '30px',
            marginBottom: '20px',
        }}
        
      >
        <Typography sx={{fontWeight:'bold', fontSize:30, color:'card.primary'}}>Previous APODs</Typography>
        <Button>View All</Button>
      </Box>
      <Box
        sx={{
            display: { md: 'flex', xs: 'block', },
            justifyContent: 'space-between',
            flexDirection: { md: 'row', xs: 'column', },
            gap: 4,
        }}
      >
        {data.map((item, index) => (
            <Box
                key={index}
                sx={{
                    width: { md: '22%', xs: '100%', },
                    bgcolor: 'card.background',
                    padding: '20px',
                    borderRadius: '10px',
                    marginBottom: { md: 0, xs: 4, }
                }}
            >
              <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography sx={{color: `${theme.palette.mode === 'light'? 'primary.main':'primary.light'}`, fontWeight:400, fontSize:14}}>{item.date}</Typography>
                <Link sx={{color: `${theme.palette.mode === 'light'? 'primary.main':'primary.light'}`, fontWeight:400, fontSize:14, cursor: 'pointer'}} onClick={()=>handleOpen(index)}>Read About</Link>
                <Modal
                  sx={{outline: 'none', border: 'none'}}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  
                >
                  <Box sx={modalStyle}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 1}}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        {data[currIndex]?.title}
                      </Typography>
                      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <IconButton sx={{display: 'flex', alignItems: 'center'}} onClick={handleDownload}><FileDownloadIcon/></IconButton>
                        <IconButton sx={{display: 'flex', alignItems: 'center'}} onClick={handleClose}><CloseIcon/></IconButton>
                      </Box>
                      
                    </Box>
                    <Box
                      sx={{
                        overflowY: 'auto', 
                        scrollbarWidth: 'thin', 
                        scrollbarColor: `${alpha('#888', 0.8)} ${alpha('#f1f1f1', 0.8)}`, 
                        width: '100%',
                        height: '90%',
                        '&::-webkit-scrollbar-track': {
                          background: '#f1f1f1', 
                        },
                        '&::-webkit-scrollbar-thumb': {
                          background: '#888',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                          background: '#555',
                        },
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        gap:2,
                        pr: '5px'
                      }}
                    >
                      {data[currIndex].media_type === 'video' ? 
                      <iframe width="60%" height="100%" src={data[currIndex].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      
                      : 
                      <img style={{width:'60%', height:'100%', objectFit: 'cover', borderRadius:'5px' }} src={data[currIndex]?.hdurl} alt={data[currIndex]?.title} />
                      }
                      
                      <Typography id="modal-modal-description" sx={{ width: '40%', textAlign: 'justify' }}>
                      <Typography sx={{ fontWeight: 400, mb: 1, fontSize: '18px' }}>{data[currIndex]?.date}</Typography>
                        {data[currIndex]?.copyright &&
                          <Typography sx={{fontWeight:600, fontSize: '20px', mb: 1, display:'flex', alignItems: 'center'}}><CopyrightIcon/>&nbsp;{data[currIndex]?.copyright}</Typography>
                        }
                        
                        {data[currIndex]?.explanation}
                      </Typography>
                    </Box>
                    
                  </Box>
                </Modal>
              </Box>
              
              <Typography 
                  sx={{
                      fontSize: 18,
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      maxWidth: '100%',
                      marginBottom: '10px',
                  }}
                  title={item.title}
              >
                  {item.title}
              </Typography>
              {item.media_type === 'video' ?
              <iframe width="100%" height="200px" src={item.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              :
              <img style={{width:'100%', height: '200px', objectFit: 'cover', borderRadius:'5px' }} src={item.hdurl} alt={item.title} />
              }
              
                
            </Box>
        ))}
      </Box>
      
    </Box>
  );
};

export default PrevAPOD;
