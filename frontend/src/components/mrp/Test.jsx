import { Box } from '@mui/material'
import React from 'react'

export default function Test() {
  return (
    <Box>
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent:'space-between',
                alignItems:'center',
                flexDirection: 'column',
            }}
        >
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-NH7DX2J" 
                height="100px" 
                width="100px" 
              >
              </iframe>
              sd
        </Box>
    </Box>
  )
}
