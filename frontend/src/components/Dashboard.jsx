import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  return (
        <div className="welcome-screen">
          <h1>Welcome to<br />
          <span className='title'>Capital 🌍 Quiz</span></h1>
          <p>Get ready to test your knowledge about capitals!</p>
          <Link to="/choose-continent" className="start-button">Start</Link>
        </div>
  );  
};

export default Dashboard;
