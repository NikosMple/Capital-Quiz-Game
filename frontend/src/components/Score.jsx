import React from 'react';
import { useNavigate } from 'react-router-dom';

const Score = ({ score, total }) => {
  const navigate = useNavigate();

  const userScoreEmoji = () => {
    const ratio = score / total;
    if (ratio === 1) return "🐐"; 
    if (ratio >= 0.8) return "⭐"; 
    if (ratio >= 0.3 && ratio < 0.8) return "🆗"; 
    if (ratio < 0.3) return "💩"; 
  };

  return (
    <div className="score">
      <h1>Quiz Completed!</h1>
      <p>Your final score is:</p>
      <h2>
        {score} / {total} {userScoreEmoji()}
      </h2>
      <div className="score-actions">
        
        <button className='choose-button' onClick={() => navigate('/choose-continent')}>
          Choose Another Continent 
        </button>
      </div>
    </div>
  );
};

export default Score;
