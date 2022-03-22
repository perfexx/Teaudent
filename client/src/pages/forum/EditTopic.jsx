import React, { useState, useEffect } from "react";
import "./editTopic.css";
import { useNavigate, useMatch } from "react-router-dom";
import axios from "axios";

const EditTopic = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const {
    params: { id },
  } = useMatch("/topic/:id");

  useEffect(() => {
    axios
      .get("http://localhost:4000/topics/edit-topic/" + id)
      .then((res) =>
        setData({
          title: res.data.title,
          content: res.data.content,
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const topicObject = {
      title: data.title,
      content: data.content,
    };
    axios
      .put("http://localhost:4000/topics/update-topic/" + id, topicObject)
      .then((res) => {
        navigate("/topics");
      });
  };
  return (
    <div className="editTopic">
      <h1 className="editTopicTitle">Edit Topic</h1>
      <form className="editTopicForm" onSubmit={onSubmit}>
        <div className="editTopicItem">
          <label>Title</label>
          <input
            type="text"
            // placeholder="john"
            value={data.title}
            onChange={(event) =>
              setData({ ...data, title: event.target.value })
            }
          />
        </div>
        <div className="editTopicItem">
          <label>Content</label>
          <input
            type="text"
            // placeholder="john Smith"
            value={data.content}
            onChange={(event) =>
              setData({ ...data, content: event.target.value })
            }
          />
        </div>

        <button className="editTopicButton" type="submit">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditTopic;
