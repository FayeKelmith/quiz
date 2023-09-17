import { useState, useEffect } from "react";

//FIXME: the timer has to reset when I answer a question.
const Timer = ({ onCountDown, timing, resetTimer, setResetTimer }) => {
  const [count, setCount] = useState(timing);
  useEffect(() => {
    const timerId = setInterval(() => {
      if (resetTimer) {
        setCount(timing);
        setResetTimer(false);
      } else {
        if (count === 0) {
          clearInterval(timerId);
          onCountDown();
          setCount(timing);
        } else if (count >= 0) {
          setCount(count - 1);
        }
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [count, onCountDown, timing, resetTimer, setResetTimer]);

  return (
    <div
      className={`text-5xl font-major py-4 font-semibold ${
        count > 5 ? "text-primary" : "text-secondary"
      }`}
    >
      {count}{" "}
    </div>
  );
};

export default Timer;
