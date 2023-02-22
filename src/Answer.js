import React from "react";

const Answer = () => {
  return (
    <>
      <h1>3 Choice Quiz</h1>
      <h2>
        <span>Question {currentQuestion + 1}</span>
        <br></br>
        {questions[currentQuestion].questionText}
      </h2>
      {questions[currentQuestion].answerOptions.map((answerOption, key) => (
        <li>
          key={key}
          onClick = {() => handleAnswerButtonClick(answerOption.isCorrect)}
          {answerOption.answerText}
        </li>
      ))}
    </>
  );
};

export default Answer;
