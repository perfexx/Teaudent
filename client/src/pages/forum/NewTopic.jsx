import React, { useState } from "react";
import "./newTopic.css";
import axios from "axios";

const NewTopic = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
    createdby: "",
    replies: "",
    views: "",
    lastpost: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const topicObject = {
      title: data.title,
      content: data.content,
      createdby: "test",
      replies: "1",
      views: "2",
      lastpost: "test",
    };
    axios
      .post("http://localhost:4000/topics/create-topic", topicObject)
      .then((res) =>
        setData({
          title: "",
          content: "",
          createdby: "",
          replies: "",
          views: "",
          lastpost: "",
        })
      );
  };
  return (
    <div className="newTopic">
      <h1 className="newTopicTitle">Create New Topic</h1>
      <form className="newTopicForm" onSubmit={onSubmit}>
        <div className="newTopicItem">
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
        <div className="newTopicItem">
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

        <button className="newTopicButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewTopic;
