import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={2} />
        <TimerChallenge title={"Not Easy"} targetTime={5} />
        <TimerChallenge title={"Difficult"} targetTime={15} />
        <TimerChallenge title={"Pro Only"} targetTime={20} />
      </div>
    </>
  );
}

export default App;
