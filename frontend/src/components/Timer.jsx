/* eslint-disable react/prop-types */
import { useEffect } from "react";

function Timer(props) {
  const { timer, setTimer } = props;
  useEffect(() => {
    const int = setInterval(() => {
      setTimer((prevState) => (prevState < 1 ? 0 : prevState - 1));
    }, 1000);
    return () => clearInterval(int);
  }, []);
  return <h4>{timer} s</h4>;
}

export default Timer;
