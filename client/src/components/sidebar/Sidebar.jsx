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
  // const [expand, setExpand] = useState({
  //   data1: "false",
  //   data2: "false",
  // });

  // const handleExpand = (data) => {
  //   // console.log(e);
  //   // e.stopPropagation();
  //   setExpand(!expand.data1);
  // };

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

            <li
              className="sidebarListItem"
              // onClick={(data1) => handleExpand(data1)}
            >
              <PermIdentity className="sidebarIcon" />
              Students
              <KeyboardArrowRight className="sidebarArrow" />
            </li>
            <ul className="sidebarSubItems">
              {/* <ul className={`sidebarSubItems ${expand.data1 ? "active" : ""}`}> */}
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
              <KeyboardArrowRight className="sidebarArrow" />
            </li>
            <ul className="sidebarSubItems">
              {/* <ul className={`sidebarSubItems ${expand.data2 ? "active" : ""}`}> */}
              <Link to="/topics" className="link">
                <li className="sidebarSubListItem">My Topics</li>
              </Link>
              <Link to="/newtopic" className="link">
                <li className="sidebarSubListItem">Create Topic</li>
              </Link>
            </ul>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Reports
            </li>

            <li className="sidebarListItem">
              <EventAvailable className="sidebarIcon" />
              Calendar
            </li>
            <ul className="sidebarSubItems">
              {/* <ul className={`sidebarSubItems ${expand.data2 ? "active" : ""}`}> */}
              <Link to="/showevents" className="link">
                <li className="sidebarSubListItem">My Events</li>
              </Link>
              <Link to="/newevent" className="link">
                <li className="sidebarSubListItem">New Event</li>
              </Link>
            </ul>
          </ul>

          <h3 className="sidebarTitle">My Courses</h3>
          <ul className="sidebarList">
            <li
              className="sidebarListItem"
              // onClick={(data2) => handleExpand(data2)}
            >
              <School className="sidebarIcon" />
              Courses
              <KeyboardArrowRight className="sidebarArrow" />
            </li>
            <ul className="sidebarSubItems">
              {/* <ul className={`sidebarSubItems ${expand.data2 ? "active" : ""}`}> */}
              <Link to="/courses" className="link">
                <li className="sidebarSubListItem">My Courses</li>
              </Link>
              <Link to="/newcourse" className="link">
                <li className="sidebarSubListItem">New Course</li>
              </Link>
            </ul>

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
