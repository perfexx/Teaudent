import React, { useState } from "react";
import "./newQuiz.css";
import axios from "axios";

const NewQuiz = () => {
  const [data, setData] = useState({
    questionText: "",
    answerOptions: [
      { answerText: "", isCorrect: "" },
      { answerText: "", isCorrect: "" },
      { answerText: "", isCorrect: "" },
      { answerText: "", isCorrect: "" },
    ],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const quizObject = {
      questionText: data.questionText,
      answerOptions: [
        { answerText: data.answerText, isCorrect: data.isCorrect },
        { answerText: data.answerText, isCorrect: data.isCorrect },
        { answerText: data.answerText, isCorrect: data.isCorrect },
        { answerText: data.answerText, isCorrect: data.isCorrect },
      ],
    };

    axios
      .post("http://localhost:4000/quiz/create-quiz", quizObject)
      .then((res) =>
        setData({
          questionText: "",
          answerOptions: [
            { answerText: "", isCorrect: Boolean },
            { answerText: "", isCorrect: Boolean },
            { answerText: "", isCorrect: Boolean },
            { answerText: "", isCorrect: Boolean },
          ],
        })
      );
  };
  return (
    <div className="newQuiz">
      <h1>newQuiz</h1>
      <form className="newQuizForm" onSubmit={onSubmit}>
        <div className="newQuizItem">
          <label>Question Text</label>
          <input
            type="text"
            // placeholder="john"
            value={data.questionText}
            onChange={(event) =>
              setData({ ...data, questionText: event.target.value })
            }
          />

          <label>Answer Text1</label>
          <input
            type="text"
            // placeholder="john"
            value={data.answerOptions.answerText}
            onChange={(event) => setData({ ...data })}
          />
          <label>Answer Text2</label>
          <input
            type="text"
            // placeholder="john"
            value={data.answerOptions.answerText}
            onChange={(event) => setData({ ...data })}
          />
          <label>Answer Text3</label>
          <input
            type="text"
            // placeholder="john"
            value={data.answerOptions.answerText}
            onChange={(event) => setData({ ...data })}
          />
          <label>Answer Text4</label>
          <input
            type="text"
            // placeholder="john"
            value={data.answerOptions.answerText}
            onChange={(event) => setData({ ...data })}
          />
        </div>

        <div className="newQuizGender">
          <label>Choose Correct Answer</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={(event) =>
              setData({ ...data, gender: event.target.value })
            }
          />
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={(event) =>
              setData({ ...data, gender: event.target.value })
            }
          />
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            onChange={(event) =>
              setData({ ...data, gender: event.target.value })
            }
          />
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            onChange={(event) =>
              setData({ ...data, gender: event.target.value })
            }
          />
        </div>

        <button className="newQuizButton" type="submit">
          Add More Question
        </button>
        <button className="newQuizButton" type="submit">
          Create Quiz
        </button>
      </form>
    </div>
  );
};

export default NewQuiz;
