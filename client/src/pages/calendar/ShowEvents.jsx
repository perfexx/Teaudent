import React, { useState, useEffect } from "react";
import "./showEvents.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Calendar, momentLocalizer } from "react-big-calendar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import AdapterMoment from "@mui/lab/AdapterMoment";
import toast, { Toaster } from "react-hot-toast";

const localizer = momentLocalizer(moment);

const ShowEvents = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState({
    title: null,
    start: null,
    end: null,
  });
  const [open, setOpen] = useState(false);
  // const [data, setData] = useState({
  //   title: "",
  //   start: "",
  //   end: "",
  // });

  const handleClickOpen = (e) => {
    // navigate("/editevent/", { events_id });
    setSelected(e);
    setOpen(true);
    // window.alert(e._id);
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

  const editHandler = (e) => {
    e.preventDefault();
    const eventObject = {
      title: selected.title,
      start: selected.start,
      end: selected.end,
    };

    axios
      .put(
        "http://localhost:4000/events/update-event/" + selected._id,
        eventObject
      )
      .then((res) => setOpen(false));
    toast.success("Event Deleted Successfully !");
    window.location.reload(true);
  };

  const deleteHandler = () => {
    axios
      .delete("http://localhost:4000/events/delete-event/" + selected._id)
      .then((res) => setOpen(false))
      .catch((error) => {
        console.log(error);
      });
    toast.success("Event Deleted Successfully !");
    window.location.reload(true);
  };

  return (
    <div className="showEvents">
      <Toaster />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleClickOpen}
      />

      <Dialog open={open} onClose={handleClose}>
        <form>
          <DialogTitle>Update / Delete</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ mb: 3 }}>
              You can Update or Delete events here.
            </DialogContentText>

            <TextField
              margin="dense"
              sx={{ mb: 5 }}
              label="Title"
              fullWidth
              variant="standard"
              value={selected.title}
              // autoFocus
              onChange={(e) =>
                setSelected({ ...selected, title: e.target.value })
              }
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="Start Date"
                value={selected.start}
                onChange={(e) =>
                  setSelected({
                    ...selected,
                    start: moment(e).format("YYYY,MM,DD"),
                  })
                }
                renderInput={(params) => <TextField {...params} />}
              />

              <DatePicker
                label="End Date"
                value={selected.end}
                onChange={(e) =>
                  setSelected({
                    ...selected,
                    end: moment(e).format("YYYY,MM,DD"),
                  })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              onClick={deleteHandler}
              color="error"
              variant="contained"
            >
              Delete
            </Button>
            <Button
              type="submit"
              onClick={editHandler}
              color="success"
              variant="contained"
            >
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default ShowEvents;
