import React from "react";
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

function ChangePassword() {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [oldPassword, setoldPassword] = useState("");

  let id = useParams();
  console.log(id);
  function updatePassword() {
    var params = {
      //   id:id.id,
      password: password,
      oldPassword: oldPassword,
    };
    ApiServices.changePassword(params)
      .then((response) => {
        console.log("response", response);
        toast.success("Password is successfully Changed");
        navigate("/admin");
      })
      .catch((error) => {});
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
                <Button onClick={() => navigate("/admin")}>
                  <ArrowBackIosIcon
                    sx={{ hight: "100%", m: 2, pt: 2, color: "Black" }}
                  />
                </Button>
                <Typography variant="h5" sx={{ hight: "100%", m: 2, pt: 2 }}>
                  Change Password
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
                      <Typography variant="text">Old Password</Typography>
                      <Input
                        placeholder="Old Password"
                        type='password'
                        sx={{ width: "100%", p: 1 }}
                        name="oldPassword"
                        onChange={(e) => setoldPassword(e.target.value)}
                      />
                    </FormControl>
                    <br />
                    <br />
                    <FormControl>
                      <Typography variant="text">New Password</Typography>
                      <Input
                        placeholder="New Password"
                        sx={{ width: "100%", p: 1 }}
                        type='password'
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
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
                        onClick={() => updatePassword()}
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

export default ChangePassword;
