import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Home from '../../pages/Home/Home'
import Box from '@mui/material/Box'
import { Routes, Route } from 'react-router-dom'
import UserManagement from '../../pages/UserManagement/UserManagement'
// import Notification from '../../pages/Notification/Notification'
// import AppVersions  from '../../pages/AppVersions/AppVersions'
// import AdminAchievements from '../../pages/AdminAchievements/AdminAchievements'
// import Chat from '../../pages/Chat/Chat'
// import Comment from '../../pages/Comment/Comment'
// import Categories from '../../pages/Categories/Categories'
// import ReportedContent from '../../pages/ReportedContent/ReportedContent'
// import ReportedBugs from '../../pages/ReportedBugs/ReportedBugs'
const mdTheme = createTheme()

function DashboardContent () {
  return (
    <ThemeProvider theme={mdTheme}>
       <Box>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/user-management' element={<UserManagement />} />
          {/*<Route exact path='/notification' element={<Notification />} />
          <Route exact path='/categories' element={<Categories />} />
          <Route exact path='/app-versions' element={<AppVersions />} />
          <Route exact path='/admin-achievements' element={<AdminAchievements />} />
          <Route exact path='/calendar-events' element={<CalendarEvents />} />
          <Route exact path='/chat' element={<Chat />} />
          <Route exact path='/comment' element={<Comment />} />
          <Route exact path='/reported-content' element={<ReportedContent />} />
          <Route exact path='/reported-bugs' element={<ReportedBugs />} /> */}
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default function Dashboard () {
  return <DashboardContent />
}
