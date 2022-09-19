import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Button, Divider, MenuItem, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useState,useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import { ApiServices } from "../../Config/api";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditReportBugPage() {
  let navigate = useNavigate();

  const [reportedItem, setReportedItem] = useState("");
  const [reportedBy, setReportedBy] = useState("");
  const [status, setStatus] = useState("");


  let id = useParams();
  console.log(id);
  function updateReportedBug() {
    var params = {
      id:id.id,
      reportedItem: reportedItem,
      reportedBy: reportedBy,
      status: status,
   
    };
    ApiServices.editreportedBugs(params)
      .then((response) => {
        console.log("response", response);
        toast.success("Update successful");
        navigate("/reported-bugs");
      })
      .catch((error) => {


      });
  }

  function setValues() {
    const query = new URLSearchParams(window.location.search);
    setReportedItem(query.get('reportedItem'));
    setReportedBy(query.get('reportedBy'));
    setStatus(query.get('status'));
  
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
                  <Button onClick={() => navigate("/reported-bugs")}>
                    <ArrowBackIosIcon
                      sx={{ hight: "100%", m: 2, pt: 2, color: "Black" }}
                    />
                  </Button>
                  <Typography variant="h5" sx={{ hight: "100%", m: 2, pt: 2 }}>
                    Update Reported Bugs
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
                        <Typography variant="text">Reported Item</Typography>
                        <Input
                          sx={{ width: "100%", p: 1 }}
                          name="reportedItem"
                          value={reportedItem}
                          onChange={(e) => setReportedItem(e.target.value)}
                        />
                      </FormControl>
                      <br />
                      <br />
                      <FormControl>
                        <Typography variant="text">Reported By</Typography>
                        <Input
                          sx={{ width: "100%", p: 1 }}
                          name="reportedBy"
                          value={reportedBy}
                          onChange={(e) => setReportedBy(e.target.value)}
                        />
                      </FormControl>
                      <br />
                      <br />
                     
                      <FormControl>
                    <Typography variant="text">Status</Typography>
                
                    <Select
                        id="status"
                        name='status'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}

                      >
                        <MenuItem  value='approved'>approved</MenuItem>
                        <MenuItem  value='pending'>pending</MenuItem>
                        <MenuItem  value='declined'>declined</MenuItem>
                       
                      </Select> 
                    </FormControl>
                      <br />
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
                          onClick={() => updateReportedBug()}
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

export default EditReportBugPage;
