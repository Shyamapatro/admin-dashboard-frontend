import * as React from "react";
import { useState } from "react";
import List from "@mui/material/List";
import { Outlet, Link, NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItem from '@mui/material/ListItem'
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import Divider from "@mui/material/Divider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BugReportIcon from "@mui/icons-material/BugReport";
import CategoryIcon from "@mui/icons-material/Category";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ReportIcon from "@mui/icons-material/Report";
import './listItems.css'
export default function NestedList({adminProfileAPI}) {
  console.log("HHHHH",adminProfileAPI)
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
      <List sx={{ width: "100%", maxWidth: 360,color:"#000000"}} component="nav" className="sidebar">
      {/* {(() => {
        if (adminProfileAPI.status ==='pending') {
          return (  */}
        <ListItemButton sx={{ mt: 5 }}>
          <ListItemIcon>
            <HomeRoundedIcon  className="list" />
          </ListItemIcon>
          <NavLink
            sx={{color:"#000000"}}
            to="/dashboard"
            className="list"
            style={{ textDecoration: "none",color:"black" }}
          >
            Dashboard
          </NavLink>
        </ListItemButton>
        {/* );
      }
    })()} */}
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon   className="list"/>
          </ListItemIcon>
          <Link
            to="/user"
            className="list"
            style={{ textDecoration: "none",color:"black" }}
            
          >
            User Management
          </Link>
        </ListItemButton>

        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <PersonRoundedIcon   className="list"/>
          </ListItemIcon>
          <Link
            to="/admin"
            className="list"
            
            style={{ textDecoration: "none",color:"black" }}
          >
            Admin
          </Link>
        </ListItemButton>

        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <NotificationsRoundedIcon  className="list" />
          </ListItemIcon>
          <Link
            to="/notification"
            className="list"
            style={{ textDecoration: "none",color:"black" }}
          >
            Notification
          </Link>
        </ListItemButton>
        <Divider />
        <ListItemButton
          onClick={handleClick}
          
        >
          <ListItemIcon>
            <WidgetsRoundedIcon  className="list" />
          </ListItemIcon>
          <ListItemText primary="System Configuration"  style={{ textDecoration: "none",color:"black" }}/>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon  className="list" />
              </ListItemIcon>
              <Link
                to="/category"
                className="list"
                style={{ textDecoration: "none",color:"black" }}
              >
                Categories
              </Link>
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <AppSettingsAltIcon  className="list" />
              </ListItemIcon>
              <Link
                to="/app"
                className="list"

                style={{ textDecoration: "none",color:"black" }}
              >
                App Versions
              </Link>
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <EmojiEventsIcon  className="list" />
              </ListItemIcon>
              <Link
               className="list"
                to="/admin-achievements"
                style={{ textDecoration: "none",color:"black" }}
              
              >
                Admin Achievements
              </Link>
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon   className="list"/>
              </ListItemIcon>
              <Link
               className="list"
                to="/calender-events"
                style={{ textDecoration: "none",color:"black" }}
              >
                Calendar Events
              </Link>
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ChatBubbleIcon   className="list"/>
              </ListItemIcon>
              <Link
                to="/chat/signin"
                className="list"
                style={{ textDecoration: "none",color:"black" }}
              >
                Chat
              </Link>
            </ListItemButton>
            <Divider />
            {/* <ListItemButton>
              <ListItemIcon>
                <CommentIcon style={{}} />
              </ListItemIcon>
              <Link
                to="/comment"
                style={{ textDecoration: "none",}}
              >
                Comment
              </Link>
            </ListItemButton>  */}
          </List>
        </Collapse>

        <ListItemButton
          onClick={handleClick2}
         
        >
          <ListItemIcon>
            <ReportIcon  className="list" />
          </ListItemIcon>
          <ListItemText primary="Report"  style={{ textDecoration: "none",color:"black" }}/>
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon  className="list" />
              </ListItemIcon>
              <Link
                to="/reported-content"
                style={{ textDecoration: "none",color:"black" }}
                className="list"
                
              >
                Reported Content
              </Link>
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <BugReportIcon  className="list" />
              </ListItemIcon>
              <Link
                to="/reported-bugs"
                className="list"
                style={{ textDecoration: "none",color:"black" }}
              >
                Reported Bugs
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Outlet />
    </>
  );
}

const divStyle = {
  color: 'black',
  textDecoration: "none"
};