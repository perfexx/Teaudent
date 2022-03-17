import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import avatar from "../../img/avatar.png";
import logo from "../../img/logo.png";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className="logo" src={logo} alt="Teaudent" />
        </div>
        <div className="topRight">
          <div className="topbarContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarContainer">
            <Settings />
          </div>
          <img src={avatar} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
