import React from 'react'
import MuiAppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchBox from '../SearchBox/SearchBox'
import Avatar from '@mui/material/Avatar'
import MailIcon from '@mui/icons-material/Mail'
import { styled } from '@mui/material/styles'
import { Toolbar, IconButton, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ProfileImage from '../../images/profile.jpg'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'


// import Toolbar from '@mui/material/Toolbar'
import MuiDrawer from '@mui/material/Drawer'
import NestedList from '../SideBar/ListItems'
// import MenuIcon from '@mui/icons-material/Menu'
// import { styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
// import IconButton from '@mui/material/IconButton'

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

function NavBar() {
    const [open, setOpen] = React.useState(true)
    const toggleDrawer = () => {
          setOpen(!open)
      }
    const [drop, setdrop] = React.useState('')
    const handleChange = event => {
        setdrop(event.target.value)
    }
    return (
        <> 
        <AppBar
            position='absolute'
            open={open}
            style={{ background: '#121828' }}
        >
            <Toolbar style={{ height: '75px' }}>
                <IconButton
                    edge='start'
                    color='inherit'
                    aria-label='open drawer'
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
                <Select
                    value={drop}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value='' color='inherit'>
                        None
                    </MenuItem>
                    <MenuItem value={'Light'}> Light</MenuItem>
                    <MenuItem value={'Dark'}> Dark</MenuItem>
                    <MenuItem value={'Cosmic'}> Cosmic</MenuItem>
                    <MenuItem value={'Corporate'}> Corporate</MenuItem>
                </Select>
                <Box sx={{ flexGrow: 1 }} />
                <SearchBox />

                <IconButton color='inherit'>
                    <MailIcon />
                </IconButton>
                <IconButton
                    size='large'
                    aria-label='show 17 new notifications'
                    color='inherit'
                >
                    <Badge>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    size='large'
                    aria-label='show 17 new notifications'
                    color='inherit'
                >
                    <Avatar alt='shyama' src={ProfileImage} />
                </IconButton>
                <Typography
                    component='p'
                    variant='p'
                    color='inherit'
                    noWrap
                    sx={{ flexGrow: 0 }}
                >shyama patro
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={open}>
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
          <NestedList />
        </Drawer></>
    )
}


export default NavBar