import React from "react";
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
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar() {
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

            <Link to="/students" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Students
              </li>
            </Link>
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
}

export default Sidebar;
