import React, { useState } from "react";
import "./newAnnounce.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const NewAnnounce = () => {
  const [data, setData] = useState({
    announceName: "",
    announceDesc: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const announceObject = {
      announceName: data.announceName,
      announceDesc: data.announceDesc,
    };
    axios
      .post(
        "http://localhost:4000/announcements/create-announce",
        announceObject
      )
      .then((res) =>
        setData({
          announceName: "",
          announceDesc: "",
        })
      );
    toast.success("Announcement Created Successfully !");
  };

  return (
    <div className="newAnnounce">
      <Toaster />
      <h1 className="newAnnounceTitle">Create New Announcement</h1>
      <form className="newAnnounceForm" onSubmit={onSubmit}>
        <div className="newAnnounceItem">
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
        <div className="newAnnounceItem">
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

        <button className="newAnnounceButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewAnnounce;
