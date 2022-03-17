import React from "react";
import "./commingEvents.css";
import { EventNote } from "@mui/icons-material";

const CommingEvents = () => {
  return (
    <div className="commingEvents">
      <h3 className="commingEventsTitle">Upcomming Events</h3>
      <p>There are no upcomming events.</p>
      <button className="CalendarShowBt">
        <EventNote className="widgetSmIcon" />
        Go To Calendar
      </button>
    </div>
  );
};

export default CommingEvents;
