import React, { useState } from "react";
import "./newCourse.css";
import axios from "axios";

const NewCourse = () => {
  const [data, setData] = useState({
    courseName: "",
    courseDesc: "",
    participants: "",
    creator: "",
    material: "",
  });

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
      .post("http://localhost:4000/courses/create-course", courseObject)
      .then((res) =>
        setData({
          courseName: "",
          courseDesc: "",
          participants: "",
          creator: "",
          material: "",
        })
      );
  };

  return (
    <div className="newCourse">
      <h1 className="newCourseTitle">NewCourse</h1>
      <form className="newCourseForm" onSubmit={onSubmit}>
        <div className="newCourseItem">
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
        <div className="newCourseItem">
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
        <div className="newCourseItem">
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
        <div className="newCourseItem">
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
        <div className="newCourseItem">
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

        <button className="newCourseButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewCourse;
