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
          <label>Question Text 1</label>
          <input
            type="text"
            onChange={(event) =>
              setData({ ...data, questionText: event.target.value })
            }
          />

          <label>Answer Text 1</label>
          <input
            type="text"
            // placeholder="john"
            // value={data.answerOptions.answerText}
            onChange={(event) =>
              setData({ ...data, isCorrect: event.target.value })
            }
          />
          <label>Answer Text 2</label>
          <input
            type="text"
            // placeholder="john"
            // value={data.answerOptions.answerText}
            onChange={(event) => setData({ ...data })}
          />
          <label>Answer Text 3</label>
          <input
            type="text"
            // placeholder="john"
            // value={data.answerOptions.answerText}
            onChange={(event) => setData({ ...data })}
          />
          <label>Answer Text 4</label>
          <input
            type="text"
            // placeholder="john"
            // value={data.answerOptions.answerText}
            onChange={(event) => setData({ ...data })}
          />
        </div>

        <div className="newQuizGender">
          <label>Choose Correct Answer</label>
          <input
            type="radio"
            name="answer1"
            id="ans1"
            value="ans1"
            onChange={(event) =>
              setData({ ...data, gender: event.target.value })
            }
          />
          <input
            type="radio"
            name="answer1"
            id="ans2"
            value="ans2"
            onChange={(event) =>
              setData({ ...data, gender: event.target.value })
            }
          />
          <input
            type="radio"
            name="answer1"
            id="ans3"
            value="ans3"
            onChange={(event) =>
              setData({ ...data, gender: event.target.value })
            }
          />
          <input
            type="radio"
            name="answer1"
            id="ans4"
            value="ans4"
            onChange={(event) =>
              setData({ ...data, gender: event.target.value })
            }
          />
        </div>

        {/* <button className="newQuizButton" type="submit">
          Add More Question
        </button> */}
        <button className="newQuizButton" type="submit">
          Create Quiz
        </button>
        <p>{JSON.stringify(data)}</p>
      </form>
    </div>
  );
};

export default NewQuiz;
