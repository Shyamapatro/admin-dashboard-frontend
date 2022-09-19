import React, { useState, useEffect } from 'react'
import { Box, Grid, Container, Paper, Divider, IconButton } from '@mui/material'
import { ApiServices } from '../../Config/api'
import InputBase from '@mui/material/InputBase'
import NavBar from '../../components/NavBar/NavBar'
import Datatable from '../../components/Tables/NotificationDataTable'
// import SearchBar from "material-ui-search-bar";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import './notification.css'
import { NavLink } from 'react-router-dom'



function Notification () {
//get all api
const [notification, setNotification] = useState({})
const [query, setQuery] = useState("")
const notificationAPI = () => {
    ApiServices.notification()
      .then(response => {
        var data = response.data.data.rows
        console.log(data)
        setNotification(response.data.data.rows)
       
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  useEffect(() => notificationAPI(), [])
 
 
  const onDelete = (id, record) => {
    console.log("rowdotid==============",id);
    console.log("rowwwwwww=============",record);
  }
  const onGet = (id, record) => {
    console.log("rowdotid==============",id);
    console.log("rowwwwwww=============",record);
  }
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <NavBar />
        <Box
          component='main'
          sx={{
           
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Container maxWidth='lg' sx={{ mt: 12 }}>
            <Grid item xs={12}>
              <Paper className="search-container" sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
                <Box
                className='search-box'
                  container
                  md={12}
                  sx={{
                    m: 2,
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '95%',
                    background: 'whitesmoke',
                      flex: 0.95
                  }}
                >


                  <InputBase
                  className='search-box'
                    sx={{ ml: 1, flex: 1 }}
                    placeholder='Notification'
                    onChange={event => setQuery(event.target.value)} 
                                   />

                 
                   <IconButton

                    type='button'
                    sx={{ p: '10px', mr: '30px' }}
                    aria-label='Notification'
                   
                  >
                    <SearchIcon  />
                  </IconButton>
                  
                  
       
                </Box>
                <Divider />
          
                <Datatable  notification={notification} onDelete={onDelete} notificationAPI={notificationAPI} onGet={onGet} query={query}/> 
              </Paper>
            </Grid>
          </Container>
        </Box>
        <NavLink to="/notification/add-new-notification" className='btn'>
        <AddIcon/>
</NavLink>
        </Box>
    </>
  )
}
export default Notification
