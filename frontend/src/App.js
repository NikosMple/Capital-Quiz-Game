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
          <Route path="/Europe" element={<Quiz continent="Europe" />} />
          <Route path="/Asia" element={<Quiz continent="Asia" />} />
          <Route path="/Africa" element={<Quiz continent="Africa" />} />
          <Route path="/America" element={<Quiz continent="America" />} />
          <Route path="/Oceania" element={<Quiz continent="Oceania" />} />
          <Route path="/Rest" element={<Quiz continent="Rest" />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;