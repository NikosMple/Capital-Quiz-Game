import React, { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft, onTimeOut }) => {
  useEffect(() => {
    if (timeLeft === 0) {
      onTimeOut();
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, onTimeOut, setTimeLeft]);

  return <div className="timer">⌛: {timeLeft}s</div>;
};

export default Timer;