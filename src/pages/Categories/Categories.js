import React, { useState, useEffect } from 'react'
import { Box, Grid, Container, Paper, Divider, IconButton } from '@mui/material'
import { ApiServices } from '../../Config/api'
import InputBase from '@mui/material/InputBase'
import NavBar from '../../components/NavBar/NavBar'
import Datatable from '../../components/Tables/CategoryDataTable'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add';
import './category.css'
import { NavLink } from 'react-router-dom'


function Categories () {
  const [category, setCategory] = useState({})
  const [query, setQuery] = useState("")
  const onDelete = (id) => {
    console.log("rowdotid==============",id);
  
  }


  const categoryAPI = () => {
    ApiServices.categories()
      .then(response => {
        var data = response.data.data.rows
        console.log(data)
        setCategory(data)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  useEffect(() => categoryAPI(), [])

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
              <Paper className="search-container" sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
                <Box
                  container
                  className='search-box'
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
                  className='search-box'
                    sx={{ ml: 1, flex: 1 }}
                    placeholder='Category Management'
                    onChange={event => setQuery(event.target.value)} 
                    inputProps={{ 'aria-label': 'Category Management' }}
                  />
                  <IconButton
                    type='button'
                    sx={{ p: '10px', mr: '30px' }}
                    aria-label='Categories'
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
                <Divider />
              
             <Datatable category={category}  onDelete={onDelete} categoryAPI={categoryAPI} query={query}/>
              </Paper>
            </Grid>
          </Container>
        </Box>
 
        <NavLink to="/category/new" className='btn'>
        <AddIcon/>
</NavLink>
       
      </Box>
    </>
  )
}
export default Categories
