import {
    Box,
    Grid,
    Container,
    Paper,
   
    Divider,
    IconButton
  } from '@mui/material'
  import React from 'react'
  import {useState,useEffect} from 'react'
  import InputBase from '@mui/material/InputBase'
  import NavBar from '../../components/NavBar/NavBar'
  import { ApiServices } from '../../Config/api'

   import Datatable from '../../components/Tables/AppVersionDataTable'
  import SearchIcon from '@mui/icons-material/Search'
  import AddIcon from '@mui/icons-material/Add';
  import './app.css'
import { NavLink } from 'react-router-dom'
  
  function AppVersions () {

    //get all versions
    const [version, setversion] = useState({})
   
    const [query, setQuery] = useState("")
    const appVersionAPI = () => {
      ApiServices.app()
        .then(response => {
          var data = response.data.data.rows
        
          console.log(data)
          setversion(data)
       
        })
        .catch(error => {
          console.log(error.response)
        });
    }
  useEffect(() => appVersionAPI(), []);
  //end all version
  
  //update version
  const onDelete = (id) => {
    console.log("rowdotid==============",id);
   
  }
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
                <Paper className="search-container" sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
                  <Box container className="search-box" sx={{ m: 2 , p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        background: 'whitesmoke',
                        width: '95%'}}>
                   
                      <InputBase
                      className="search-box"
                        sx={{ ml: 1, flex: 1 }}
                        placeholder='App Version'
                        onChange={event => setQuery(event.target.value)} 
                        inputProps={{ 'aria-label': 'App Version' }}
                      />
                      <IconButton
                        type='button'
                        sx={{ p: '10px', mr:"30px"}}
                        aria-label='Admin'
                      >
                        <SearchIcon />
                      </IconButton>
                   </Box>
                  <Divider />
                
              <Datatable  version={version} onDelete={onDelete} query={query} appVersionAPI={appVersionAPI}/>  
                </Paper>
              </Grid>
            </Container>
          </Box>
         
          <NavLink to="/app/new" className='btn'>
        <AddIcon/>
</NavLink>
         
        </Box>
      </>
    )
  }
  export default AppVersions
  