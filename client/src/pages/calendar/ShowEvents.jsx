import React, { useState } from "react";
import "./showEvents.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";

// moment.tz.setDefault("America/Los_Angeles");
const localizer = momentLocalizer(moment); // or globalizeLocalizer
const myEventsList = [
  { start: new Date(), end: new Date(), title: "special event" },
  { start: new Date(), end: new Date(), title: "special event2" },
  { start: new Date(), end: new Date(), title: "special event2" },
];
const ShowEvents = () => {
  // const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  // const [allEvent, setAllEvent] = useState(myEventsList);

  return (
    <div className="showEvents">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default ShowEvents;
