import React, { useState, useEffect } from 'react'
import MuiAppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import {
  Toolbar,
  IconButton,
  Box,
  Menu,
  FormControl,
  InputLabel,
  Button
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import { toast } from 'react-toastify'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'
import Select from '@mui/material/Select'
import MuiDrawer from '@mui/material/Drawer'
import NestedList from '../SideBar/ListItems'
import Divider from '@mui/material/Divider'
import { ApiServices } from '../../Config/api'
import { DarkModeContext } from "../../context/darkModeContext";
import { CorporateModeContext } from "../../context/CorporateModeContext";
const settings = ['Profile', 'Change password', 'Logout']
var image_path = 'http://localhost:3000/'

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100%)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const drawerWidth = 280

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    height:'100%',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: 'border-box',
    ...(!open && {
     overflowX: 'hidden',

      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    })
  }
}))

function NavBar () {
  
 
  const [profile, setProfile] = useState({})
  const adminProfileAPI = () => {
    ApiServices.adminDetail()
      .then(response => {
        var data = response.data.data
        console.log('profile', data)
        setProfile(data)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  useEffect(() => adminProfileAPI(), [])
 
  const navigate = useNavigate()

  function LogOut () {
    localStorage.clear()
    toast.dark('Logout Succesfully', { position: toast.POSITION.TOP_CENTER })
    navigate('/')
  }

  const [open, setOpen] = React.useState(true)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const toggleDrawer = () => {
    setOpen(!open)
  }

   

  const [theme, setTheme] = React.useState("");
  const handleChange2 = event => {
    setTheme(event.target.value)
  }
 
  const { dispatch } = React.useContext(DarkModeContext);
  const { dispatch2 } = React.useContext(CorporateModeContext);

  
  return (
    
    <Box className="sidebar" sx={{backgroundColor:'white' ,borderRight: 0.1,borderColor:"#808080"}}>
      <AppBar
       className="navbar"
        position='fixed'
        open={open}
        // style={{ background: '#0b0534f5', textColor: 'white' }}
      >
        <Toolbar style={{ height: '75px' }}>
          <IconButton
            edge='start'
             color='inherit'
           
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            sx={{ flexGrow: 0 }}
          >
            LOGO
          </Typography>
          <Box sx={{ ml: 16 }} />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth sx={{}}>
              <InputLabel id='theme'>Theme</InputLabel>
              <Select
                labelId='theme-select-label'
                id='theme-select'
                value={theme}
                label='Theme'
                onChange={handleChange2}
                sx={{ background: 'white', textColor: 'white', height: 48 }}
              >
                <MenuItem value={'Dark'} onClick={() => dispatch({ type: "TOGGLE" })}>
                 Dark
                  </MenuItem>
                <MenuItem value={'Light'}>Light</MenuItem>
                <MenuItem value={'Corporate'} onClick={() => dispatch2({ type: "TOGGLE1" })}>Corporate</MenuItem>
                <MenuItem value={'Cosmic'}  >Cosmic</MenuItem>
              </Select>
            </FormControl>
     
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}></Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt='Shyama patro' src={image_path + profile.image} />
              {console.log(image_path + profile.image)}
            </IconButton>
            <Typography variant='h5' color='inherit' sx={{ mt: 1.3 }}>
              {profile.firstName}
            </Typography>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{ p: 2, width: 1 }}
                >
                  <Button
                    onClick={() => {
                      if (`${setting}` === 'Logout') {
                        LogOut()
                      } else if (`${setting}` === 'Change password') {
                        navigate('/admin/change-password')
                      } else if (`${setting}` === 'Profile') {
                        navigate('/admin/profile')
                      } else if (`${setting}` === 'ProfileTab') {
                        navigate('admin/profile-tab')
                      }
                    }}
                    textAlign='center'
                  >
                    {setting}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <div className="sidebar">
      <Drawer variant='permanent' open={open}  style={{height:'100%'}} >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1]
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <NestedList profile={profile}/>
      </Drawer>
      </div>
    </Box>
  
  )
}

export default NavBar
