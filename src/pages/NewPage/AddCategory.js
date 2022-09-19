import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
 import { ApiServices } from "../../Config/api";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";
const initialValue = {
  name: "",
  image:""
};
function AddCategory() {
  const navigate = useNavigate();

  const [category, setCategory] = useState(initialValue);
 

  const { name} = category;
  const onValueChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  function onImganChange(e){
   
    setCategory({ ...category, image: e.target.files[0]})
  }
  
  // const addCategoryAPI = () => {
       
  //   ApiServices.addCategory(category)
  //     .then((response) => {
  //       console.log("rrrrrrresopnse", response);

  //       navigate("/reported-content");
  //       toast.success("successfully added ");
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // };
  // useEffect(() => addCategoryAPI(), []);
  
  const submitbutton= async ()=>{
  
    if (!category.image) {
      return toast.error('Please upload image')
  } else if (!name) {
    return toast.error('Please enter name')
  }


    let url = "http://localhost:3000/category/add-category"
    const formdata= new FormData();
    formdata.append("image",category.image,category.image.name)
    formdata.append("name",category.name)
    // formdata.append("title",category.title)
    console.log("Category: " ,formdata.name)
 try{
   let response =await axios.post(url,formdata)
   if(response.status===200){
     toast.success("added sucessfully");
     navigate("/category")
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
                  Add Category Details
                </Typography>
              </Box>
              <Divider />
              <Grid
                container
                spacing={1}
                sx={{ display: "flex", direction: "column", p: 2 }}
              >
                <Grid container item sx={{ mt: 2 }}>
                  <Grid
                    item
                  
                    xs={12}
                    md={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControl>
                      <Typography variant="text">Category Name</Typography>
                      <Input
                        placeholder="Enter Category"
                        sx={{ width: "100%", p: 1 }}
                        onChange={(e) => onValueChange(e)}
                        name="name"
                        value={name}
                       
                      />
                    </FormControl>
                    <br />
                    <br />
                    <FormControl>
                      <Typography variant="text">Category Name</Typography>
                      <Input
                        placeholder="Enter Category"
                        sx={{ width: "100%", p: 1 }}
                        type="file" 
                        accept=".png, .jpg, .jpeg"
                        onChange={(e) => onImganChange(e)}
                        name="image"
                       
                      />
                    </FormControl>
                   
            <br/>
                    <FormControl>
                      <Button
                       
                        sx={{
                          width: "100%",
                          p: 1,
                          backgroundColor: "black",
                          color: "white",
                        }}
                        //  onClick={() => addCategoryAPI()}
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

export default AddCategory;
