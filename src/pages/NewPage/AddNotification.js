import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ApiServices } from "../../Config/api";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const initialValue = {
    Title:"",
    message:"",
    image:''
};

function AddNotification() {
  const navigate = useNavigate();
  const [add, setAdd] = useState(initialValue);
  const { Title,message } = add;


  const onValueChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
    
  };

  function onImganChange(e){
   
    setAdd({ ...add, image: e.target.files[0]})
  }


//   const addNotificationAPI = () => {
//     ApiServices
//       .addnotification(add)
//       .then((response) => {
       

//         navigate("/notification");
//         toast.success("successfully added ");
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   };
//   useEffect(() => addNotificationAPI(), []);

const submitbutton= async ()=>{
  
  if (!add.image) {
    return toast.error('Please upload image')
} else if (!Title) {
  return toast.error('Please enter Title')
}
else if (!message) {
  return toast.error('Please enter message')
}

    let url = "http://localhost:3000/notification/add-notification"
    const formdata= new FormData();
    formdata.append("image",add.image,add.image.name)
    formdata.append("Title",add.Title)
    formdata.append("message",add.message)
   
 try{
   let response =await axios.post(url,formdata)
   if(response.status===200){
     toast.success("added sucessfully");
     navigate("/notification")
   }

 }
 catch(error){
   toast.error("servor error")
   console.log(error)

 }
}


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
                  Add Notifiation
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
                      <Typography variant="text">Title</Typography>
                      <Input
                        placeholder="Notification Title"
                        sx={{ width: "100%", p: 1 }}
                        onChange={(e) => onValueChange(e)}
                        name="Title"
                        value={Title}
                      />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Typography variant="text">Message</Typography>
                      <Input
                        placeholder="Enter Your Message"
                        sx={{ width: "100%", p: 1 }}
                        onChange={(e) => onValueChange(e)}
                        name="message"
                        value={message}
                      />
                    </FormControl>
                    <br />
                  
            <br/>
            <FormControl>
                      <Typography variant="text">Images</Typography>
                      <Input
                        
                        sx={{ width: "100%", p: 1 }}
                        type="file" 
                        accept=".png, .jpg, .jpeg"
                        onChange={(e) => onImganChange(e)}
                        name="image"
                       
                      />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Button
                        textAligment="center"
                        sx={{
                          width: "100%",
                          p: 1,
                          backgroundColor: "black",
                          color: "white",
                        }}
                        //  onClick={() => addNotificationAPI()}
                         onClick={() => submitbutton()}
                         
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

export default AddNotification;
