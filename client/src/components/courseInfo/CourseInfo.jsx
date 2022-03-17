import React, { useState, useEffect } from "react";
import "./courseInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import courseImage from "../../img/courseImg.png";
import axios from "axios";

function CourseInfo() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/courses/")
      .then((res) => res.data)
      .then((data) => setCourse(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(course);

  return (
    <div className="course">
      <div className="courseItem">
        <img className="courseItemImg" src={courseImage} alt="course" />
        <span className="courseTitle">{course.courseDesc}</span>
        <div className="courseDescContainer">
          <span className="courseDesc">Course Description</span>
        </div>
        <div className="courseMoneyContainer">
          <span className="courseMoney">2,145</span>
          <span className="courseMoneyRate">
            -11.4
            <ArrowDownward className="courseIcon negative" />
          </span>
        </div>
        <span className="courseSub">Compared to last month</span>
      </div>
      <div className="courseItem">
        <img className="courseItemImg" src={courseImage} alt="course" />
        <span className="courseTitle">Course Two</span>
        <div className="courseDescContainer">
          <span className="courseDesc">Course Description</span>
        </div>
        <div className="courseMoneyContainer">
          <span className="courseMoney">3,655</span>
          <span className="courseMoneyRate">
            -8.4
            <ArrowDownward className="courseIcon negative" />
          </span>
        </div>
        <span className="courseSub">Compared to last month</span>
      </div>
      <div className="courseItem">
        <img className="courseItemImg" src={courseImage} alt="course" />
        <span className="courseTitle">Course Three</span>
        <div className="courseDescContainer">
          <span className="courseDesc">Course Description</span>
        </div>
        <div className="courseMoneyContainer">
          <span className="courseMoney">2,503</span>
          <span className="courseMoneyRate">
            +3.69
            <ArrowUpward className="courseIcon" />
          </span>
        </div>
        <span className="courseSub">Compared to last month</span>
      </div>
    </div>
  );
}

export default CourseInfo;
