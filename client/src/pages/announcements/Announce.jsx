import React, { useState, useEffect } from "react";
import "./announce.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Announce = () => {
  const [announce, setAnnounce] = useState([]);

  const handleDelete = (_id) => {
    axios
      .delete("http://localhost:4000/announcements/delete-announce/" + _id)
      .then((res) => toast.success("Announcement Deleted Successfully !"))
      .catch((error) => {
        console.log(error);
      });

    setAnnounce(announce.filter((item) => item._id !== _id));
  };

  const columns = [
    // { field: "id", headerName: "ID", width: 50 },
    { field: "announceName", headerName: "Title", width: 130 },
    { field: "announceDesc", headerName: "Content", width: 300 },
    // { field: "createdby", headerName: "Created By", width: 200 },
    // { field: "password", headerName: "Password", width: 130 },
    // { field: "replies", headerName: "Replies", width: 80 },
    // { field: "address", headerName: "Address", width: 130 },
    // { field: "views", headerName: "Views", width: 50 },
    // { field: "lastpost", headerName: "Last Post", width: 130 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/announcements/" + params.row._id}>
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
      .get("http://localhost:4000/announcements/")
      .then((res) => res.data)
      .then((data) => setAnnounce(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="announce">
      <Toaster />
      {announce.length ? (
        <DataGrid
          rows={announce}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(announce) => announce._id}
        />
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default Announce;
