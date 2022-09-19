import React, { useState, useEffect } from 'react'
import { Box, Grid, Container, Paper, Divider, IconButton } from '@mui/material'
import { ApiServices } from '../../Config/api'
import InputBase from '@mui/material/InputBase'
import NavBar from '../../components/NavBar/NavBar'
import Datatable from '../../components/Tables/ReportContentDataTable'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add';
import './reportedcontent.css'
import { NavLink } from 'react-router-dom'

function ReportedContent () {
  const [content, setContent] = useState({})
   const [approve, setApprove] = useState({})
  const [declined, setDeclined] = useState({})
  const [pending, setPending] = useState({})
  const [query, setQuery] = useState("")
  // const [total,setTotal] = useState({})
  const ContentAPI = () => {
    ApiServices.reportedContent()
      .then(response => {
        var data = response.data.data.ContentData.rows
        console.log(data)
        console.log(response.data.data)
     
       var pendingData = response.data.data.reportContentpending
     console.log("pending::::::::::::",pendingData)
        var approvedData=response.data.data.reportContentapproved
       console.log("approved::::::::::::",approvedData)
       var declinedData=response.data.data.reportContentdeclined
       console.log("approved::::::::::::",declinedData)
       
       
        console.log(data)
        setContent(data)
      
          setApprove(approvedData)
       console.log(approve)
      setPending(pendingData)
      setDeclined(declinedData)
      console.log(pending)
        })
      .catch(error => {
        console.log(error.response)
      })
  }
  const onDelete = (id) => {
    console.log("id==============",id);
   
  }

  useEffect(() => ContentAPI(), [])

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
                <Box
                className="search-box"
                  container
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
                    placeholder='Reported Content'
                    onChange={event => setQuery(event.target.value)} 
                    inputProps={{ 'aria-label': 'Reported Management' }}
                  />
                  <IconButton
                    type='button'
                    sx={{ p: '10px', mr: '30px' }}
                    aria-label='Reported Content'
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
                      color:'rgb(59 53 167)'
                    }
                  }}
                >
                  <Box
                    md={8}
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Paper />
                    Total
                    <Paper />
                    <Divider orientation='vertical' sx={{ m: -2, }} flexItem />
                    <Paper />
                     {approve.count+pending.count+declined.count} 
                    <Paper />
                    
                    Approved
                    <Paper />
                   
                    <Divider orientation='vertical' sx={{ m: -2 , }} flexItem />
                    <Paper />
                    
                   {approve.count}
                    <Paper />
                   
                    Pending
                    <Paper />
                    
                    <Divider orientation='vertical' sx={{ m: -2,  }} flexItem />
                    <Paper />
                   
                    {pending.count}
                    <Paper />
                   
                  
                    Declined
                    <Paper />
                   
                    <Divider orientation='vertical' sx={{ m: -2,  }} flexItem />
                    <Paper />
                  
                    {declined.count}
                    <Paper />
                  </Box>

                  <Box md={4} sx={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <Box md={9}></Box>
                    <Box md={3}>
                      </Box>
                  </Box>
                </Box>
                <Datatable content={content} onDelete={onDelete} query={query} ContentAPI={ContentAPI}/>
              </Paper>
            </Grid>
          </Container>
        </Box>
        
        <NavLink to="/reported-content/new" className='btn'>
        <AddIcon/>
</NavLink>
       
      </Box>
    </>
  )
}
export default ReportedContent
