import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Quiz,
  Forum,
  Timeline,
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
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/users" className="link">
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
