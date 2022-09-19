import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { Box, Button, Divider } from '@mui/material'
import Typography from '@mui/material/Typography'
import Input from '@mui/material/Input'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useState,useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { ApiServices } from "../../Config/api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


function EditVersionPage () {

  const navigate = useNavigate();
  // const [app, setApp] = useState(initialValue)
  // const { appname, version, platform } = app
  const [appname, setAppName] = useState("")
  const [version, setVersion] = useState("")
  const [platform, setPlatform] = useState("")
  // const onValueChange = e => {
  //   setApp({ ...app, [e.target.name]: e.target.value })
  // }


  let id = useParams();
  console.log(id);
  function updateAdmin() {
    var params = {
      id: id.id,
      appname: appname,
      version: version,
      platform: platform,
    };
    ApiServices.editApp(params)
      .then((response) => {
        console.log("response", response);
        toast.success("Update successful");
        navigate("/app");
      })
      .catch((error) => {


      });
  }


  function setValues() {
    const query = new URLSearchParams(window.location.search);
    setAppName(query.get('appname'));
    setVersion(query.get('version'));
    setPlatform(query.get('platform'));
   
  }

  useEffect(() => setValues(), []);



  
    return (
    <>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900]
        }}
      >
        <NavBar />
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            mt: 14,
            ml: 4,
            mb: 3
          }}
        >
          <Box sx={{ mr: 4.2, mt: 2 }} md={12}>
            <Paper sx={{ mt: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Button onClick={()=>navigate(-1)}>
                  <ArrowBackIosIcon
                    sx={{ hight: '100%', m: 2, pt: 2, color: 'Black' }}
                  />
                </Button>
                <Typography variant='h5' sx={{ hight: '100%', m: 2, pt: 2 }}>
                  Edit Applications
                </Typography>
              </Box>
              <Divider />
              <Grid
                container
                spacing={1}
                sx={{ display: 'flex', direction: 'column', p: 2 }}
              >
                <Grid
                    item
                    spacing={3}
                    xs={12}
                    md={12}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <FormControl>
                      <Typography variant='text'>App Name</Typography>
                      <Input
                        placeholder='Enter First name'
                        sx={{ width: '100%', p: 1 }}
                        // onChange={e => onValueChange(e)}
                        onChange={(e) => setAppName(e.target.value)}
                        name='appname'
                        value={appname}
                      />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Typography variant='text'>App Version</Typography>
                      <Input
                        placeholder='Enter Last name'
                        sx={{ width: '100%', p: 1 }}
                        // onChange={e => onValueChange(e)}
                        onChange={(e) => setVersion(e.target.value)}
                        name='version'
                        value={version}
                      />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Typography variant='text'>Plaform Type</Typography>
                      <Select
                        id='app platform'
                        name='platform'
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                      >
                        <MenuItem value='IOS'>IOS</MenuItem>
                        <MenuItem value='Android'>Android</MenuItem>
                      </Select>
                    </FormControl>
                    <br />
                    <FormControl>
                      <Button
                        textAligment='center'
                        sx={{
                          width: '100%',
                          p: 1,
                          backgroundColor: 'black',
                          color: 'white'
                        }}
                        onClick={() => updateAdmin()}
                      >
                        Update 
                      </Button>
                    </FormControl>
                  </Grid>
              </Grid>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default EditVersionPage
