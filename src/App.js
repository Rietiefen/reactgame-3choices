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
  function handleAnswerButtonClick(isCorrect) {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  }

  return (
    <div className="App">
      <Answer />
    </div>
  );
}

export default App;
