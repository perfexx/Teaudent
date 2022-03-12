import React, { useState } from "react";
import "./newUser.css";
import axios from "axios";

const NewUser = () => {
  const [data, setData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
    active: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const studentObject = {
      username: data.username,
      fullname: data.fullname,
      password: data.password,
      email: data.email,
      phone: data.phone,
      address: data.address,
      gender: data.gender,
      active: data.active,
    };
    axios
      .post("http://localhost:4000/students/create-student", studentObject)
      .then((res) =>
        setData({
          username: "",
          fullname: "",
          password: "",
          email: "",
          phone: "",
          address: "",
          gender: "",
          active: "",
        })
      );
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">NewUser</h1>
      <form className="newUserForm" onSubmit={onSubmit}>
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            // placeholder="john"
            value={data.username}
            onChange={(event) =>
              setData({ ...data, username: event.target.value })
            }
          />
        </div>
        <div className="newUserItem">
          <label>Fullname</label>
          <input
            type="text"
            // placeholder="john Smith"
            value={data.fullname}
            onChange={(event) =>
              setData({ ...data, fullname: event.target.value })
            }
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            // placeholder="john@gmail.com"
            value={data.email}
            onChange={(event) =>
              setData({ ...data, email: event.target.value })
            }
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            // placeholder="john"
            value={data.password}
            onChange={(event) =>
              setData({ ...data, password: event.target.value })
            }
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            // placeholder="2154656"
            value={data.phone}
            onChange={(event) =>
              setData({ ...data, phone: event.target.value })
            }
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            // placeholder="new address"
            value={data.address}
            onChange={(event) =>
              setData({ ...data, address: event.target.value })
            }
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
              onChange={(event) =>
                setData({ ...data, gender: event.target.value })
              }
            />
            <label For="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(event) =>
                setData({ ...data, gender: event.target.value })
              }
            />
            <label For="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              onChange={(event) =>
                setData({ ...data, gender: event.target.value })
              }
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
            onChange={(event) =>
              setData({ ...data, active: event.target.value })
            }
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
};

export default NewUser;
