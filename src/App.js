import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  let [time, setTime] = useState(0);
  let [isRunning, setIsRunning] = useState(false);
  let timerId = useRef(null);

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    time = time % 60;
    return `${mins}:${time < 10 ? "0" : ""}${time}`;
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    if (isRunning) {
      timerId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerId.current);
    };
  }, [isRunning]);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <button onClick={handleToggle}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
