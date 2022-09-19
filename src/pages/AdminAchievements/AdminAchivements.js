import React, { useState, useEffect } from 'react'
import { Box, Grid, Container, Paper, Divider, IconButton } from '@mui/material'
import { ApiServices } from '../../Config/api'
import InputBase from '@mui/material/InputBase'
import NavBar from '../../components/NavBar/NavBar'
import Datatable from '../../components/Tables/AdminAchivementDataTable'
import SearchIcon from '@mui/icons-material/Search'

function AdminAchivements () {
  const [achivements, setAchivements] = useState({})
  const [query, setQuery] = useState("")
  const AchivementsAPI = () => {
    ApiServices.adminAchivement()
      .then(response => {
        var data = response.data.data.rows
        console.log(data)
        setAchivements(data)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  const onDelete = (id) => {
    console.log("rowdotid==============",id);
  
  }
  useEffect(() => AchivementsAPI(), [])

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <NavBar />
        <Box
          component='main'
          sx={{
            // backgroundColor: theme =>
            //   theme.palette.mode === 'light'
            //     ? theme.palette.grey[100]
            //     : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Container maxWidth='lg' sx={{ mt: 12, mb: 4 }}>
            <Grid item xs={12}>
              <Paper  className="search-container" sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
                <Box
                  container
                  className="search-box"
                  sx={{
                    m: 2,
                    p: '2px 4px',
                    display: 'flex',
                    background: 'whitesmoke',
                    alignItems: 'center',
                    width: '95%'
                  }}
                >
                  <InputBase
                  className="search-box"
                    sx={{ ml: 1, flex: 1 }}
                    placeholder='Admin Management'
                    onChange={event => setQuery(event.target.value)} 
                    inputProps={{ 'aria-label': 'Admin Management' }}
                  />
                  <IconButton
                    type='button'
                    sx={{ p: '10px', mr: '30px' }}
                    aria-label='AdminAchivements'
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',

                    '& > :not(style)': {
                      my: 3,
                      width: '100%',
                      height: 10,
                      color: 'inherit'
                    }
                  }}
                >
                  
                  
                </Box>
                 <Datatable achivements={achivements}  query={query} onDelete={onDelete} AchivementsAPI={AchivementsAPI}/>
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}
export default AdminAchivements
