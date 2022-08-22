import { Box, Grid, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
//import SideBar from '../../components/SideBar/SiderBar'
import Datatable from '../../components/Tables/Datatable'

function UserManagement() {
  return (
    <>
   <Box sx={{ display: 'flex' }}>
       <NavBar/>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
        
          <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
          <Grid item xs={12} >
                
                <Paper sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" color="initial">User Management</Typography>
                <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 10,
        },
      }}
    >
      <Box md={12} sx={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
     
      <Paper elevation={1} />Total 202<Paper />
      <Paper elevation={1} />Total 202<Paper />
      <Paper elevation={1} />Total 202<Paper />
      </Box>
      <Box md={6} > 
      color</Box>
    </Box>
                  <Datatable/>
                </Paper>
            </Grid>
       
          
          </Container>
        </Box>
      </Box>
   


  
 

  

      </>
  )
}
export default UserManagement