import React, { useState } from "react";
import "./newEvent.css";
import { TextField, Button } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import AdapterMoment from "@mui/lab/AdapterMoment";
import moment from "moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewEvent = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    title: "",
    start: null,
    end: null,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const eventObject = {
      title: event.title,
      start: event.start,
      end: event.end,
    };

    axios.post("http://localhost:4000/events/create-event", eventObject).then(
      (res) =>
        setEvent({
          title: "",
          start: null,
          end: null,
        }),
      navigate("/showevents")
    );
  };

  return (
    <div className="newEvent">
      <form onSubmit={onSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
        />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Start Date"
            value={event.start}
            onChange={(e) =>
              setEvent({ ...event, start: moment(e).format("YYYY,MM,DD") })
            }
            renderInput={(params) => <TextField {...params} />}
          />

          <DatePicker
            label="End Date"
            value={event.end}
            onChange={(e) =>
              setEvent({ ...event, end: moment(e).format("YYYY,MM,DD") })
            }
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button variant="contained" type="submit">
          Add Event
        </Button>
        {/* <p>{JSON.stringify(event)}</p> */}
      </form>
    </div>
  );
};

export default NewEvent;
