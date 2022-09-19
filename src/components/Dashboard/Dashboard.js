import React, { useEffect, useState } from "react";

import MainContent from "../../pages/MainContent/MainContent";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import UserManagement from "../../pages/UserManagement/UserManagement";

import Admin from "../../pages/Admin/Admin";
import AdminDetails from "../../pages/GetDetails/adminDetails";
import EditAdmin from "../../pages/EditPage/EditAdminPage";
import New from "../../pages/NewPage/AddAdmin";
import LoginUI from "../Login/loginUI";
import ForgotPassword from "../Login/ForgetPasswordUI";
import ResetPassword from "../Login/ResetPasswordUI";
import ChangePassword from "../../components/ProfilePage/ChangePassword";
import ProfilePage from "../../components/ProfilePage/ProfilePage";


import GetDetails from "../../pages/GetDetails/GetDetails";
import Notification from "../../pages/Notification/Notification";
import AddNotification from "../../pages/NewPage/AddNotification";
import EditPage from "../../pages/EditPage/EditNotificationPage";

import AppVersions from "../../pages/AppVersions/AppVersions";
import AppGetDetails from "../../pages/GetDetails/AppGetDetails";
import AndroidEditPage from "../../pages/EditPage/EditVersionPage";
import AddAppVersion from "../../pages/NewPage/AddAppVersion";

import AdminAchievements from "../../pages/AdminAchievements/AdminAchivements";
import GetAdminAchievements from "../../pages/GetDetails/GetAdminAchievements";
// import AndroidEditPage from '../../pages/EditPage/EditVersionPage'
// import AddAppVersion from '../../pages/NewPage/AddAppVersion'

import Categories from "../../pages/Categories/Categories";
import AddCategory from "../../pages/NewPage/AddCategory";
import GetCategoryDetails from "../../pages/GetDetails/GetCategoryDetails";
import EditCategoryPage from "../../pages/EditPage/EditCategory";

import ReportedContent from "../../pages/Reported Content/ReportedContent";
import AddReportedContent from "../../pages/NewPage/AddReportedContent";
import EditReportedContent from "../../pages/EditPage/EditReportContentPage";
import GetReportedContentDetails from "../../pages/GetDetails/GetReportedContent";

import ReportedBugs from "../../pages/ReportedBugs/ReportedBugs";
import AddReportedBug from "../../pages/NewPage/AddReportedBug";
import EditReportedBug from "../../pages/EditPage/EditRepotedBugPage";
import GetReportedBug from "../../pages/GetDetails/GetReportBugDetails";

import { ToastContainer } from "react-toastify";
import Protected from "../Protected/Protected";
import Calender from "../../pages/CalendarEvents/CalenderEvents";
import AddCalender from "../../pages/CalendarEvents/CalenderEvents";

import SignIn from "../../pages/Chat/SignIn";
import SignUp from "../../pages/Chat/SignUp";
import ChatHome from "../../pages/Chat/ChatHome";
import "react-toastify/dist/ReactToastify.css";

import { DarkModeContext } from "../../context/darkModeContext";
import { CorporateModeContext } from "../../context/CorporateModeContext";
import { ApiServices } from "../../Config/api";
import "../../theme.scss";
import "../../theme2.scss";

function DashboardContent() {
  const { darkMode } = React.useContext(DarkModeContext);
  const { corporateMode } = React.useContext(CorporateModeContext);
  // const [profile, setProfile] = useState({});
  // const adminProfileAPI = () => {
  //   ApiServices.adminDetail()
  //     .then((response) => {
  //       var data = response.data.data;
  //       console.log("profile::::::::::::", data);

  //       setProfile(data);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // };

  // useEffect(() => adminProfileAPI(), []);
  // console.log("Profile::", profile);
  return (
    <Box className={darkMode ? "app dark" : corporateMode ? "app corporate" : "app "
      }
    >
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<LoginUI />} />
        <Route exact path="forgot" element={<ForgotPassword />} />
        <Route exact path="reset-password" element={<ResetPassword />} />

        <Route
          exact
          path="dashboard"
          element={<Protected Cmp={MainContent} />}
        />
<Route
                    exact
                    path="admin"
                    element={<Protected Cmp={Admin} />}
                  />
                  <Route
                    exact
                    path="admin/new"
                    element={<Protected Cmp={New} />}
                  />
                  <Route
                    exact
                    path="admin/edit/:id"
                    element={<Protected Cmp={EditAdmin} />}
                  />

<Route
                    exact
                    path="user"
                    element={<Protected Cmp={UserManagement} />}
                  />
                   <Route
                      exact
                      path="notification"
                      element={<Protected Cmp={Notification} />}
                    />
                    <Route
                      exact
                      path="notification/getDetail/:id"
                      element={<Protected Cmp={GetDetails} />}
                    />
                    <Route
                      exact
                      path="notification/edit/:id"
                      element={<Protected Cmp={EditPage} />}
                    />
                    <Route
                      exact
                      path="/notification/add-new-notification"
                      element={<Protected Cmp={AddNotification} />}
                    />
                     <Route exact path="app" element={<Protected Cmp={AppVersions} />} />
                   <Route
                    exact
                    path="app/new"
                    element={<Protected Cmp={AddAppVersion} />}
                  />
                  <Route
                    exact
                    path="app/edit/:id"
                    element={<Protected Cmp={AndroidEditPage} />}
                  />
                  <Route
                    exact
                    path="app/getDetail/:id"
                    element={<Protected Cmp={AppGetDetails} />}
                  />

                  <Route exact path="category" element={<Protected Cmp={Categories} />} />
                  <Route
                    exact
                    path="category/new"
                    element={<Protected Cmp={AddCategory} />}
                  />
                  <Route
                    exact
                    path="category/getDetail/:id"
                    element={<Protected Cmp={GetCategoryDetails} />}
                  />
                  <Route
                    exact
                    path="category/edit/:id"
                    element={<Protected Cmp={EditCategoryPage} />}
                  />
                  <Route
                    exact
                    path="admin-achievements"
                    element={<Protected Cmp={AdminAchievements} />}
                  />
                  <Route
                    exact
                    path="admin-achievements/getDetail/:id"
                    element={<Protected Cmp={GetAdminAchievements} />}
                  />

                  <Route
                    exact
                    path="calender-events"
                    element={<Protected Cmp={Calender} />}
                  />
                  <Route
                    exact
                    path="calender-events/new"
                    element={<Protected Cmp={AddCalender} />}
                  />

                  <Route exact path="/chat/signin" element={<SignIn />} />
                  <Route exact path="/signup" element={<SignUp />} />
                  <Route exact path="chat-home/:recieverId" element={<ChatHome />} />

                  <Route
                    exact
                    path="reported-content"
                    element={<Protected Cmp={ReportedContent} />}
                  />
                  <Route
                    exact
                    path="reported-content/new"
                    element={<Protected Cmp={AddReportedContent} />}
                  />
                  <Route
                    exact
                    path="reported-content/edit/:id"
                    element={<Protected Cmp={EditReportedContent} />}
                  />
                  <Route
                    exact
                    path="reported-content/getDetail/:id"
                    element={<Protected Cmp={GetReportedContentDetails} />}
                  />

                  <Route
                    exact
                    path="reported-bugs"
                    element={<Protected Cmp={ReportedBugs} />}
                  />
                  <Route
                    exact
                    path="reported-bugs/new"
                    element={<Protected Cmp={AddReportedBug} />}
                  />
                  <Route
                    exact
                    path="reported-bugs/edit/:id"
                    element={<Protected Cmp={EditReportedBug} />}
                  />
                  <Route
                    exact
                    path="reported-bugs/getDetail/:id"
                    element={<Protected Cmp={GetReportedBug} />}
                  />

        {/* {profile.admin_permissions &&
          profile.admin_permissions.map((task) => {
            if (task.adminManagement) {
              return (
                <>
                  <Route
                    exact
                    path="admin"
                    element={<Protected Cmp={Admin} />}
                  />
                  <Route
                    exact
                    path="admin/new"
                    element={<Protected Cmp={New} />}
                  />
                  <Route
                    exact
                    path="admin/edit/:id"
                    element={<Protected Cmp={EditAdmin} />}
                  />
                </>
              );
            } else {
              return <div>Not Found</div>;
            }

            if (task.userManagement) {
              console.log("userManagement", task.userManagement);
              return (
                <>
                  <Route
                    exact
                    path="user"
                    element={<Protected Cmp={UserManagement} />}
                  />
                </>
              );
            } else {
              return <div>Not Found</div>;
            }

            {
              if (task.notificationManagement) {
                console.log("notification", task.notificationManagement);
                return (
                  <>
                    <Route
                      exact
                      path="notification"
                      element={<Protected Cmp={Notification} />}
                    />
                    <Route
                      exact
                      path="notification/getDetail/:id"
                      element={<Protected Cmp={GetDetails} />}
                    />
                    <Route
                      exact
                      path="notification/edit/:id"
                      element={<Protected Cmp={EditPage} />}
                    />
                    <Route
                      exact
                      path="/notification/add-new-notification"
                      element={<Protected Cmp={AddNotification} />}
                    />
                  </>
                );
              } else {
                return <div>Not Found</div>;
              }
            }
            // else if (task.systemConfiguration) {
            //   console.log("systemConfiguration",task.systemConfiguration)
            //   return (
            //     <>
            //       <Route exact path="app" element={<Protected Cmp={AppVersions} />} />
            //       <Route
            //         exact
            //         path="app/new"
            //         element={<Protected Cmp={AddAppVersion} />}
            //       />
            //       <Route
            //         exact
            //         path="app/edit/:id"
            //         element={<Protected Cmp={AndroidEditPage} />}
            //       />
            //       <Route
            //         exact
            //         path="app/getDetail/:id"
            //         element={<Protected Cmp={AppGetDetails} />}
            //       />

            //       <Route exact path="category" element={<Protected Cmp={Categories} />} />
            //       <Route
            //         exact
            //         path="category/new"
            //         element={<Protected Cmp={AddCategory} />}
            //       />
            //       <Route
            //         exact
            //         path="category/getDetail/:id"
            //         element={<Protected Cmp={GetCategoryDetails} />}
            //       />
            //       <Route
            //         exact
            //         path="category/edit/:id"
            //         element={<Protected Cmp={EditCategoryPage} />}
            //       />
            //       <Route
            //         exact
            //         path="admin-achievements"
            //         element={<Protected Cmp={AdminAchievements} />}
            //       />
            //       <Route
            //         exact
            //         path="admin-achievements/getDetail/:id"
            //         element={<Protected Cmp={GetAdminAchievements} />}
            //       />

            //       <Route
            //         exact
            //         path="calender-events"
            //         element={<Protected Cmp={Calender} />}
            //       />
            //       <Route
            //         exact
            //         path="calender-events/new"
            //         element={<Protected Cmp={AddCalender} />}
            //       />

            //       <Route exact path="/chat/signin" element={<SignIn />} />
            //       <Route exact path="/signup" element={<SignUp />} />
            //       <Route exact path="chat-home/:recieverId" element={<ChatHome />} />

            //     </>
            //   )
            // }
            // else if (task.reportManagement) {
            //   console.log("reportManagement",task.systemConfiguration)
            //   return (
            //     <>
            //       <Route
            //         exact
            //         path="reported-content"
            //         element={<Protected Cmp={ReportedContent} />}
            //       />
            //       <Route
            //         exact
            //         path="reported-content/new"
            //         element={<Protected Cmp={AddReportedContent} />}
            //       />
            //       <Route
            //         exact
            //         path="reported-content/edit/:id"
            //         element={<Protected Cmp={EditReportedContent} />}
            //       />
            //       <Route
            //         exact
            //         path="reported-content/getDetail/:id"
            //         element={<Protected Cmp={GetReportedContentDetails} />}
            //       />

            //       <Route
            //         exact
            //         path="reported-bugs"
            //         element={<Protected Cmp={ReportedBugs} />}
            //       />
            //       <Route
            //         exact
            //         path="reported-bugs/new"
            //         element={<Protected Cmp={AddReportedBug} />}
            //       />
            //       <Route
            //         exact
            //         path="reported-bugs/edit/:id"
            //         element={<Protected Cmp={EditReportedBug} />}
            //       />
            //       <Route
            //         exact
            //         path="reported-bugs/getDetail/:id"
            //         element={<Protected Cmp={GetReportedBug} />}
            //       />

            //     </>
            //   )
            // }
          })} */}

        <Route
          exact
          path="admin/profile"
          element={<Protected Cmp={ProfilePage} />}
        />
        <Route
          exact
          path="admin/getDetail/:id"
          element={<Protected Cmp={AdminDetails} />}
        />
        <Route
          exact
          path="admin/change-password"
          element={<Protected Cmp={ChangePassword} />}
        />
      </Routes>
    </Box>
  );
}

export default DashboardContent;
