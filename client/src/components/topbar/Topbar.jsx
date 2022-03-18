import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import avatar from "../../img/avatar.png";
import logo from "../../img/logo.png";
import { Tooltip } from "@mui/material";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className="logo" src={logo} alt="Teaudent" />
        </div>
        <div className="topRight">
          <div className="topbarContainer">
            <Tooltip title="Notifications">
              <NotificationsNone />
            </Tooltip>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarContainer">
            <Tooltip title="Language">
              <Language />
            </Tooltip>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarContainer">
            <Tooltip title="Setting">
              <Settings />
            </Tooltip>
          </div>
          <img src={avatar} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
