import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ApiServices } from "../../Config/api";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const initialValue = {
    reportedItem: "",
    reportedBy: "",
   status: "",
   Description:""
};

function AddEvents() {
  const navigate = useNavigate();
  const [event, setEvent] = useState(initialValue);
  const { reportedItem, reportedBy, status ,Description} = event;


  const onValueChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
    
  };
  const addReportedContentAPI = () => {
    ApiServices
      .addreportedContent(event)
      .then((response) => {
        console.log("rrrrrrresopnse", response);

        navigate("/reported-content");
        toast.success("successfully added ");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => addReportedContentAPI(), []);

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
                  Add Reported Content
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
                      <Typography variant="text">reportedItem</Typography>
                      <Input
                        placeholder="reportedItem"
                        sx={{ width: "100%", p: 1 }}
                        onChange={(e) => onValueChange(e)}
                        name="reportedItem"
                        value={reportedItem}
                      />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Typography variant="text">reportedBy</Typography>
                      <Input
                        placeholder="reportedBy"
                        sx={{ width: "100%", p: 1 }}
                        onChange={(e) => onValueChange(e)}
                        name="reportedBy"
                        value={reportedBy}
                      />
                    </FormControl>
                    <br />
                    {/* <FormControl>
                    <Typography variant="text">Status</Typography>
                    <Select
                        id="status"
                       
                        name='status'
                        value={status}
                        onChange={(e) => onValueChange(e)}

                      >
                        <MenuItem  value='approved'>approved</MenuItem>
                        <MenuItem  value='pending'>pending</MenuItem>
                        <MenuItem  value='declined'>declined</MenuItem>
                       
                      </Select> 
                    </FormControl>
            <br/> */}
            
                    <FormControl>
                      <Typography variant="text">Description</Typography>
                      <Input
                        placeholder="Description"
                        sx={{ width: "100%", p: 1 }}
                        onChange={(e) => onValueChange(e)}
                        name="Description"
                        value={Description}
                      />
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
                         onClick={() => addReportedContentAPI()}
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

export default AddEvents;
