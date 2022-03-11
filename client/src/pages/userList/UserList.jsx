import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import "./userList.css";

const UserList = () => {
  const [student, setStudent] = useState([]);

  const handleDelete = (_id) => {
    setStudent(student.filter((item) => item._id !== _id));
  };

  const columns = [
    // { field: "id", headerName: "ID", width: 50 },
    { field: "username", headerName: "Username", width: 80 },
    { field: "fullname", headerName: "Fullname", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    // { field: "password", headerName: "Password", width: 130 },
    { field: "phone", headerName: "Phone", width: 130 },
    // { field: "address", headerName: "Address", width: 130 },
    { field: "gender", headerName: "Gender", width: 130 },
    { field: "active", headerName: "Active", width: 130 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:4000/students/")
      .then((res) => res.data)
      .then((data) => setStudent(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="usersList">
      {/* {student &&
        student.map((stu) => {
          return (
            <div key={stu._id}>
              <p>{stu.username}</p>
              <p>{stu.email}</p>
              <p>{stu._id}</p>
            </div>
          );
        })} */}

      <DataGrid
        rows={student}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(student) => student._id}
      />
    </div>
  );
};

export default UserList;
