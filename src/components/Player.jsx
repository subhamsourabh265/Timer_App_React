import { useState, useRef } from "react";

const inputPlaceholder = 'Please type your name..';

export default function Player() {
  const playerNameRef = useRef();
  const [playerName, setPlayerName] = useState('');

  function handleClick() {
    setPlayerName(playerNameRef.current.value);
    // playerNameRef.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'unknown entity'}</h2>
      <p>
        <input ref={playerNameRef} type="text" value={playerName} onChange={handleClick} placeholder={inputPlaceholder} />
        {/* <button onClick={handleClick}>Set Name</button> */}
      </p>
    </section>
  );
}
