import React from "react";
import Container from "@mui/material/Container";
import Charts from "../../components/Charts/Charts";
import Box from "@mui/material/Box";
import NavBar from "../../components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material";
import './Home.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
function MainContent() {
  return (
    <>
 <Box sx={{ display: 'flex' }}>
      <NavBar/>
      <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
      <Grid spacing={0}
      container  sx={{mt:12,ml:2}} style={{justifyContent:"space-evenly"}} >
        <Grid item xs={12} md={4}>
          <Charts/>
        </Grid>
        <Grid item xs={12} md={4}>
        <Charts/>
        </Grid>
        <Grid item xs={12} md={4}>
        <Charts/>
        </Grid>
      
      </Grid>
     </Box>
      </Box>
      
    </>
  );
}

export default MainContent;
