import React from 'react';

const Options = ({ options, onAnswer }) => {
  return (
    <div className='options'>
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option.isCorrect)}>
          {option.answer}
        </button>
      ))}
    </div>
  );
};

export default Options;
