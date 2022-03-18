import React, { useState } from "react";
import "./sidebar.css";
import {
  Home,
  PermIdentity,
  Quiz,
  Forum,
  Timeline,
  PeopleOutline,
  Assignment,
  Grading,
  EventAvailable,
  School,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>

            <li className="sidebarListItem" onClick={() => setExpand(!expand)}>
              <PermIdentity className="sidebarIcon" />
              Students
              <KeyboardArrowRight className="sidebarArrow" />
            </li>
            <ul className={`sidebarSubItems ${expand ? "active" : ""}`}>
              <Link to="/students" className="link">
                <li className="sidebarSubListItem">List</li>
              </Link>
              <Link to="/newuser" className="link">
                <li className="sidebarSubListItem">Create</li>
              </Link>
            </ul>
            <li className="sidebarListItem">
              <Quiz className="sidebarIcon" />
              Exams
            </li>
            <li className="sidebarListItem">
              <Forum className="sidebarIcon" />
              Forum
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Reports
            </li>
            <li className="sidebarListItem">
              <EventAvailable className="sidebarIcon" />
              Calendar
            </li>
          </ul>

          <h3 className="sidebarTitle">My Courses</h3>
          <ul className="sidebarList">
            <Link to="/courses" className="link">
              <li className="sidebarListItem">
                <School className="sidebarIcon" />
                Courses
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PeopleOutline className="sidebarIcon" />
                Participants
              </li>
            </Link>
            <li className="sidebarListItem">
              <Assignment className="sidebarIcon" />
              Assignments
            </li>
            <li className="sidebarListItem">
              <Grading className="sidebarIcon" />
              Grades
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
