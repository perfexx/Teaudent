import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMatch, useNavigate } from "react-router-dom";
import "./editCourse.css";
import { Snackbar } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
// import MuiAlert from "@mui/material/Alert";

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

const EditCourse = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    courseName: "",
    courseDesc: "",
    participants: "",
    creator: "",
    material: "",
  });

  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpen(false);
  // };

  const {
    params: { id },
  } = useMatch("/editcourse/:id");

  useEffect(() => {
    axios
      .get("http://localhost:4000/courses/edit-course/" + id)
      .then((res) =>
        setData({
          courseName: res.data.courseName,
          courseDesc: res.data.courseDesc,
          participants: res.data.participants,
          creator: res.data.creator,
          material: res.data.material,
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const courseObject = {
      courseName: data.courseName,
      courseDesc: data.courseDesc,
      participants: data.participants,
      creator: data.creator,
      material: data.material,
    };
    axios
      .put("http://localhost:4000/courses/update-course/" + id, courseObject)
      .then((res) => navigate("/courses"));
    toast.success("Course Updated Successfully !");
  };

  return (
    <div className="editCourse">
      <Toaster />
      {/* <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Course Updated Successfully !
        </Alert>
      </Snackbar> */}
      <h1 className="editCourseTitle">EditCourse</h1>
      <form className="editCourseForm" onSubmit={onSubmit}>
        <div className="editCourseItem">
          <label>Coursename</label>
          <input
            type="text"
            // placeholder="john"
            value={data.courseName}
            onChange={(event) =>
              setData({ ...data, courseName: event.target.value })
            }
          />
        </div>
        <div className="editCourseItem">
          <label>courseDesc</label>
          <input
            type="text"
            // placeholder="john Smith"
            value={data.courseDesc}
            onChange={(event) =>
              setData({ ...data, courseDesc: event.target.value })
            }
          />
        </div>
        <div className="editCourseItem">
          <label>participants</label>
          <input
            type="text"
            // placeholder="john@gmail.com"
            value={data.participants}
            onChange={(event) =>
              setData({ ...data, participants: event.target.value })
            }
          />
        </div>
        <div className="editCourseItem">
          <label>creator</label>
          <input
            type="text"
            // placeholder="john"
            value={data.creator}
            onChange={(event) =>
              setData({ ...data, creator: event.target.value })
            }
          />
        </div>
        <div className="editCourseItem">
          <label>material</label>
          <input
            type="text"
            // placeholder="2154656"
            value={data.material}
            onChange={(event) =>
              setData({ ...data, material: event.target.value })
            }
          />
        </div>

        <button className="editCourseButton" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
