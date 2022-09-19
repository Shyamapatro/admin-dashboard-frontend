import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CalenderEvents.css";
import NavBar from "../../components/NavBar/NavBar";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import TimePicker from "react-time-picker";
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: false,
    start: new Date(2022, 9, 9),
    end: new Date(2022, 9, 9),
  },
  {
    title: "Vacation",
    start: new Date(2022, 9, 10),
    end: new Date(2021, 9, 10),
  },
];

function CalenderEvents() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [value, onChange] = useState("10:00");
  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavBar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
            <Grid item xs={12}>
              <Box className="CalenderEvents">
                

                <Paper sx={{ p: 3 }}>
                {/* <h2>Add New Event</h2>
                <div>
                  <input
                    type="text"
                    placeholder="Add Title"
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.title}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, title: e.target.value })
                    }
                  />
                  <DatePicker
                    placeholderText="Start Date"
                    style={{ marginRight: "10px" }}
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start })}
                  />
                  <TimePicker onChange={onChange} value={value} />
                  <DatePicker
                    placeholderText="End Date"
                    selected={newEvent.end}
                    onChange={(end) => setNewEvent({ ...newEvent, end })}
                  />
                  <button
                    stlye={{ marginTop: "10px" }}
                    onClick={handleAddEvent}
                  >
                    Add Event
                  </button>
                </div> */}
                  <Typography variant="h5" text-align="center">
                    Calender Events
                  </Typography>
                  <Calendar
                    localizer={localizer}
                    events={allEvents}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 400, margin: "50px" }}
                  />
                </Paper>
              </Box>
            </Grid>
          </Container>
        </Box>

        <NavLink to="/calender-events/new" className="btn">
          <AddIcon />
        </NavLink>
        <br />
        {/* <NavLink to="/calender-events/edit"  sx={{mt:14}}>
        <EditIcon/>
</NavLink> */}
      </Box>
    </>
  );
}

export default CalenderEvents;
