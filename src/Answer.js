import React from "react";
import "./Answer.css";
import Button from "react-bootstrap/Button";

const Answer = ({ handleAnswerButtonClick, questions, currentQuestion }) => {
  return (
    <>
      <div className="w3-container title py-5">
        <h1>3 Choice Quiz</h1>
        <h2>
          <span className="question">
            Question&nbsp;
            {currentQuestion + 1}
          </span>
          <br></br>
          {questions[currentQuestion].questionText}
        </h2>
        <ul id="btn">
          {questions[currentQuestion].answerOptions.map((answerOption, key) => (
            <li
              key={key}
              onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
            >
              <Button className="mt-4" variant="primary">
                {answerOption.answerText}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Answer;
