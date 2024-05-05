import { Box, Typography } from '@mui/material'
import React from 'react'

export default function FeaturedVideo() {
  return (
    <div>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            padding: '0 6%',
            gap: 6,
            mt: 4
        }}>
            <Box
                sx={{
                    display: { xs: 'block', md: 'flex', },
                    flexDirection: 'column',
                    justifyContent: 'start',
                    width: '40%',
                    height: '330px',
                    alignItems: 'start',
                    gap: 2,
                    
                }}
            >
                <Typography sx={{fontSize: 30, color:'primary.main', fontWeight: 700}}>
                    Landing Site: Gale Crater
                </Typography>   
                <Typography sx={{textAlign:'justify'}}>
                    Curiosity explores Gale Crater and acquires rock, soil, and air samples for onboard analysis. The car-size rover is about as tall as a basketball player and uses a 7 foot-long arm to place tools close to rocks selected for study. Curiosity's large size allows it to carry an advanced kit of 10 science instruments. It has tools including 17 cameras, a laser to vaporize and study small pinpoint spots of rocks at a distance, and a drill to collect powdered rock samples. It hunts for special rocks that formed in water and/or have signs of organics.
                </Typography>   
                <Typography sx={{textAlign:'justify'}}>
                    The Curiosity rover has taught us a lot about the history of Mars and its potential to support life. Take a tour of its landing site, Gale Crater. Credit NASA/JPL-Caltech
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '60%',
                    height: '330px'
                }}
            >
                <iframe aria-label="iframe" width="100%" height="100%" src="https://www.youtube.com/embed/Q-uAz82sH-E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" title="A Guide to Gale Crater" id="Q-uAz82sH-E" data-gtm-yt-inspected-13="true"></iframe>
                        
            </Box>
        </Box>
    </div>
  )
}
