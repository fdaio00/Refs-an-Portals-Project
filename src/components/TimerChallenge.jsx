import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [tiemrExpired, setTiemrExpired] = useState(false);
  const timer = useRef();

  function handelStart() {
    setTimerStarted(true);

    timer.current = setTimeout(() => {
      setTimerStarted(false);
      setTiemrExpired(true);
    }, targetTime * 1000);
  }

  function handelStop() {
    setTimerStarted(false);
    clearTimeout(timer.current);
  }
  return (
    <>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        {tiemrExpired && <p>The Time Is Over</p>}
        <p>
          <button onClick={timerStarted ? handelStop : handelStart}>
            {!timerStarted ? "Start" : "Stop"}
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "time is running" : " time is not running"}
        </p>
      </section>
    </>
  );
}
