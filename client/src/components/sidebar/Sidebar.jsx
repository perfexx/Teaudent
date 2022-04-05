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
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [expand, setExpand] = useState({
    menu1: true,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
    menu6: false,
    menu7: false,
    menu8: false,
    menu9: false,
    menu10: false,
  });

  // const handleExpand = (menu_id, e) => {
  // const eve = e.currentTarget.dataset.id;
  // console.log(eve);
  // console.log(expand.menu1);
  // setExpand({ expand.menu_id: true });
  // console.log(menu_id);
  // console.log(e);
  // setExpand({ ...expand, menu1: !expand.menu1 });
  // };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className={`sidebarListItem ${expand.menu1 ? "active" : ""}`}>
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>

            <li
              className="sidebarListItem"
              onClick={() => setExpand({ ...expand, menu2: !expand.menu2 })}
            >
              <PermIdentity className="sidebarIcon" />
              Students
              <KeyboardArrowRight
                className={`sidebarArrow ${expand.menu2 ? "active" : ""}`}
              />
            </li>
            <ul className={`sidebarSubItems ${expand.menu2 ? "active" : ""}`}>
              <Link to="/students" className="link">
                <li className="sidebarSubListItem">List</li>
              </Link>
              <Link to="/newuser" className="link">
                <li className="sidebarSubListItem">Create</li>
              </Link>
            </ul>

            <li
              className="sidebarListItem"
              onClick={() => setExpand({ ...expand, menu3: !expand.menu3 })}
            >
              <Quiz className="sidebarIcon" />
              Quiz
              <KeyboardArrowRight
                className={`sidebarArrow ${expand.menu3 ? "active" : ""}`}
              />
            </li>
            <ul className={`sidebarSubItems ${expand.menu3 ? "active" : ""}`}>
              <Link to="/showquiz" className="link">
                <li className="sidebarSubListItem">My Quiz</li>
              </Link>
              <Link to="/newquiz" className="link">
                <li className="sidebarSubListItem">New Quiz</li>
              </Link>
            </ul>

            <li
              className="sidebarListItem"
              onClick={() => setExpand({ ...expand, menu4: !expand.menu4 })}
            >
              <Forum className="sidebarIcon" />
              Forum
              <KeyboardArrowRight
                className={`sidebarArrow ${expand.menu4 ? "active" : ""}`}
              />
            </li>
            <ul className={`sidebarSubItems ${expand.menu4 ? "active" : ""}`}>
              <Link to="/topics" className="link">
                <li className="sidebarSubListItem">My Topics</li>
              </Link>
              <Link to="/newtopic" className="link">
                <li className="sidebarSubListItem">Create Topic</li>
              </Link>
            </ul>

            <Link to="/reports" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Reports
              </li>
            </Link>

            <li
              className="sidebarListItem"
              onClick={() => setExpand({ ...expand, menu6: !expand.menu6 })}
            >
              <EventAvailable className="sidebarIcon" />
              Calendar
              <KeyboardArrowRight
                className={`sidebarArrow ${expand.menu6 ? "active" : ""}`}
              />
            </li>
            <ul className={`sidebarSubItems ${expand.menu6 ? "active" : ""}`}>
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
              onClick={() => setExpand({ ...expand, menu7: !expand.menu7 })}
            >
              <School className="sidebarIcon" />
              Courses
              <KeyboardArrowRight
                className={`sidebarArrow ${expand.menu7 ? "active" : ""}`}
              />
            </li>
            <ul className={`sidebarSubItems ${expand.menu7 ? "active" : ""}`}>
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
