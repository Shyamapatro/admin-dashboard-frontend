import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ApiServices } from "../../Config/api";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




function AddAdmin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adminType, setAdminType] = useState("");

  const [check, setCheck] = useState("");
  const [admind, setAdmind] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [notificationM, setNotificationM] = useState(false);
  const [systemConfiguration, setSystemConfiguration] = useState(false);
  const [userManagement, setUserManagement] = useState(false);
  const [reportManagement, setReportManagement] = useState(false);
 
  const checkBtn = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);
   
    setCheck(check);
    if (value==='adminManagement' && checked) {
      setAdmind(true)
    }

      else if (value==='dashboard' && checked){
        setDashboard(true)
      }
      else if (value==='notificationManagement' && checked){
        setNotificationM(true)
      }
      else if (value==='userManagement' && checked){
        setUserManagement(true)
      }
      else if (value==='systemConfiguration' && checked){
        setSystemConfiguration(true)
      }
      else if (value==='reportManagement' && checked){
        setReportManagement(true)
      }
      else if ((value==='reportManagement' && checked)
      &&(value==='systemConfiguration' && checked)
      &&(value==='userManagement' && checked)
      &&(value==='notificationManagement' && checked)
      &&(value==='dashboard' && checked)
      &&(value==='adminManagement' && checked)){
        setReportManagement(true)
        setSystemConfiguration(true)
        setUserManagement(true)
        setDashboard(true)
        setNotificationM(true)
        setAdmind(true)
      }
       else {
      setCheck([check.filter((e) => e !== value)]);
    }
  };
 const addAdminAPI = () => {
  

    var x=[{'module':'adminManagement',"permission":`${admind}`},{'module':'dashboard',"permission":`${dashboard}`},{'module':'userManagement',"permission":`${userManagement}`},{'module':'notificationManagement',"permission":`${notificationM}`},
    {'module':'systemConfiguration',"permission":`${systemConfiguration}`},{'module':'reportManagement',"permission":`${reportManagement}`}];
    console.log("check botton",x)
    console.log("hdhddjdjdd",check)
    let payload = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      adminType: adminType,
        accessPermissions:x

      
    };
    
  
    ApiServices.addadmin(payload)
      .then((response) => {
        console.log("resopnse", response);
        navigate("/admin");
        toast.success("successfully added ");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => addAdminAPI(), []);
 return (
    <>
      <Box
        sx={{
          display: "flex",
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
                  Add Admin Details
                </Typography>
              </Box>
              <Divider />
              <Grid
                container
                spacing={1}
                sx={{ display: "flex", direction: "column", p: 2 }}
              >
                <Grid container item spacing={3} sx={{ mt: 2 }}>
                  <Grid
                    item
                    spacing={3}
                    xs={12}
                    md={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControl>
                      <Typography variant="text">Email</Typography>
                      <Input
                        required
                        placeholder="Enter Email"
                        sx={{ width: "100%", p: 1 }}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        value={email}
                      />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Typography variant="text">First Name</Typography>
                      <Input
                        placeholder="Enter First name"
                        sx={{ width: "100%", p: 1 }}
                        onChange={(e) => setFirstName(e.target.value)}
                        name="firstName"
                        value={firstName}
                      />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Typography variant="text">Last Name</Typography>
                      <Input
                        placeholder="Enter Last name"
                        sx={{ width: "100%", p: 1 }}
                        onChange={(e) => setLastName(e.target.value)}
                        name="lastName"
                        value={lastName}
                      />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Typography variant="text">Admin Type</Typography>
                      <Select
                        id="app platform"
                        name="adminType"
                        value={adminType}
                        onChange={(e) => setAdminType(e.target.value)}
                      >
                        <MenuItem value="SUPER_ADMIN">SUPER_ADMIN</MenuItem>
                        <MenuItem value="SUB_ADMIN">SUB_ADMIN</MenuItem>
                      </Select>
                    </FormControl>
                    <br />

                    <FormControl component="fieldset" fullWidth margin="normal">
                      <Typography>Access Permission</Typography>
                      <FormGroup row name="accessPermissions" value={check}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Admin "
                          value="adminManagement"
                          onChange={(e) => checkBtn(e)}
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Dashboard"
                          value="dashboard"
                          onChange={(e) => checkBtn(e)}
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Notification "
                          value="notificationManagement"
                          onChange={(e) => checkBtn(e)}
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="System Configuration"
                          value="systemConfiguration"
                          onChange={(e) => checkBtn(e)}
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="User "
                          value="userManagement"
                          onChange={(e) => checkBtn(e)}
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Report Management"
                          value="reportManagement"
                          onChange={(e) => checkBtn(e)}
                        />
                      </FormGroup>
                    </FormControl> 

                    <FormControl>
                      <Button
                        textAligment="center"
                        sx={{
                          width: "100%",
                          p: 1,
                          backgroundColor: "black",
                          color: "white",
                        }}
                        onClick={() => addAdminAPI()}
                      >
                        Save
                      </Button>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AddAdmin;
