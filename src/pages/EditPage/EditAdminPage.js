import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, MenuItem, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useState,useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import { ApiServices } from "../../Config/api";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Avatar from '@mui/material/Avatar';
function EditAdminPage() {
  let navigate = useNavigate();

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [adminType, setAdminType] = useState("");
  const [image, setImage] = useState("");
  // const [adminpermissions,setAdminPermissions]= useState([]);
  const [showImage,setshowImage]= useState("");
  
  let id = useParams();
  console.log(id);
 



  const updateAdmin = () =>
   {
  
    if (!image) {
      return toast.error('Please upload image')
  } else if (!lastName) {
    return toast.error('Please enter lastName')
  } else if (!firstName) {
    return toast.error('Please enter firstName')
  } 
  else if (!phonenumber) {
    return toast.error('Please enter phone Number')
  } 
  else if (phonenumber.length>10) {
    return toast.error('You can only enter 10 number')
  } 
  else if (phonenumber.length<10) {
    return toast.error('Please enter 10 number')
  } 
  // var x=[{'module':'adminManagement',"permission":`${admind}`},{'module':'dashboard',"permission":`${dashboard}`},{'module':'userManagement',"permission":`${userManagement}`},{'module':'notificationManagement',"permission":`${notificationM}`},
  // {'module':'systemConfiguration',"permission":`${systemConfiguration}`},{'module':'reportManagement',"permission":`${reportManagement}`}];
  
   const formdata = new FormData();
   formdata.append('id', id.id)
    formdata.append("image", image);
    formdata.append("firstName", firstName);
    formdata.append("lastName", lastName);
    formdata.append("adminType", adminType);
    formdata.append("phoneNumber", phonenumber);
  ApiServices.editAdmin(formdata)
        .then((response) => {
          console.log("rrrrrrresopnse", response);
          toast.success('Data updated successfully')
          navigate("/admin");
        })
        .catch((error) => {
          console.log(error.response);
        });
  };



  function onImageChange(event) {
    event.preventDefault();
    console.log(event.target.files[0])
    var file = event.target.files[0];
        setImage(file);
        setshowImage(URL.createObjectURL(event.target.files[0]));
}



  function setValues() {
    const query = new URLSearchParams(window.location.search);
    setFirstname(query.get('firstName'));
    setLastName(query.get('lastName'));
    setPhoneNumber(query.get('phoneNumber'));
    // setEmail(query.get("email"));
    setAdminType(query.get('adminType')) 
    // setAdminPermissions(query.get('admin_permissions'))
    // console.log('setAdminPermissions',adminpermissions);
  }

  useEffect(() => setValues(), []);

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
            <Box sx={{ mr: 4.2, mt: 2 }} md={12}>
              <Paper sx={{ mt: 3 }}>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Button onClick={() => navigate("/admin")}>
                    <ArrowBackIosIcon
                      sx={{ hight: "100%", m: 2, pt: 2, color: "Black" }}
                    />
                  </Button>
                  <Typography variant="h5" sx={{ hight: "100%", m: 2, pt: 2 }}>
                    Update Profile
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
                        <Typography variant="text">Enter First Name</Typography>
                        <Input
                          placeholder="Enter First Name"
                          sx={{ width: "100%", p: 1 }}
                          name="firstName"
                          value={firstName}
                          onChange={(e) => setFirstname(e.target.value)}
                        />
                      </FormControl>
                      <br />
                      <br />
                      <FormControl>
                        <Typography variant="text">Enter Last Name</Typography>
                        <Input
                          placeholder="Enter Last Name"
                          sx={{ width: "100%", p: 1 }}
                          name="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </FormControl>
                      <br />
                      <br />
                      <FormControl>
                        <Typography variant="text">Phone Number</Typography>
                        <Input
                          placeholder="Phone Number"
                          sx={{ width: "100%", p: 1 }}
                          name="phoneNumber"
                          value={phonenumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </FormControl>
                      <br />
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
                    {/* <FormControl component="fieldset" fullWidth margin="normal">
                      <Typography>Access Permission</Typography>
              
                      <FormGroup row name="accessPermissions" value={adminpermissions}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Admin "
                          value="adminManagement"
                          // onChange={(e) => checkBtn(e)}
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Dashboard"
                          value="dashboard"
                          // onChange={(e) => checkBtn(e)}
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Notification "
                          value="notificationManagement"
                          // onChange={(e) => checkBtn(e)}
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="System Configuration"
                          value="systemConfiguration"
                          // onChange={(e) => checkBtn(e)}
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="User "
                          value="userManagement"
                          // onChange={(e) => checkBtn(e)}
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Report Management"
                          value="reportManagement"
                          // onChange={(e) => checkBtn(e)}
                        />
                      </FormGroup>
                    </FormControl>  */}
                    <br />
                    <FormControl>
                      {/* <Typography variant="text">Image</Typography> */}
                      {/* <input type="file"  onChange={(e) => onImageChange(e)}>  */}
                      <div className="upload_image">
                     
                      <img src= {showImage} alt="" className="img-circle profile_image"  name="image"  value={image} />
                      <input type="file"  onChange={(e) => onImageChange(e)}></input>
                  </div>
       
             
      
                    
                    </FormControl>
                    <br/>
                      <FormControl>
                        <Button
                          textAligment="center"
                          sx={{
                            width: "100%",
                            p: 1,
                            backgroundColor: "black",
                            color: "white",
                          }}
                          onClick={() => updateAdmin()}
                        >
                          Update
                        </Button>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default EditAdminPage;
