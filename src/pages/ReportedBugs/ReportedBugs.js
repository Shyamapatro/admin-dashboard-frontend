import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Container,
  Paper,
  Divider,
  IconButton,
} from "@mui/material";
import { ApiServices } from "../../Config/api";
import InputBase from "@mui/material/InputBase";
import NavBar from "../../components/NavBar/NavBar";
import Datatable from "../../components/Tables/ReportBugDataTable";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import "./reported-bug.css";
import { NavLink } from "react-router-dom";
function ReportedBugs() {
  const [bugs, setBugs] = useState({});

  const [approve, setapprove] = useState({});
  const [declined, setdeclined] = useState({});
  const [pending, setpending] = useState({});
  const [query, setQuery] = useState("");

  const BugAPI = () => {
    ApiServices.reportedBugs()
      .then((response) => {
        var data = response.data.data.bugData.rows;
        console.log("hhhh", data);
        var pending = response.data.data.reportBugpending;
        console.log("pending::::::::::::", pending);
        var approved = response.data.data.reportBugapproved;
        console.log("approved::::::::::::", approved);
        var declined = response.data.data.reportBugdeclined;
        console.log("declined::::::::::::", declined);
        console.log(data);
        setBugs(data);
        setapprove(approved);
        setpending(pending);
        setdeclined(declined);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onDelete = (id) => {
    console.log("rowdotid==============", id);
  };
  useEffect(() => BugAPI(), []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavBar />
        <Box
          component="main"
          sx={{
            // backgroundColor: (theme) =>
            //   theme.palette.mode === "light"
            //     ? theme.palette.grey[100]
            //     : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
            <Grid item xs={12}>
              <Paper className="search-container" sx={{ p: 0, display: "flex", flexDirection: "column" }}>
                <Box
                  container
                  className="search-box"
                  sx={{
                    m: 2,
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    background: "whitesmoke",
                    width: "95%",
                  }}
                >
                  <InputBase
                  className="search-box"
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Reported Bugs"
                    onChange={(event) => setQuery(event.target.value)}
                    inputProps={{ "aria-label": "ReportedBugs" }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px", mr: "30px" }}
                    aria-label="ReportedBugs"
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
                <Divider />
                <Box
                  sx={{
                    background: "whitesmoke",
                    display: "flex",
                    flexDirection: "row",
                    color: "rgb(59 53 167)",
                    "& > :not(style)": {
                      my: 3,
                      width: "100%",
                      height: 10,
                      color:'rgb(59 53 167)'
                    },
                  }}
                >
                  <Box
                    md={12}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      color: "rgb(59 53 167)",
                    }}
                  >
                    <Paper />
                    Total
                    <Divider orientation="vertical" sx={{ m: -2 }} flexItem />
                    {approve.count + pending.count + declined.count}
                    <Paper />
                    <Paper />
                    Approve
                    <Divider orientation="vertical" sx={{ m: -2 }} flexItem />
                    {approve.count}
                    <Paper />
                    <Paper />
                    Pending
                    <Divider orientation="vertical" sx={{ m: -2 }} flexItem />
                    {pending.count}
                    <Paper />
                    <Paper />
                    declined
                    <Divider orientation="vertical" sx={{ m: -2 }} flexItem />
                    {declined.count}
                  </Box>

                  <Box
                    md={6}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box md={9}></Box>
                    <Box md={3}></Box>
                  </Box>
                </Box>
                <Datatable
                  bugs={bugs}
                  query={query}
                  onDelete={onDelete}
                  BugAPI={BugAPI}
                />
              </Paper>
            </Grid>
          </Container>
        </Box>

        <NavLink to="/reported-bugs/new" className="btn">
          <AddIcon />
        </NavLink>
      </Box>
    </>
  );
}
export default ReportedBugs;
