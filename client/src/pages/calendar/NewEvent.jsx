import React, { useState } from "react";
import "./newEvent.css";
import { TextField, Button } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import AdapterMoment from "@mui/lab/AdapterMoment";
import moment from "moment";

const NewEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    start: null,
    end: null,
  });

  const handleAddEvent = (date) => {
    // setAllEvent([...allEvent, newEvent]);
    const beginDate = moment(date._d).format("YYYY,MM,DD");
    setEvent({
      title: "",
      start: beginDate,
      end: null,
    });

    // console.log(event);
  };

  return (
    <div className="newEvent">
      <TextField
        label="Title"
        variant="outlined"
        onChange={(e) => setEvent({ ...event, title: e.target.value })}
      />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label="Start Date"
          // format="MM/dd/yyyy"
          value={event.start}
          onChange={handleAddEvent}
          renderInput={(params) => <TextField {...params} />}
        />

        <DatePicker
          label="End Date"
          value={event.end}
          onChange={() => setEvent(event.end)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button variant="contained" onClick={handleAddEvent}>
        Add Event
      </Button>
      <p>{console.log(event)}</p>
    </div>
  );
};

export default NewEvent;
