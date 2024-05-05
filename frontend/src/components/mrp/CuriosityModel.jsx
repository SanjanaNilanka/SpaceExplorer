import { Box, Typography, alpha } from '@mui/material'
import React from 'react'

export default function CuriosityModel() {
  return (
    <div>
      <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px 6%',
            position: 'relative',
            height: '100vh'
        }}
      >
        <Typography
            sx={{
                color: 'card.primary',
                fontSize: '40px',
                fontWeight: '700',
                mb: '10px',
                mt: '30px',
            }}
        >
            Meet Curiosity
        </Typography>
        <iframe
            src="https://solarsystem.nasa.gov/gltf_embed/2398/?height=450&amp;amp;rotate=true&amp;amp;cc=true&amp;amp;fs=true&amp;amp;target=&amp;amp;orbit="
            title="Curiosity Rover 3D Model"
            allow="fullscreen"
            
                  style={{width: '100%', height: '100%', borderRadius:'20px', padding: '0 20%', backgroundColor:'#ebebeb', border: 'none'}}
        >
            Unable to render the provided source
        </iframe>
        
      </Box>
    </div>
  )
}
