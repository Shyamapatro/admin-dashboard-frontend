import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import MuiDrawer from '@mui/material/Drawer'
import NestedList from './ListItems'
import MenuIcon from '@mui/icons-material/Menu'
import { styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'

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
function SideBar({open=false,toggleDrawer}) {
 
  
  return (
    <>
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
        </Drawer>
    </>
  )
}

export default SideBar