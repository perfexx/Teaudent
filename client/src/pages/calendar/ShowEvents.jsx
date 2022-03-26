import React, { useState, useEffect } from "react";
import "./showEvents.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Calendar, momentLocalizer } from "react-big-calendar";
import axios from "axios";
// import { useMatch, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
// import DatePicker from "@mui/lab/DatePicker";
// import AdapterMoment from "@mui/lab/AdapterMoment";

const localizer = momentLocalizer(moment);

const ShowEvents = () => {
  // const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  // const [data, setData] = useState({
  //   title: "",
  //   start: "",
  //   end: "",
  // });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const {
  //   params: { id },
  // } = useMatch("/showevents/:id");
  useEffect(() => {
    axios
      .get("http://localhost:4000/events/")
      .then((res) => res.data)
      .then((data) => setEvents(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/events/edit-event/" + events._id)
  //     .then((res) =>
  //       setData({
  //         title: res.data.title,
  //         start: res.data.start,
  //         end: res.data.end,
  //       })
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const onSelectEvent = () => {
  //   window.alert("clicked");
  // };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const eventsObject = {
  //     title: data.title,
  //     start: data.start,
  //     end: data.end,
  //   };
  //   axios
  //     .put(
  //       "http://localhost:4000/events/update-event/" + events._id,
  //       eventsObject
  //     )
  //     .then((res) => navigate("/showevents"));
  // };

  return (
    <div className="showEvents">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleClickOpen}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update / Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <TextField
            margin="dense"
            id="name"
            label="Title"
            fullWidth
            variant="standard"
            value={events.title}
            autoFocus
          />
          {/* <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Start Date"
              value={data.start}
              onChange={(e) =>
                setData({ ...data, start: moment(e).format("YYYY,MM,DD") })
              }
              renderInput={(params) => <TextField {...params} />}
            />

            <DatePicker
              label="End Date"
              value={data.end}
              onChange={(e) =>
                setData({ ...data, end: moment(e).format("YYYY,MM,DD") })
              }
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
        </DialogContent>
        <DialogActions>
          <Button>Delete</Button>
          <Button>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ShowEvents;
