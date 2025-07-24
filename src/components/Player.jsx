import { useRef, useState } from "react";

export default function Player() {
  const [name, setName] = useState(null);

  const playerName = useRef();

  function handelClicked() {
    setName(playerName.current.value);
    playerName.current.value = null;
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handelClicked(); // trigger button logic
    }
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} onKeyDown={handleKeyDown} />
        <button onClick={handelClicked}>Set Name</button>
      </p>
    </section>
  );
}
