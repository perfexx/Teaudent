import React, { Component } from "react";
import "./newUser.css";
import axios from "axios";

export default class NewUser extends Component {
  constructor(props) {
    super(props);
    // Setting up functions
    this.onChangeStudentUsername = this.onChangeStudentUsername.bind(this);
    this.onChangeStudentFullname = this.onChangeStudentFullname.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentPassword = this.onChangeStudentPassword.bind(this);
    this.onChangeStudentPhone = this.onChangeStudentPhone.bind(this);
    this.onChangeStudentAddress = this.onChangeStudentAddress.bind(this);
    this.onChangeStudentGender = this.onChangeStudentGender.bind(this);
    this.onChangeStudentActive = this.onChangeStudentActive.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      username: "",
      fullname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      gender: "",
      active: "",
    };
  }
  onChangeStudentUsername(e) {
    this.setState({ username: e.target.value });
  }
  onChangeStudentFullname(e) {
    this.setState({ fullname: e.target.value });
  }
  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeStudentPassword(e) {
    this.setState({ password: e.target.value });
  }
  onChangeStudentPhone(e) {
    this.setState({ phone: e.target.value });
  }
  onChangeStudentAddress(e) {
    this.setState({ address: e.target.value });
  }
  onChangeStudentGender(e) {
    this.setState({ gender: e.target.value });
  }
  onChangeStudentActive(e) {
    this.setState({ active: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const studentObject = {
      username: this.state.username,
      fullname: this.state.fullname,
      password: this.state.password,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      gender: this.state.gender,
      active: this.state.active,
    };
    axios
      .post("http://localhost:4000/students/create-student", studentObject)
      .then((res) => console.log(res.data));
    this.setState({
      username: "",
      fullname: "",
      password: "",
      email: "",
      phone: "",
      address: "",
      gender: "",
      active: "",
    });
  }

  render() {
    return (
      <div className="newUser">
        <h1 className="newUserTitle">NewUser</h1>
        <form className="newUserForm" onSubmit={this.onSubmit}>
          <div className="newUserItem">
            <label>Username</label>
            <input
              type="text"
              placeholder="john"
              value={this.state.username}
              onChange={this.onChangeStudentUsername}
            />
          </div>
          <div className="newUserItem">
            <label>Fullname</label>
            <input
              type="text"
              placeholder="john Smith"
              value={this.state.fullname}
              onChange={this.onChangeStudentFullname}
            />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              value={this.state.email}
              onChange={this.onChangeStudentEmail}
            />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input
              type="password"
              placeholder="john"
              value={this.state.password}
              onChange={this.onChangeStudentPassword}
            />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input
              type="text"
              placeholder="2154656"
              value={this.state.phone}
              onChange={this.onChangeStudentPhone}
            />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input
              type="text"
              placeholder="new address"
              value={this.state.address}
              onChange={this.onChangeStudentAddress}
            />
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={this.onChangeStudentGender}
              />
              <label For="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={this.onChangeStudentGender}
              />
              <label For="female">Female</label>
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                onChange={this.onChangeStudentGender}
              />
              <label For="other">Other</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select
              className="newUserSelect"
              name="active"
              id="active"
              onChange={this.onChangeStudentActive}
            >
              <option value="">Please Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="newUserButton" type="submit">
            Create
          </button>
        </form>
      </div>
    );
  }
}
