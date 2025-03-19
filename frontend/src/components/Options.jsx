import React from "react";

const Options = ({ options, correctAnswer, onAnswer, timeOut }) => {
  return (
    <div className="options">
      {options.map((option, index) => {
        const isCorrect = option === correctAnswer;
        return (
          <button
            key={index}
            className={`option-button ${timeOut && isCorrect ? "correct-answer" : ""}`}
            onClick={() => onAnswer(isCorrect)}
            disabled={timeOut}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Options;

//////////// 1 