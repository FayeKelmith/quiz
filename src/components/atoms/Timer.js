import { useState, useEffect } from "react";

//FIXME: the timer has to reset when I answer a question.
const Timer = ({ onCountDown, timing }) => {
  const [count, setCount] = useState(timing);
  useEffect(() => {
    const timerId = setInterval(() => {
      if (count === 0) {
        clearInterval(timerId);
        onCountDown(0);
        setCount(timing);
      } else if (count >= 0) {
        setCount(count - 1);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [count, onCountDown, timing]);

  return <div className="text-4xl">{count} </div>;
};

export default Timer;
