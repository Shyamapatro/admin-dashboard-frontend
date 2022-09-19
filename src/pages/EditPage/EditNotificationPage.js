import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import { ApiServices } from "../../Config/api";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


import './EditNotification.css'
function EditnotificationPage() {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
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

  const submitbutton = async () => {
    if (!image) {
      toast.error('Please upload image')
  } else if (!title) {
      toast.error('Please enter title')
  } else if (!message) {
      toast.error('Please enter message')
  } 
 
   const formdata = new FormData();
   formdata.append('id', id.id)
    formdata.append("image", image);
    formdata.append("Title", title);
    formdata.append("message", message);
  ApiServices.Editnotification(formdata)
        .then((response) => {
          console.log("rrrrrrresopnse", response);
          toast.success('update')
          navigate("/notification");
        })
        .catch((error) => {
          console.log(error.response);
        });
  };

  function setValues() {
    const query = new URLSearchParams(window.location.search);
    setTitle(query.get('Title'));
    setMessage(query.get('message'));
    setImage(query.get('image'));
   
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
                <Button onClick={() => navigate(-1)}>
                  <ArrowBackIosIcon
                    sx={{ hight: "100%", m: 2, pt: 2, color: "Black" }}
                  />
                </Button>
                <Typography variant="h5" sx={{ hight: "100%", m: 2, pt: 2 }}>
                  Edit notifications
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
                        placeholder="Enter Title"
                        sx={{ width: "100%", p: 1 }}
                        name="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </FormControl>
                    <br />
                    <br />
                    <FormControl>
                      <Typography variant="text">Message</Typography>
                      <Input
                        placeholder="Enter message"
                        sx={{ width: "100%", p: 1 }}
                        name="message"
                         value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </FormControl>
                    <br />

                    <FormControl>
                      <Typography variant="text">Category Name</Typography>
                      <div className="upload_image">
                      
                        <img src={showImage} alt="" className="img-circle profile_image" style={{}} name="image"  value={image} />
                        <input type="file"  onChange={(e) => onImganChange(e)}></input>
                    </div>
                    
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
                        onClick={() => submitbutton()}
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

export default EditnotificationPage;
