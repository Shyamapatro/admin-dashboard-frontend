import React, { useState, useEffect } from 'react'
import {
  Box,
  Grid,
  Container,
  Paper,
  Divider,
  IconButton,
 
} from '@mui/material'
import { ApiServices } from '../../Config/api'
import InputBase from '@mui/material/InputBase'
import NavBar from '../../components/NavBar/NavBar'
import Datatable from '../../components/Tables/AdminDataTable'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add';
import './admin.css'
import { NavLink } from 'react-router-dom'

function Admin () {
  const [admin, setAdmin] = useState({})
  const [block, setBlock] = useState({})
  const [unblock, setUnblock] = useState({})
  const [query, setQuery] = useState("")
  const adminAPI = () => {
    ApiServices.admin()
      .then(response => {
        var data = response.data.data.admins.rows;
     
      var block_user = response.data.data.user_blocked;
      var activedata=response.data.data.user_active;
      console.log(activedata)
      console.log(block_user)
      setAdmin(data)
      setBlock(block_user)
      setUnblock(activedata)
      setAdmin(data)
        
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  const onDelete = (id) => {
    console.log("rowdotid==============",id);
  
  }
 
  useEffect(() => adminAPI(), [])
  


  return (
    <>
      <Box sx={{ display: 'flex',hight: "100%"}}>
        <NavBar/>
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
              <Paper className="search-container" sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
                <Box
                  container
                  
                  className="search-box"
                  sx={{
                    m: 2,
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '95%',
                    background: 'whitesmoke',
                  }}
                >
                  
                  <InputBase
                    
                    sx={{ ml: 1, flex: 1 }}
                    className="search-box"
                    placeholder='Admin Management'
                    onChange={event => setQuery(event.target.value)} 
                    inputProps={{ 'aria-label': 'Admin Management' }}
                  />
                  <IconButton
                    type='button'
                    sx={{ p: '10px', mr: '30px' }}
                    aria-label='Admin'
                  >
                    <SearchIcon className="search-box"/>
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
                      // color: 'inherit'
                      color:'rgb(59 53 167)'
                    }
                  }}
                >
                  <Box
                    md={12}
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Paper />
                    Total 
                    <Divider orientation='vertical' sx={{ m: -2 }} flexItem />
                   {block.count+unblock.count}
                    <Paper />
                    <Paper />
                    Active
                    <Divider orientation='vertical' sx={{ m: -2 }} flexItem />
                    {unblock.count}
                    <Paper />
                    <Paper />
                    Block
                    <Divider orientation='vertical' sx={{ m: -2 }} flexItem />
                    {block.count}
                
                    <Paper />
                  </Box>

                  <Box md={6} sx={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <Box md={9}></Box>
                    <Box md={3}>
                      </Box>
                  </Box>
                </Box>

                <Datatable admin={admin}  onDelete={onDelete} query={query} adminAPI={adminAPI}/>
              </Paper>
            </Grid>
          </Container>
        </Box>
        
        <NavLink to="/admin/new" className='btn'>
        <AddIcon/>
</NavLink>
       
      </Box>
    </>
  )
}
export default Admin
