import React from "react";

export default function Answer() {
  return (
    <>
      <h1>3 Choice Quiz</h1>
      <h2>
        <span>
          Question
          {currentQuestion + 1}
        </span>
        <br></br>
        {questions[currentQuestion].questionText}
      </h2>
      {/* {questions[currentQuestion].answerOptions.map((answerOptions, key) => (
        <li>
          key={key}
          onClick = {() => handleAnswerButtonClick(answerOptions.isCorrect)}
          {answerOptions.answerText}
        </li> */}
      {/* ))} */}
    </>
  );
}
