import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { ApiServices } from "../../Config/api";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ProfilePage() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [showImage,setshowImage]= useState("");
  let id = useParams();
  
  
  console.log(id);
function onImganChange(event) {
    event.preventDefault();
    console.log(event.target.files[0])
    var file = event.target.files[0];
        setImage(file);
        setshowImage(URL.createObjectURL(event.target.files[0]));
}

  const updateProfile = async () => {
    if (!image) {
      return toast.error('Please upload image')
  } else if (!phoneNumber) {
    return toast.error('Please enter phoneNumber')
  } else if (!firstName) {
    return toast.error('Please enter firstName')
  } 
 
   const formdata = new FormData();
  //  formdata.append('id', id.id)
    formdata.append("image", image);
    formdata.append("phoneNumber", phoneNumber);
    formdata.append("firstName", firstName);
    formdata.append("lastName", lastName);
  ApiServices.ProfilePage(formdata)
        .then((response) => {
          console.log("rrrrrrresopnse", response);
          toast.success("Profile is successfully Updated!");
        navigate("/admin");
        })
        .catch((error) => {
          console.log(error.response);
        });
  };
  function setValues() {
    const query = new URLSearchParams(window.location.search);
    setFirstName(query.get('firstName'));
    setLastName(query.get('lastName'));
    setPhoneNumber(query.get('phoneNumber'));
   
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
                        onChange={(e) => setFirstName(e.target.value)}
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
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </FormControl>
                    <br />
                    <br />
                    <FormControl>
                      <Typography variant="text">Image</Typography>
                      <div className="upload_image">
                        <img src={showImage} alt="" className="img-circle profile_image"  />
                        <input type="file"  onChange={(e) => onImganChange(e)}/>
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
                        onClick={() => updateProfile()}
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
    </>
  );
}

export default ProfilePage;
