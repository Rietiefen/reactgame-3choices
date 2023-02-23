import React, { useState } from "react";
import Answer from "./components/Answer";

function App() {
  const questions = [
    { questionText: `Which is the longest river in the world?` },
    (answerOptions = [
      { answerText: `Nile(Africa)`, isCorrect: true },
      { answerText: `Amazon(SouthAmerica)`, isCorrect: false },
      { answerText: `Yangtze(China)`, isCorrect: false },
    ]),
    { questionText: `Which is the world biggest continent?` },
    (answerOptions = [
      { answerText: `North America`, isCorrect: false },
      { answerText: `Asia`, isCorrect: true },
      { answerText: `Africa`, isCorrect: false },
    ]),
    { questionText: `Which mushrooms are poisonous?` },
    (answerOptions = [
      { answerText: `Amanita virosa`, isCorrect: true },
      { answerText: `Shiitake Mushroom`, isCorrect: false },
      { answerText: `oyster mushroom`, isCorrect: false },
    ]),
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  function handleAnswerButtonClick(isCorrect) {
    if (isCorrect === true) {
      alert("Correct!");
      setScore(score + 1);
    } else {
      alert("try again!");
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="App">
      {schowScore ? (
        <p>
          Well done!{" "}
          <span className="correct">{score}/3 Questions are correct!</span>
        </p>
      ) : (
        <Answer
          handleAnswerButtonClick={handleAnswerButtonClick}
          questions={questions}
          currentQuestion={currentQuestion}
        />
      )}
    </div>
  );
}

export default App;
