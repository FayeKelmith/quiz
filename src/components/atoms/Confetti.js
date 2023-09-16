import Confetti from "react-dom-confetti";
import { useState } from "react";
const config = {
  angle: 150,
  spread: 360,
  startVelocity: 40,
  elementCount: 150,
  dragFriction: 0.1,
  duration: 4000,
  stagger: 3,
  width: "20px",
  height: "20px",
  perspective: "500px",
  colors: [
    "#a864fd",
    "#29cdff",
    "#78ff44",
    "#ff718d",
    "#fdff6a",
    "#008080",
    "#ff4747",
  ],
};

export const Confettis = () => {
  const [active, setActive] = useState(false);

  setTimeout(() => {
    setActive(true);
  }, 1000);
  return <Confetti active={active} config={config}></Confetti>;
};
