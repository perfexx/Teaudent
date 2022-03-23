import React, { useState } from "react";
import "./newEvent.css";
import { TextField, Button } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import AdapterMoment from "@mui/lab/AdapterMoment";
import moment from "moment";

const NewEvent = () => {
  const [svalue, setsValue] = useState(null);
  const [evalue, seteValue] = useState(null);

  const handleAddEvent = (date) => {
    // setAllEvent([...allEvent, newEvent]);
    console.log(date._d);
  };

  return (
    <div className="newEvent">
      <TextField label="Title" variant="outlined" />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label="Start Date"
          format="MM/dd/yyyy"
          value={svalue}
          onChange={handleAddEvent}
          renderInput={(params) => <TextField {...params} />}
        />

        <DatePicker
          label="End Date"
          value={evalue}
          onChange={(newValue) => {
            seteValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button variant="contained" onClick={handleAddEvent}>
        Add Event
      </Button>
      <p>{JSON.stringify({ svalue })}</p>
    </div>
  );
};

export default NewEvent;
