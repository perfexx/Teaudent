import React, { useState, useEffect } from "react";
import "./courseInfo.css";
import {
  ArrowDownward,
  ArrowUpward,
  Update,
  DeleteOutline,
} from "@mui/icons-material";
import courseImage from "../../img/courseImg.png";
import axios from "axios";
import { Tooltip, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { Link } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CourseInfo = () => {
  const [course, setCourse] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleDelete = (_id) => {
    axios
      .delete("http://localhost:4000/courses/delete-course/" + _id)
      .then((res) => handleClick())
      .catch((error) => {
        console.log(error);
      });
    setCourse(course.filter((item) => item._id !== _id));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/courses/")
      .then((res) => res.data)
      .then((data) => setCourse(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="course">
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Course deleted Successfully !
        </Alert>
      </Snackbar>
      {course.map((d) => {
        return (
          <div className="courseItem" key={d._id}>
            <img className="courseItemImg" src={courseImage} alt="course" />
            <span className="courseTitle">{d.courseName}</span>
            <div className="courseDescContainer">
              <span className="courseDesc">{d.courseDesc}</span>
            </div>
            <div className="courseDataContainer">
              <span className="courseData">2,145</span>
              <span className="courseDataRate">
                -11.4
                <ArrowDownward className="courseIcon negative" />
              </span>
            </div>
            <span className="courseSub">Compared to last month</span>
            <div className="courseHandleContainer">
              <Tooltip title="Update Course" arrow>
                <Link to={"/editcourse/" + d._id}>
                  <Update className="courseUpdateIcon" />
                </Link>
              </Tooltip>
              <Tooltip title="Delete Course" arrow>
                <DeleteOutline
                  className="courseDeleteIcon"
                  onClick={() => handleDelete(d._id)}
                />
              </Tooltip>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseInfo;
