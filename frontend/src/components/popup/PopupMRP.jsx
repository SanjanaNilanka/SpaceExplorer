import React, { useState } from 'react'
import { Box, Modal, Typography, Link, useTheme, alpha, IconButton, Tooltip } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';


export default function PopupMRP({ data }) {
  //const [data, setData] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (index) => {
    setCurrIndex(index);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const theme = useTheme()
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = data[currIndex]?.hdurl;
    link.download = 'image.png'; // Change the file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
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
    <div>
      <Link sx={{color: `${theme.palette.mode === 'light'? 'primary.main':'primary.light'}`, fontWeight:400, fontSize:14, cursor: 'pointer'}} onClick={()=>handleOpen()}>Read More</Link>
      <Modal
        sx={{outline: 'none', border: 'none'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={modalStyle}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 1}}>
            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{color: 'secondary.main'}}>
              Image captured by {data?.rover.name} Rover's {data?.camera.full_name}&nbsp;|&nbsp;{data?.sol} Sol of {data?.rover.max_sol}
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
            <img style={{width:'75%', height:'100%', objectFit: 'cover', borderRadius:'5px' }} src={data?.img_src} alt={data?.id} />
            <Box id="modal-modal-description" sx={{ width: '25%', textAlign: 'right', display:'flex', justifyContent: 'space-between', flexDirection:'column' }}>
                
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'start', mb: 5}}>
                    <Typography sx={{fontWeight:400, fontSize: '14px', color: `${theme.palette.mode === 'light'? 'primary.main':'primary.light'}`}}>M I S S I O N &nbsp; D E T A I L S</Typography>
                    <Typography sx={{fontWeight:600, fontSize: '18px', display:'flex', textAlign: 'justify'}}>
                        curiosity Rover is launched on {data?.rover.launch_date} and its landing on {data?.rover.landing_date}. Mission is currently {data?.rover.status} mission. {data?.rover.total_photos} photos are captured by {data?.rover.name} rover in this mission between {data?.rover.landing_date} and {data?.rover.max_date}.
                    </Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'start', mb: 2}}>
                    <Typography sx={{fontWeight:400, fontSize: '14px', color: `${theme.palette.mode === 'light'? 'primary.main':'primary.light'}`}}>E A R T H &nbsp; D A T E</Typography>
                    <Typography sx={{fontWeight:600, fontSize: '20px', display:'flex'}}>{data?.earth_date}</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'start', mb: 2}}>
                    <Typography sx={{fontWeight:400, fontSize: '14px', color: `${theme.palette.mode === 'light'? 'primary.main':'primary.light'}`}}>C A P T U R E D &nbsp; B Y</Typography>
                    <Typography sx={{fontWeight:600, fontSize: '20px', display:'flex'}}>{data?.rover.name} Rover</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'start', mb: 0}}>
                    <Typography sx={{fontWeight:400, fontSize: '14px', color: `${theme.palette.mode === 'light'? 'primary.main':'primary.light'}`}}>C A M E R A &nbsp; N A M E</Typography>
                    <Typography sx={{fontWeight:600, fontSize: '20px', display:'flex', alignItems: 'center', gap: 1}}>
                        {data?.camera.name}
                        <Tooltip title={data?.camera.full_name} placement="right-start">
                            <InfoIcon />
                        </Tooltip>
                    </Typography>
                </Box>
            </Box>
        </Box>
        
        </Box>
      </Modal>
    </div>
  )
}
