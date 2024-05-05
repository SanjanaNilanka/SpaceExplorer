import { Box, Typography, alpha } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function CuriosityRoverHero() {
  return (
    <Box>
      <Box
        id="image"
        sx={(theme) => ({
        alignSelf: 'center',
        height: '100vh',
        backgroundImage:
            theme.palette.mode === 'light'
            ? 'url("/images/curiosity-cover.jpeg")'
            : 'url("/images/curiosity-cover.jpeg")',
        backgroundSize: 'cover',
        
        })}
      >
        <Box
          sx={(theme) => ({
            width: '100%',
            height: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
               ? `linear-gradient(${alpha('#fff', 1)}, ${alpha('#fff', 0.3)}, ${alpha('#fff', 1)})`
                : `linear-gradient(${alpha('#090e10', 1)}, ${alpha('#090e10', 0.3)}, ${alpha('#090e10', 1)})`,
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            p: { xs: '20px', sm: '6%',}
          })}
        >
            <Box sx={{fontFamily: 'Roboto', display: 'flex', flexDirection: 'column', marginTop: 4 }}>
                <Typography sx={{fontSize: 85, fontWeight: 900, marginBottom: '-50px'}}>Mars</Typography>
                <Typography sx={{fontSize: 85, fontWeight: 900, marginBottom: '-50px'}}>Curiosity</Typography>
                <Typography sx={{fontSize: 85, fontWeight: 900, marginBottom: '-50px'}}>Rover</Typography>
                <Typography sx={{fontSize: 85, fontWeight: 900}}>Project</Typography>
            </Box>
            <Box sx={{width:'35%', fontSize: 18, fontWeight: 400}}>
                Part of NASA's Mars Science Laboratory mission, at the time of launch, Curiosity was the largest and most capable rover ever sent to Mars at that time.
            </Box>
            <Typography sx={{mt: 2, display: 'flex', alignItems: 'center', gap: 1}}><FiberManualRecordIcon sx={{color: '#47da84'}}/>Active Mission</Typography>
        </Box>
      </Box>
      <Box
        sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-between',
            width: '100%',
            p: { sm: '0 6%', xs: '10%' },
            marginTop: 4,
            gap: 6,
        }}
      >
        <Box sx={{width:'50%', textAlign: 'justify'}}>
            Part of NASA's Mars Science Laboratory mission, Curiosity, was the largest and most capable rover ever sent to Mars when it launched in 2011. Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life.
        </Box>
        <Box sx={{ display:'flex', flexDirection: 'column', gap: 4}}>
            <Typography >
                <Typography sx={{fontSize: 14, fontWeight: 400}}>T Y P E</Typography>
                <Typography sx={{fontSize: 18, fontWeight: 500}}>Rover</Typography>
            </Typography>
            <Typography >
                <Typography sx={{fontSize: 14, fontWeight: 400}}>T A R G E T</Typography>
                <Typography sx={{fontSize: 18, fontWeight: 500}}>Rover</Typography>
            </Typography>
            
        </Box>
        <Box sx={{ display:'flex', flexDirection: 'column', gap: 4 }}>
            <Typography >
                <Typography sx={{fontSize: 14, fontWeight: 400}}>L A U N C H</Typography>
                <Typography sx={{fontSize: 18, fontWeight: 500}}>26th Nov, 2011</Typography>
            </Typography>
            <Typography >
                <Typography sx={{fontSize: 14, fontWeight: 400}}>L A N D I N G</Typography>
                <Typography sx={{fontSize: 18, fontWeight: 500}}>6th Aug, 2012</Typography>
            </Typography>
        </Box>
        <Box sx={{ display:'flex', flexDirection: 'column', gap: 4, width: '22%' }}>
            <Typography >
                <Typography sx={{fontSize: 14, fontWeight: 400}}>O B J E C T I V E</Typography>
                <Typography sx={{fontSize: 18, fontWeight: 500}}>Determine if Mars was ever able to support microbial life</Typography>
            </Typography>
        </Box>
        
      </Box>
      
    </Box>
  )
}
