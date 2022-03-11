import React from "react";
import "./user.css";
import { Link } from "react-router-dom";
import {
  CalendarToday,
  LocationCity,
  MailOutlined,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newuser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://previews.123rf.com/images/puhhha/puhhha1706/puhhha170600012/79355362-%E7%BE%8E%E5%AE%B9%E5%A5%B3%E6%80%A7%E3%81%AE%E9%A1%94%E3%80%82%E6%96%B0%E9%AE%AE%E3%81%AA%E8%87%AA%E7%84%B6%E3%81%AA%E8%82%8C%E3%81%A8%E3%83%94%E3%83%B3%E3%82%AF%E8%89%B2%E3%81%AE%E8%83%8C%E6%99%AF%E3%81%AB%E3%83%97%E3%83%AD%E9%A1%94%E3%83%A1%E3%82%A4%E3%82%AF%E3%81%A8%E7%BE%8E%E3%81%97%E3%81%84%E8%8B%A5%E3%81%84%E5%A5%B3%E6%80%A7%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AE%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%BA-%E3%82%A2%E3%83%83%E3%83%97%E3%80%82%E9%AD%85%E5%8A%9B%E3%81%AE%E9%AB%AA%E3%81%AE%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%92%E6%8C%81%E3%81%A4%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%BC%E3%81%AA%E5%A5%B3%E3%81%AE%E5%AD%90%E3%81%AE%E8%82%96%E5%83%8F%E7%94%BB%E3%80%82%E9%AB%98%E5%88%86%E8%A7%A3%E8%83%BD.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Backer</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowButtom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.02.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 4567</span>
            </div>
            <div className="userShowInfo">
              <MailOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">Annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationCity className="userShowIcon" />
              <span className="userShowInfoTitle">Address</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 4567"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="userUpdateInput"
                />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="useUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://previews.123rf.com/images/puhhha/puhhha1706/puhhha170600012/79355362-%E7%BE%8E%E5%AE%B9%E5%A5%B3%E6%80%A7%E3%81%AE%E9%A1%94%E3%80%82%E6%96%B0%E9%AE%AE%E3%81%AA%E8%87%AA%E7%84%B6%E3%81%AA%E8%82%8C%E3%81%A8%E3%83%94%E3%83%B3%E3%82%AF%E8%89%B2%E3%81%AE%E8%83%8C%E6%99%AF%E3%81%AB%E3%83%97%E3%83%AD%E9%A1%94%E3%83%A1%E3%82%A4%E3%82%AF%E3%81%A8%E7%BE%8E%E3%81%97%E3%81%84%E8%8B%A5%E3%81%84%E5%A5%B3%E6%80%A7%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AE%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%BA-%E3%82%A2%E3%83%83%E3%83%97%E3%80%82%E9%AD%85%E5%8A%9B%E3%81%AE%E9%AB%AA%E3%81%AE%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%92%E6%8C%81%E3%81%A4%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%BC%E3%81%AA%E5%A5%B3%E3%81%AE%E5%AD%90%E3%81%AE%E8%82%96%E5%83%8F%E7%94%BB%E3%80%82%E9%AB%98%E5%88%86%E8%A7%A3%E8%83%BD.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>

                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
