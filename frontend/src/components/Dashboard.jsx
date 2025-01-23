import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
        <div className="welcome-screen">
          <h1>Welcome to <br />
          <span className='title'>Capital 🌍 Quiz</span></h1>
          <p>Get ready to test your knowledge about capitals!</p>
          <button className="start-button" 
          onClick={() => navigate('/choose-continent')}>
            Start
          </button>
        </div>
  );
};

export default Dashboard;
