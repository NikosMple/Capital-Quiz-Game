import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuizLogic from './QuizLogic.jsx';

const QuizLoader = () => {
  const { continent } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response =  await fetch(`${process.env.REACT_APP_API_URL}/api/quiz?continent=${continent}`);
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        setQuestions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [continent]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <QuizLogic questions={questions} />;
};

export default QuizLoader;