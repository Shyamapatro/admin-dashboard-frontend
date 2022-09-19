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
function New() {
  const navigate = useNavigate();
  const [Get, setGet] = useState('');
  const { id } = useParams();
  console.log("HAmara", id);
  const idd = id;
  console.log("HAmara ddddd", idd);
  const onGetnotification = (idd) => {
    console.log("rowid", idd);
    ApiServices.notificationDetail(id)
      .then((response) => {
        console.log("Äll Datatable", response);
        console.log("Äll Datatable", response.data.data);

        const data3 = response.data.data;
        setGet(data3);
        //  notificationAPI()
        //navigate(`/notification`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => onGetnotification(idd), []);

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
              <Button onClick={() => navigate(-1)}>
                  <ArrowBackIosIcon
                    sx={{ hight: "100%", m: 2, pt: 2, color: "Black" }}
                  /> 
                </Button>
                <Typography variant="h5" sx={{ hight: "100%", m: 2, pt: 2 }}>
                  Details
                </Typography>
              </Box>
              <Divider />
            
              <TableBody width="100%">
                  
                  <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center" width="90%">{Get.id}</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell align="center">Message</TableCell>
                    <TableCell align="center" width="90%">{Get.message}</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell align="center">Title</TableCell>
                    <TableCell align="center" width="90%">{Get.Title}</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell align="center">CreatedAt</TableCell>
                    <TableCell align="center">
                    <Moment  format="D MMM YYYY HH:mm">{Get.createdAt}</Moment></TableCell>
                  </TableRow>
                
              </TableBody>  
               
              
            </Paper>
            
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default New;
