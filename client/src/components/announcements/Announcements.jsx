import React from "react";
import "./announcements.css";
import { EventNote } from "@mui/icons-material";

const Announcements = () => {
  return (
    <div className="announcements">
      <h3 className="announcementsTitle">Announcements</h3>
      <p>There are no announcements.</p>
      <button className="CalendarShowBt">
        <EventNote className="widgetSmIcon" />
        Announce something
      </button>
    </div>
  );
};

export default Announcements;
