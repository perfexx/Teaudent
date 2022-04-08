import React from "react";
import "./announcements.css";
import { EventNote } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Announcements = () => {
  return (
    <div className="announcements">
      <h3 className="announcementsTitle">Announcements</h3>
      <p>There are no announcements.</p>
      <Link to="/newannounce" className="link">
        <button className="CalendarShowBt">
          <EventNote className="widgetSmIcon" />
          Announce something
        </button>
      </Link>
    </div>
  );
};

export default Announcements;
