import axios from "axios";
import { config } from "./config";
export const ApiServices = {
  logIn,
  fogetpassword,
  dashboard,
  resetPassword,
  //=================================
  admin,
  adminProfile,
  addadmin,
  adminDelete,
  adminDetail,
  editAdmin,
  changePassword,
  ProfilePage,
  GetAdminDetail,
  blockAdmin,
  //===================================
  user,
  userDetail,
  userDelete,
  blockUser,
    //=================================
  app,
  addapp,
  appDelete,
  appDetail,
  editApp,
    //=================================
  addnotification,
  notification,
  notificationDelete,
  notificationDetail,
  Editnotification,
  
    //=================================
  categories,
   addCategory,
  CategoryDetail,
  CategoryDelete,
  editCategory,
    //=================================
  reportedContent,
  reportedContentDetail,
  DeletereportedContent,
  addreportedContent,
  editreportedContent,
    //=================================

  adminAchivement,
  addAchivement,
  DeleteAchivement,
  editAchivement,
  GetAchivementDetails,
    //=================================
addreportedBugs,  
    reportedBugs,
  DeletereportedBugs,
  editreportedBugs,
  
  reportedBugsDetail,
  
};


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Login Services++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function logIn(params) {
  console.log("params", params);
  let url = `${config.apiUrl}/admin/login`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, params, config1);
}
function fogetpassword(params){
  console.log("params", params);
  let url = `${config.apiUrl}/admin/forgot-password`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, params, config1);
}

function resetPassword(params){
  console.log("params", params);
  let url = `${config.apiUrl}/admin/reset-password`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.put(url, params, config1);
}
// Dasboard Services++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function dashboard() {
  let url = `${config.apiUrl}/dashboard/user-status`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Admin ApiServices++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function admin() {
  let url = `${config.apiUrl}/admin/get`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

function editAdmin(params) {
  let url = `${config.apiUrl}/admin/edit/`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.put(url,params,config1);
}


function adminProfile(params){
  console.log("params", params);
  const accessToken = localStorage.getItem("accessToken");
  let url = `http://localhost:3000/admin/profile`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${accessToken}`
    },
  };
  return axios.post(url, params, config1);
}
function addadmin(params) {
  // const data= new FormData();
  //   data.append("email",params.email)
  //   data.append("firstName",params.firstName)
  //   data.append("lastName",params.lastName)
  //   data.append("adminType",params.adminType)
  //   console.log("console formdatao",data.get('email'))
  //   console.log("console formdatao",data.get('firstName'))
  // console.log("params", data);
  let url = `${config.apiUrl}/admin/add`;
  let config1 = {
    headers: {
      'content-type': 'application/json'
    },
  };
  return axios.post(url, params, config1);
}

function adminDelete(id) {
  let url = `${config.apiUrl}/admin/delete/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.delete(url, config1);
}

function blockAdmin(params) {
  console.log("params:",params)
  let url = `${config.apiUrl}/admin/blocked`;
  let config1 = {
      headers: {
          'Content-Type': 'application/json'
      }
  }
  return axios.put(url,params, config1)
}
function GetAdminDetail(id) {
  let url = `${config.apiUrl}/admin/admin-details/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}


function adminDetail() {
  
  const accessToken = localStorage.getItem("accessToken");
  let url = `http://localhost:3000/admin/getadmin-detail/`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${accessToken}`
    },
  };
  return axios.get(url, config1);
}

function changePassword(params) {
  const accessToken = localStorage.getItem("accessToken");
  console.log("Access token: " , accessToken);
  let url = `${config.apiUrl}/admin/change-password/`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${accessToken}`
    },
  };
  return axios.put(url,params,config1);
}


function ProfilePage(params) {
  const accessToken = localStorage.getItem("accessToken");
  console.log("Access token: " , accessToken);
  let url = `${config.apiUrl}/admin/profile-edit/`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${accessToken}`
    },
  };
  return axios.put(url,params,config1);
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//User ApiServices++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function user() {
  
  let url = `${config.apiUrl}/user/getall`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

function userDelete(id) {
  let url = `${config.apiUrl}/user/delete/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.delete(url, config1);
}


function blockUser(params) {
  console.log("params:",params)
  let url = `${config.apiUrl}/user/blocked`;
  let config1 = {
      headers: {
          'Content-Type': 'application/json'
      }
  }
  return axios.put(url,params, config1)
}

function userDetail(id) {
  let url = `${config.apiUrl}/user/getNotification/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// App version   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function app() {
  let url = `${config.apiUrl}/app/getall`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

function addapp(params) {
  console.log("params", params);
  let url = `${config.apiUrl}/app/add`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, params, config1);
}

function appDelete(id) {
  let url = `${config.apiUrl}/app/delete/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.delete(url, config1);
}

function appDetail(id) {
  let url = `${config.apiUrl}/app/getdetail/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

function editApp(params) {
  let url = `${config.apiUrl}/app/edit/`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.put(url,params,config1);
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Notification Services++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function notification() {
  let url = `${config.apiUrl}/notification/getall`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

function addnotification(params) {
  console.log("params", params);
  let url = `${config.apiUrl}/notification/add`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, params, config1);
}
function notificationDelete(id) {
  let url = `${config.apiUrl}/notification/delete/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.delete(url, config1);
}

function notificationDetail(id) {
  let url = `${config.apiUrl}/notification/getNotification/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

function Editnotification(params) {
  let url = `${config.apiUrl}/notification/edit/`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.put(url,params,config1);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Categories Services+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function categories() {
  let url = `${config.apiUrl}/category/getall`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

function addCategory(params) {
 
  let url = `${config.apiUrl}/category/add-category`;
  let config1 = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return axios.post(url,params ,config1);
}

function CategoryDelete(id) {
  let url = `${config.apiUrl}/category/delete/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.delete(url, config1);
}

function CategoryDetail(id) {
  let url = `${config.apiUrl}/category/getcategory/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

function editCategory(params) {
  let url = `${config.apiUrl}/category/edit/`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.put(url,params,config1);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Report Content Services++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function reportedContent() {
  let url = `${config.apiUrl}/reported-content/getall`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

function addreportedContent(params) {
  console.log("params", params);
  let url = `${config.apiUrl}/reported-content/add-reportedContent`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, params, config1);
}


function editreportedContent(params) {
  let url = `${config.apiUrl}/reported-content/edit/`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.put(url,params,config1);
}

function DeletereportedContent(id) {
  let url = `${config.apiUrl}/reported-content/delete/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.delete(url, config1);
}

function reportedContentDetail(id) {
  let url = `${config.apiUrl}/reported-content/getreported-content/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Report Bug Services++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function reportedBugs() {
  let url = `${config.apiUrl}/reported-bugs/getall`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

function addreportedBugs(params) {
  console.log("params", params);
  let url = `${config.apiUrl}/reported-bugs/add-reportbug`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, params, config1);
}

function DeletereportedBugs(id) {
  let url = `${config.apiUrl}/reported-bugs/delete/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.delete(url, config1);
}

function reportedBugsDetail(id) {
  let url = `${config.apiUrl}/reported-bugs/getreported-bug/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}



function editreportedBugs(params) {
  let url = `${config.apiUrl}/reported-bugs/edit/`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.put(url,params,config1);
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//adminAchivement Services++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function adminAchivement() {
  let url = `${config.apiUrl}/admin-achievements/getall`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

function addAchivement(params) {
  console.log("params", params);
  let url = `${config.apiUrl}/admin-achievements/add-achivement`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, params, config1);
}
function DeleteAchivement(id) {
  let url = `${config.apiUrl}/admin-achievements/delete/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.delete(url, config1);
}

function GetAchivementDetails(id) {
  let url = `${config.apiUrl}/admin-achievements/get-Achievement/${id}`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config1);
}

function editAchivement(params) {
  let url = `${config.apiUrl}/admin-achievements/edit-achivement/`;
  let config1 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.put(url,params,config1);
}

