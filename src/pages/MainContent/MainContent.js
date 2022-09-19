import React, { useState, useEffect } from "react";
import { Charts } from "../../components/Charts/Charts";
import { Charts1 } from "../../components/Charts/Charts1";
import Charts2 from "../../components/Charts/Chart2";
import Charts3 from "../../components/Charts/Chart3";
import Charts4 from "../../components/Charts/Chart4";
import NavBar from "../../components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { toast,ToastContainer } from "react-toastify";
// import {Toaster} from 'react-hot-toast'
import { requestForToken, onMessageListener } from '../../firebase';
// import CategoryDatatable from '../../components/Tables/CategoryDataTable'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ApiServices } from "../../Config/api";
import "./Home.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function MainContent() {
  const [dashboard, setDashboard] = useState({});

  const [notification, setNotification] = useState({title: '', body: ''});
  const notify = () =>    toast.success(<ToastDisplay/>); 
  function ToastDisplay() {
    return (
      <div>
        <p><b>{notification?.title}</b></p>
        <p>{notification?.body}</p>
      </div>
    );
  };

  useEffect(() => {
    if (notification?.title ){
     notify()
    }
  }, [notification])

  requestForToken();

  onMessageListener()
    .then((payload) => {
      setNotification({title: payload?.notification?.title, body: payload?.notification?.body});     
    })
    .catch((err) => console.log('failed: ', err));

  const dashboardAPI = () => {
    ApiServices.dashboard()
      .then((response) => {
        var data = response.data.data;
        console.log(data);
        setDashboard(data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => dashboardAPI(), []);

  return (
    <>
     {/* <Toaster/> */}
     <ToastContainer/>
      <Box
        sx={{
          display: "flex",
           backgroundColor: "#f5f5f5"
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
            mb: 2,
          }}
        >
          <Box sx={{ height: 364, mr: 4.2 }}>
            <Grid
              container
              xs={12}
              sx={{ flexGrow: 1, justifyContent: "space-between" }}
            >
              <Paper
              className="paper-container"
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  height: 300,
                  width: 195,
                  ml: 0,
                }}
              >
                <Charts dashboard={dashboard} />
              </Paper>

              <Paper
               className="paper-container"
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  height: 300,
                  width: 195,
                }}
              >
                <Charts1 dashboard={dashboard} />
              </Paper>

              <Paper
               className="paper-container"
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  height: 300,
                  width: 195,
                  mr: 0,
                }}
              >
                <Charts2 dashboard={dashboard} />
              </Paper>
            </Grid>
          </Box>
          <Box sx={{ height: 500, mr: 4.2, mt: 2 }}>
            <Paper  className="paper-container" sx={{ height: 500, mt: 2 }}></Paper>
          </Box>
          <Box sx={{ mr: 4.2, mt: 2, display: "block" }}>
            <Grid
              spacing={0}
              container
              style={{ justifyContent: "space-evenly" }}
            >
              <Grid item xs={12} md={6}>
                <Paper  className="paper-container" sx={{ mx: 3, textAlign: "center", my: 2, px: 5 }}>
                  <Charts3 dashboard={dashboard} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper  className="paper-container" sx={{ mx: 3, textAlign: "center", my: 2, px: 5 }}>
                  <Charts4 dashboard={dashboard} />
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MainContent;
