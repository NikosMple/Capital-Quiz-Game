import { useEffect, useState } from "react";

const useFetchQuestions = (continent) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";
      const fetchUrl = `${apiUrl}/api/quiz?continent=${continent}`;

      console.log("Fetching from:", fetchUrl);

      try {
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        console.log("Received Questions:", data);

        const formattedQuestions = data.map((item) => ({
          ...item,
          options: [item.option_a, item.option_b, item.option_c, item.option_d],
        }));

        setQuestions(formattedQuestions);
      } catch (err) {
        console.error("Error fetching questions:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [continent]);

  return { questions, loading, error };
};

export default useFetchQuestions;
