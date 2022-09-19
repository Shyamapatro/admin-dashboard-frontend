import React, { useState, useEffect } from 'react'
import { Box, Grid, Container, Paper, Divider, IconButton } from '@mui/material'
import { ApiServices } from '../../Config/api'
import InputBase from '@mui/material/InputBase'
import NavBar from '../../components/NavBar/NavBar'
import Datatable from '../../components/Tables/UserDataTable'
import SearchIcon from '@mui/icons-material/Search'

function UserManagement () {

  const [user, setUser] = useState({})
  const [block, setBlock] = useState({})
  const [total, setTotal] = useState({})
  const [unblock, setUnblock] = useState({})
  const [query, setQuery] = useState("")
  const onDelete = (id) => {
    console.log("rowdotid==============",id);
   
  }
  const onGet = (id) => {
    console.log("rowdotid==============",id);
   
  }
  
   
  const userAPI = () => {
    ApiServices.user()
      .then(response => {
        var data = response.data.data.users.rows;
        console.log("hhhh",data)
       
        var block_user = response.data.data.user_blocked;
        var activedata=response.data.data.user_active
        console.log(response.data.data)
        setUser(data)
        setBlock(block_user)
        setUnblock(activedata)
        setTotal(response.data.data.users)

      })
      .catch(error => {
        console.log(error.response)
      })
  }

  useEffect(() => userAPI(), [])

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
          <Container maxWidth='lg' sx={{ mt: 12, mb: 4 }}>
            <Grid item xs={12}>
              <Paper sx={{ p: 0, display: 'flex', flexDirection: 'column'  }} className="search-container">
                <Box
                 className="search-box"
                  container
                  sx={{
                    m: 2,
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '95%',
                    background: 'whitesmoke',

                  }}
                >
                  
                  {/* search box functionality */}
                  <InputBase
                    className="search-box"
                    sx={{ ml: 1, flex: 1 }}
                    placeholder='User Management'
                    inputProps={{ 'aria-label': 'User Management' }}
                    onChange={event => setQuery(event.target.value)}
                  />
                  <IconButton
                    type='button'
                    sx={{ p: '10px', mr: '30px' }}
                    aria-label='UserManagement'
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
                <Divider />
                <Box
                  sx={{
                    background: 'whitesmoke',
                    display: 'flex',
                    flexDirection: 'row',

                    '& > :not(style)': {
                      my: 3,
                      width: '100%',
                      height: 10,
                     
                    }
                  }}
                >
                  <Box
                    md={12}
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                       color:'rgb(59 53 167)'
                    }}
                  >
                    <Paper/>

                    Total
                    <Divider orientation='vertical' sx={{ m: -2 }} flexItem />
                    {total.count}
                  
                    <Paper />
                    Active
                    <Divider orientation='vertical' sx={{ m: -2 }} flexItem />
                    {unblock.count-block.count}
                    <Paper />
                    <Paper />
                    Block
                    <Divider orientation='vertical' sx={{ m: -2 }} flexItem />
                    {block.count}
                    <Paper />
                  </Box>
                  <Box md={6}></Box>
                </Box>
                <Datatable user={user} query={query} onDelete={onDelete} userAPI={userAPI} onGet={onGet} />
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}
export default UserManagement
