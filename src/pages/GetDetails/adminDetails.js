import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Paper from "@mui/material/Paper";
import { Box, Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams } from "react-router-dom";
import { ApiServices } from "../../Config/api";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Moment from 'react-moment';
import { useNavigate } from "react-router-dom";
function AdminDetails() {
  const navigate = useNavigate();
  const [Get, setGet] = useState("");
  const [permission, setPermission] = useState([]);
  const { id } = useParams();

  const idd = id;
  console.log("HAmara ddddd", idd);
  const onGetDetails = (idd) => {
 
    ApiServices.GetAdminDetail(id)
      .then((response) => {
        
        console.log("Data retrieved", response.data.data);

        const data3 = response.data.data;
        const data4 = response.data.data.admin_permissions;
        setGet(data3);

        setPermission(data4);
        console.log("Acces permission",data4);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => onGetDetails(idd), []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
        }}
      >
        <NavBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: "auto",
            mt: 14,
            ml: 4,
            mb: 3,
          }}
        >
          <Box sx={{ mr: 4.2, mt: 2 }} md={12}>
            <Paper sx={{ mt: 3 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Button onClick={() => navigate('/admin')}>
                  <ArrowBackIosIcon
                    sx={{ hight: "100%", m: 2, pt: 2, color: "Black" }}
                  /> 
                </Button>
                <Typography variant="h5" sx={{ hight: "100%", m: 2, pt: 2 }}>
                 Admin Details
                </Typography>
              </Box>
              <Divider />
            
              <TableBody width="100%">
                  
                  <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center" width="80%">{Get.id}</TableCell>
                
                  </TableRow>
                  <TableRow>
                  <TableCell align="center">First Name</TableCell>
                    <TableCell align="center" width="80%">{Get.firstName}</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell align="center">Last Name</TableCell>
                    <TableCell align="center" width="90%">{Get.lastName}</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell align="center">Admin Type</TableCell>
                    <TableCell align="center" width="90%">
                    
                      {Get.adminType}</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell align="center">Admin Access</TableCell>
                    <TableCell align="center" width="90%">
                    {permission.map((task) => {
                      
                          return (
                           
                              <Box sx={{ display: "flex",flexDirection: "row"}}>
                                 {task.dashboard ? <Paper sx={{p:0.5,m:0.5}}>Dashboard   </Paper> : ""}
                               
                                {task.userManagement ? <Paper sx={{p:0.5,m:0.5}}>User Management</Paper> : ""}
                                {task.adminManagement ? <Paper sx={{p:0.5,m:0.5}}>Admin Management</Paper>: ""}
                                {task.systemConfiguration
                                  ?<Paper sx={{p:0.5,m:0.5}}>System Configuration</Paper>: ""}
                                {task.notificationManagement
                                  ? <Paper sx={{p:0.5,m:0.5}}>Notification Management</Paper>: ""}
                                {task.reportManagement
                                  ? <Paper sx={{p:0.5,m:0.5}}>Report Management</Paper> 
                                  : ""}
                         
                              </Box>
                           
                          );
                        })}

                     
                                            </TableCell>
                  </TableRow>
                 <TableRow>
                  <TableCell align="center">Phone Number</TableCell>
                    <TableCell align="center" width="90%">{Get.phoneNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell align="center">Email</TableCell>
                    <TableCell align="center" width="90%">{Get.email}</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell align="center">CreatedAt</TableCell>
                    <TableCell align="center">
                    <Moment  format="D MMM YYYY HH:mm">{Get.CreatedAt}</Moment></TableCell>
                  </TableRow>
                
              </TableBody>  
               
              
            </Paper>
            
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AdminDetails;
