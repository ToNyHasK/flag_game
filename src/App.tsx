import React from "react";
import flag from "./pngegg.png";
import "./App.css";

function App() {
  const iniImg = new Array(21).fill(flag);
  const visible = new Array(21).fill("visible");
  const [isHidden, setHidden] = React.useState([...visible]);
  const [flags, setFlags] = React.useState(21);
  const [player, setPlayer] = React.useState("first");
  const [took, setTook] = React.useState(0);
  const [previousPlayer, setpreviousPlayer] = React.useState("first");

  // it maps trough filtered array to make rows
  // 'a' and 'b' changes the shape
  const returnFlag = (a: number, b: number) => {
    const filteredImg = iniImg.filter((elem, index) => index + a < b);
    const mappedImg = filteredImg.map((item, i) => (
      <img
        key={i}
        className="flag"
        src={item}
        alt="simpleFlag"
        style={{ visibility: isHidden[i + a] }}
      />
    ));
    return <div key={`${a}`}>{mappedImg}</div>;
  };
  // function that makes a pyramid out of flags
  // it iterates returnFlag function 6 times and return array
  // with returnFlag functions and also it changes a and b to get the shape of pyramid
  const makeFlagsPyramid = () => {
    let a = 20;
    let b = 21;
    let tempA = 2;
    let tempB = 1;
    let f = [];
    for (let i = 0; i < 6; i++) {
      f.push(returnFlag(a, b));
      a -= tempA;
      b -= tempB;
      tempA++;
      tempB++;
    }
    return f;
  };
  // it changes the values of players, who took flags and which player turn it is
  const checkPlayers = () => {
    if (player === "first") {
      setpreviousPlayer("first");
    } else {
      setpreviousPlayer("second");
    }
    if (player === "first") {
      setPlayer("second");
    } else {
      setPlayer("first");
    }
  };
  // sets flags value, sets visibility of the flag to hidden
  // sets how much flags player took
  // checks which player won
  const takeOneFlag = () => {
    setFlags(flags - 1);
    //document.getElementById(`${21 - flags}`)!.style.visibility = "hidden";
    const newHid = [...isHidden];
    newHid[21 - flags] = "hidden";
    setHidden([...newHid]);
    checkPlayers();
    setTook(1);
    if (flags === 1 || flags === 0) {
      alert("Player " + player + " won");
      resetGame();
    }
  };
  // sets flags value, sets visibility of the flag to hidden
  // sets how much flags player took
  // checks which player won
  // also sets some limits for getElementById to not crash
  const takeTwoFlags = () => {
    setFlags(flags - 2);
    const newHid = [...isHidden];
    newHid[21 - flags] = "hidden";
    newHid[22 - flags] = "hidden";
    setHidden([...newHid]);
    setTook(2);
    checkPlayers();
    if (flags === 1 || flags === 0 || flags === 2) {
      alert("Player " + player + " won");
      resetGame();
    }
  };
  // it resets everything to the original state
  // also restores flags visibility
  const resetGame = () => {
    setFlags(21);
    setPlayer("first");
    setpreviousPlayer("first");
    setTook(0);
    setHidden([...visible]);
  };
  return (
    <div className="App">
      <div className="flagsContainer">{makeFlagsPyramid()}</div>
      <div className="buttonCount">
        <button onClick={() => takeOneFlag()}>Take 1</button>
        <button onClick={() => takeTwoFlags()}>Take 2</button>
        <button onClick={() => resetGame()}>Reset</button>
      </div>
      <div className="player">
        <div>Number of flags: {flags}</div>
        <div>Turn for: {player} player</div>
      </div>
      <div className="took">
        Player {previousPlayer} took: {took}
      </div>
    </div>
  );
}

export default App;
