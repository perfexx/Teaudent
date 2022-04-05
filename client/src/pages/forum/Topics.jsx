import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import "./topics.css";
import toast, { Toaster } from "react-hot-toast";

const Topics = () => {
  const [topic, setTopic] = useState([]);

  const handleDelete = (_id) => {
    axios
      .delete("http://localhost:4000/topics/delete-topic/" + _id)
      .then((res) => toast.success("Topic Deleted Successfully !"))
      .catch((error) => {
        console.log(error);
      });

    setTopic(topic.filter((item) => item._id !== _id));
  };

  const columns = [
    // { field: "id", headerName: "ID", width: 50 },
    { field: "title", headerName: "Title", width: 130 },
    { field: "content", headerName: "Content", width: 300 },
    { field: "createdby", headerName: "Created By", width: 200 },
    // { field: "password", headerName: "Password", width: 130 },
    { field: "replies", headerName: "Replies", width: 80 },
    // { field: "address", headerName: "Address", width: 130 },
    { field: "views", headerName: "Views", width: 50 },
    { field: "lastpost", headerName: "Last Post", width: 130 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/topic/" + params.row._id}>
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
      .get("http://localhost:4000/topics/")
      .then((res) => res.data)
      .then((data) => setTopic(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="topics">
      <Toaster />
      {topic.length ? (
        <DataGrid
          rows={topic}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(topic) => topic._id}
        />
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default Topics;
