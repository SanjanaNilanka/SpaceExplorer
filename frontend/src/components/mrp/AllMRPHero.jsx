import { Box, Button, Typography, alpha, useTheme, Link } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function AllMRPHero() {
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
      
      
    </Box>
  )
}
