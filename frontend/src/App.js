import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import ChooseContinent from './components/ChooseContinent.jsx';
import Quiz from './components/Quiz.jsx';
import Score from './components/Score.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/choose-continent" element={<ChooseContinent />} />
          <Route path="/quiz/:continent" element={<Quiz />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
