import * as React from 'react'
import {useState} from 'react'
import List from '@mui/material/List'
import { Outlet, Link,NavLink } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import PeopleIcon from '@mui/icons-material/People'
import AssignmentIcon from '@mui/icons-material/Assignment'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded'
import Divider from '@mui/material/Divider'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import BugReportIcon from '@mui/icons-material/BugReport'
import CategoryIcon from '@mui/icons-material/Category'
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt'
import CommentIcon from '@mui/icons-material/Comment'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import ReportIcon from '@mui/icons-material/Report'

export default function NestedList () {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
      setOpen(!open);
    };
    const [open2, setOpen2] = useState(false);
    const handleClick2 = () => {
      setOpen2(!open2);
    };
  
    return (
    <>
      <List
        sx={{ width: '100%', maxWidth: 360 }}
        component='nav'
      >
          <ListItemButton sx={{ mt: 5 }}>
          <ListItemIcon>
          <HomeRoundedIcon />
          </ListItemIcon>
          <NavLink to="/" style={{ textDecoration: 'none'}} activeStyle={{
    fontWeight: "bold",
    color: "green"
  }}>Dashboard</NavLink>
          </ListItemButton>
      
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <NavLink  to='user-management' style={{ textDecoration: 'none'}}>User Management</NavLink>
        </ListItemButton>

        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <NotificationsRoundedIcon />
          </ListItemIcon>
          <NavLink  to='notification' style={{ textDecoration: 'none'}}>Notification</NavLink>
        
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <WidgetsRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='System Configuration' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider />
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <NavLink  to='categories' style={{ textDecoration: 'none'}}>Categories</NavLink>
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <AppSettingsAltIcon />
              </ListItemIcon>
              <NavLink  to='app-versions' style={{ textDecoration: 'none'}}>App-versions</NavLink>
        
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <NavLink  to='admin-achievements' style={{ textDecoration: 'none'}}>Admin Achievements</NavLink>
        
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <NavLink  to='calendar-events' style={{ textDecoration: 'none'}}>Calendar Events</NavLink>
        
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ChatBubbleIcon />
              </ListItemIcon>
              <NavLink  to='chat' style={{ textDecoration: 'none'}}>Chat</NavLink>
        
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <CommentIcon />
              </ListItemIcon>
              <NavLink  to='comment' style={{ textDecoration: 'none'}}>Comment</NavLink>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick2}>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary='Report' />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              {/* <NavLink  to='reported-content' style={{ textDecoration: 'none'}}>Reported Content</NavLink> */}
        
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <BugReportIcon />
              </ListItemIcon>
              {/* <NavLink  to='reported-bugs' style={{ textDecoration: 'none'}}>Reported Bugs</NavLink> */}
        
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Outlet />
    </>
  )
}
