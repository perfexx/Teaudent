import React, { useState, useEffect } from "react";
import "./editAnnounce.css";
import { useNavigate, useMatch } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const EditAnnounce = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    announceName: "",
    announceDesc: "",
  });

  const {
    params: { id },
  } = useMatch("/announcements/:id");

  useEffect(() => {
    axios
      .get("http://localhost:4000/announcements/edit-announce/" + id)
      .then((res) =>
        setData({
          announceName: res.data.announceName,
          announceDesc: res.data.announceDesc,
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const announceObject = {
      announceName: data.announceName,
      announceDesc: data.announceDesc,
    };
    axios
      .put(
        "http://localhost:4000/announcements/update-announce/" + id,
        announceObject
      )
      .then((res) => {
        toast.success("Announcement Updated Succesfully !");
        navigate("/announcements");
      });
  };

  return (
    <div className="editAnnounce">
      <Toaster />
      <h1 className="editAnnounceTitle">Edit Announce</h1>
      <form className="editAnnounceForm" onSubmit={onSubmit}>
        <div className="editAnnounceItem">
          <label>Title</label>
          <input
            type="text"
            // placeholder="john"
            value={data.announceName}
            onChange={(event) =>
              setData({ ...data, announceName: event.target.value })
            }
          />
        </div>
        <div className="editAnnounceItem">
          <label>Content</label>
          <input
            type="text"
            // placeholder="john Smith"
            value={data.announceDesc}
            onChange={(event) =>
              setData({ ...data, announceDesc: event.target.value })
            }
          />
        </div>

        <button className="editAnnounceButton" type="submit">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditAnnounce;
